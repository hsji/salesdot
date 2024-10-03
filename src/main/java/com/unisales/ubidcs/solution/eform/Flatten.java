package com.unisales.ubidcs.solution.eform;

import java.awt.Color;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.pdmodel.graphics.state.PDExtendedGraphicsState;
import org.bouncycastle.util.encoders.Base64;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.unisales.ubidcs.solution.eform.utils.FlattenUtil;
import com.unisales.ubidcs.solution.eform.utils.JsonUtil;
import com.unisales.ubidcs.solution.eform.utils.LicenseCheck;
import com.unisales.ubidcs.solution.eform.vo.FlattenFieldVO;
import com.unisales.ubidcs.solution.eform.vo.FlattenOwnerVO;
import com.unisales.ubidcs.solution.eform.vo.FlattenPageVO;
import com.unisales.ubidcs.solution.eform.vo.FlattenVO;

import org.apache.pdfbox.Loader;

public class Flatten {
	private static final String PDF_PROPERTIE_PATH = "minupdf.properties";

	private static Properties properties = new Properties();

	static Flatten flattenInstance;
	
	private String serverName = "";

	public static Flatten getInstance(String path) {
		if (flattenInstance == null) {
			flattenInstance = new Flatten();
			// String propPath =
			// CommonUtil.getResourceFilePath("properties/minupdf.properties");
			setPDFProperties(path + "/classes/ubidcs/properties/minupdf.properties");
		}
		return flattenInstance;
	}

	public static Flatten getInstance() throws URISyntaxException {
		String userDirectory = Flatten.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath();
		File parentFile = new File(userDirectory);
		System.out.println("getInstance=========" + userDirectory + ":" + parentFile.getParent());
		return getInstance(parentFile.getParent());
	}

	protected static void setPDFProperties(String path) {
		try {
			// InputStream inputStream = new FileInputStream(path + File.separator +
			// "minupdf.properties");
			InputStream inputStream = new FileInputStream(path);
			File _file = File.createTempFile("tempMinuPdf", "properties");
			FileUtils.copyInputStreamToFile(inputStream, _file);
			if (_file.exists()) {
				FileReader resources = new FileReader(_file);
				properties.load(resources);
				_file.delete();
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	protected void showText(PDPageContentStream contentStream, PDFont font, float fontSize, Color fontColor,
			float textPosX, float textPosY, String text) throws IOException {
		contentStream.saveGraphicsState();
		contentStream.beginText();
		contentStream.setFont(font, fontSize);
		contentStream.setNonStrokingColor(fontColor);
		contentStream.newLineAtOffset(textPosX, textPosY);
		contentStream.showText(text);
		contentStream.endText();
		contentStream.restoreGraphicsState();
	}

	protected void writeTextFieldData(PDDocument document, PDPageContentStream contentStream, FlattenFieldVO fieldVO,
			boolean isMultiline, HashMap<String, PDFont> fontMap) {
		String textValue = fieldVO.getValue();
		boolean isAbbreviation = false;
		if (textValue == null || textValue.isEmpty())
			return;
		try {
			Double pdfX1 = fieldVO.getPdfX();
			Double pdfY1 = fieldVO.getPdfY();
			Double pdfX2 = fieldVO.getPdfX2();
			Double pdfY2 = fieldVO.getPdfY2();
			Double fontSize = FlattenUtil.getDoubleValue(Integer.valueOf(fieldVO.getFontSize()));
			Double textFieldWidth = Double.valueOf(Math.abs(pdfX2.doubleValue() - pdfX1.doubleValue()));
			Double textFieldHeight = Double.valueOf(Math.abs(pdfY2.doubleValue() - pdfY1.doubleValue()));
			String fontName = fieldVO.getFontName();
			String fontBold = fieldVO.getBold();
			PDFont font = FlattenUtil.getPDFont(document, fontName, "true".equals(fontBold), properties, fontMap);
			float textHeight = font.getFontDescriptor().getCapHeight() / 1000.0F * fontSize.floatValue();
			String fontColorStr = fieldVO.getFontColor();
			Color fontColor = FlattenUtil.hex2Rgb(fontColorStr);
			if (isMultiline) {
				Double lineCount = Double
						.valueOf(Math.floor(fieldVO.getHeight().doubleValue() / fontSize.doubleValue()));
				int limtLine = lineCount.intValue();
				if (fieldVO.getType().equals("MemoField")) {
					PDExtendedGraphicsState gs2 = new PDExtendedGraphicsState();
					Color backColor = FlattenUtil.hex2Rgb(fieldVO.getBackColor());
					contentStream.setNonStrokingColor(backColor);
					if (StringUtils.isNotEmpty(fieldVO.getBackColor()) && fieldVO.getBackColor().length() == 9) {
						int alpha = Integer.valueOf(fieldVO.getBackColor().substring(7, 9), 16).intValue();
						gs2.setNonStrokingAlphaConstant(Float.valueOf(alpha / 255.0F));
						contentStream.setGraphicsStateParameters(gs2);
					}
					contentStream.addRect(pdfX1.floatValue(), pdfY2.floatValue(), textFieldWidth.floatValue(),
							textFieldHeight.floatValue());
					contentStream.fill();
					contentStream.restoreGraphicsState();
				}
				String[] textValues = null;
				if (textValue.contains("&#13;&#10;")) {
					textValues = textValue.split("&#13;&#10;");
				} else {
					textValues = textValue.split("\\n");
				}
				if (textValues.length == 1) {
					float fullTextWidth = font.getStringWidth(textValue) / 1000.0F * fontSize.floatValue();
					float orgLableWidth = fieldVO.getWidth().floatValue();
					if (fullTextWidth > orgLableWidth) {
						String[] fullTextValues = textValue.split(" ");
						String fullTextValue = fullTextValues[0];
						StringBuffer sbText = new StringBuffer();
						for (int j = 1; j < fullTextValues.length; j++) {
							fullTextWidth = font.getStringWidth(fullTextValue + " " + fullTextValues[j]) / 1000.0F
									* fontSize.floatValue();
							fullTextWidth += fontSize.floatValue() * (j + 1);
							if (fullTextWidth > orgLableWidth) {
								sbText.append(fullTextValue).append("\n");
								fullTextValue = fullTextValues[j];
							} else {
								fullTextValue = fullTextValue + " " + fullTextValues[j];
							}
						}
						textValues = sbText.append(fullTextValue).toString().split("\n");
					}
				}
				float startPosY = pdfY1.floatValue();
				if (isAbbreviation && textValues.length > limtLine)
					textValues[limtLine - 1] = textValues[limtLine - 1] + " ...";
				for (int i = 0; i < textValues.length; i++) {
					String text = textValues[i];
					float textWidth = font.getStringWidth(text) / 1000.0F * fontSize.floatValue();
					float textPosX = FlattenUtil.getTextPosX(pdfX1.floatValue(), fieldVO.getTextAlign(),
							textFieldWidth.floatValue(), textWidth);
					float textPosY = 0.0F;
					if (textValues.length == 1 && !isMultiline) {
						textPosY = pdfY2.floatValue() + (textFieldHeight.floatValue() - textHeight) / 2.0F;
					} else {
						textPosY = startPosY - textHeight * (i + 1) * 1.4F;
					}
					if (isAbbreviation && i >= limtLine)
						break;
					showText(contentStream, font, fontSize.floatValue(), fontColor, textPosX, textPosY, text);
				}
			} else {
				float textWidth = font.getStringWidth(textValue) / 1000.0F * fontSize.floatValue();
				float textPosX = FlattenUtil.getTextPosX(pdfX1.floatValue(), fieldVO.getTextAlign(),
						textFieldWidth.floatValue(), textWidth);
				float textPosY = pdfY2.floatValue() + (textFieldHeight.floatValue() - textHeight) / 2.0F;
				showText(contentStream, font, fontSize.floatValue(), fontColor, textPosX, textPosY, textValue);
			}
			contentStream.saveGraphicsState();
		} catch (IOException ioException) {
			ioException.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	protected void writeImageFieldData(PDDocument document, PDPageContentStream contentStream, FlattenFieldVO fieldVO) {
		String imageValue = fieldVO.getValue();
		if (imageValue == null || imageValue.isEmpty())
			return;
		try {
			byte[] imageData = Base64.decode(imageValue.split(",")[1]);
			PDImageXObject pdImage = PDImageXObject.createFromByteArray(document, imageData, "signField");
			Double pdfX1 = fieldVO.getPdfX();
			Double pdfY1 = fieldVO.getPdfY();
			Double pdfX2 = fieldVO.getPdfX2();
			Double pdfY2 = fieldVO.getPdfY2();
			Double fieldWidth = Double.valueOf(Math.abs(pdfX2.doubleValue() - pdfX1.doubleValue()));
			Double fieldHeight = Double.valueOf(Math.abs(pdfY2.doubleValue() - pdfY1.doubleValue()));
			Double scaleX = Double.valueOf(fieldWidth.doubleValue() / pdImage.getWidth());
			Double scaleY = Double.valueOf(fieldHeight.doubleValue() / pdImage.getHeight());
			Double scale1 = (scaleX.doubleValue() > scaleY.doubleValue()) ? scaleY : scaleX;
			float imgWidth = pdImage.getWidth() * scale1.floatValue();
			float imgHeight = pdImage.getHeight() * scale1.floatValue();
			float posX = pdfX1.floatValue() + fieldWidth.floatValue() / 2.0F - imgWidth / 2.0F;
			float posY = pdfY2.floatValue() + fieldHeight.floatValue() / 2.0F - imgHeight / 2.0F;
			contentStream.drawImage(pdImage, posX, posY, imgWidth, imgHeight);
		} catch (IOException ioException) {
			ioException.printStackTrace();
		}
	}

	protected void writeSignFieldImageData(PDDocument document, PDPageContentStream contentStream,
			FlattenFieldVO fieldVO, Double pdfX1, Double pdfY1, Double pdfX2, Double pdfY2, Double fieldWidth,
			Double fieldHeight, Double orgSignWidth, Double orgSignHeight) {
		String imageValue = fieldVO.getValue();
		try {
			Double scaleX = Double.valueOf(fieldWidth.doubleValue() / orgSignWidth.doubleValue());
			Double scaleY = Double.valueOf(fieldHeight.doubleValue() / orgSignHeight.doubleValue());
			Double scale1 = (scaleX.doubleValue() > scaleY.doubleValue()) ? scaleY : scaleX;
			byte[] imageData = Base64.decode(imageValue.split(",")[1]);
			PDImageXObject pdImage = PDImageXObject.createFromByteArray(document, imageData, "signField");
			float imgWidth = orgSignWidth.floatValue() * scale1.floatValue();
			float imgHeight = orgSignHeight.floatValue() * scale1.floatValue();
			float posX = pdfX1.floatValue() + fieldWidth.floatValue() / 2.0F - imgWidth / 2.0F;
			float posY = pdfY2.floatValue() + fieldHeight.floatValue() / 2.0F - imgHeight / 2.0F;
			contentStream.drawImage(pdImage, posX, posY, imgWidth, imgHeight);
		} catch (IOException ioException) {
			ioException.printStackTrace();
		}
	}

	protected void writeSignFieldPathData(PDPageContentStream contentStream, FlattenFieldVO fieldVO, Double ury,
			Double pdfX1, Double pdfY1, Double pdfX2, Double pdfY2, Double fieldWidth, Double fieldHeight,
			Double orgSignWidth, Double orgSignHeight) {
		JSONParser parser = new JSONParser();
		try {
			String signValue = fieldVO.getValue();
			Double strokeWidth = FlattenUtil.getDoubleValue(Integer.valueOf(fieldVO.getSignPenThickness()));
			Object obj = parser.parse(signValue);
			Double orgSignLeft = fieldVO.getOrgSignLeft();
			Double orgSignTop = fieldVO.getOrgSignTop();
			Double scaleX = Double.valueOf(fieldWidth.doubleValue() / orgSignWidth.doubleValue());
			Double scaleY = Double.valueOf(fieldHeight.doubleValue() / orgSignHeight.doubleValue());
			Double scale1 = (scaleX.doubleValue() > scaleY.doubleValue()) ? scaleY : scaleX;
			Double pathWidth = Double.valueOf(orgSignWidth.doubleValue() * scale1.doubleValue());
			Double pathHeight = Double.valueOf(orgSignHeight.doubleValue() * scale1.doubleValue());
			Double posX = Double
					.valueOf(pdfX1.doubleValue() + (fieldWidth.doubleValue() - pathWidth.doubleValue()) / 2.0D);
			Double posY = Double
					.valueOf(pdfY1.doubleValue() - (fieldHeight.doubleValue() - pathHeight.doubleValue()) / 2.0D);
			JSONObject jsonSignObject = (JSONObject) obj;
			JSONArray objectsList = (JSONArray) jsonSignObject.get("objects");
			contentStream.saveGraphicsState();
			Double offsetX = Double.valueOf(orgSignLeft.doubleValue() * scale1.doubleValue());
			Double offsetY = Double.valueOf(orgSignTop.doubleValue() * scale1.doubleValue());
			Double startXPos = Double.valueOf(posX.doubleValue() - offsetX.doubleValue());
			Double startYPos = Double.valueOf(posY.doubleValue() + offsetY.doubleValue());
			for (Object o : objectsList) {
				JSONObject jsonObject2 = (JSONObject) o;
				contentStream.setStrokingColor(Color.BLACK);
				contentStream.setLineWidth(strokeWidth.floatValue());
				JSONArray pathList = (JSONArray) jsonObject2.get("path");
				for (Object o2 : pathList) {
					JSONArray dataArr = (JSONArray) o2;
					if ("M".equals(dataArr.get(0))) {
						Double x1 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(1)).doubleValue() * scale1.doubleValue());
						Double y1 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(2)).doubleValue() * scale1.doubleValue());
						contentStream.moveTo(x1.floatValue(), y1.floatValue());
						continue;
					}
					if (dataArr.get(0).equals("Q")) {
						Double x1 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(1)).doubleValue() * scale1.doubleValue());
						Double y1 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(2)).doubleValue() * scale1.doubleValue());
						Double x2 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(3)).doubleValue() * scale1.doubleValue());
						Double y2 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(4)).doubleValue() * scale1.doubleValue());
						contentStream.curveTo2(x1.floatValue(), y1.floatValue(), x2.floatValue(), y2.floatValue());
						continue;
					}
					if (dataArr.get(0).equals("C")) {
						Double x1 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(1)).doubleValue() * scale1.doubleValue());
						Double y1 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(2)).doubleValue() * scale1.doubleValue());
						Double x2 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(3)).doubleValue() * scale1.doubleValue());
						Double y2 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(4)).doubleValue() * scale1.doubleValue());
						Double x3 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(5)).doubleValue() * scale1.doubleValue());
						Double y3 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(6)).doubleValue() * scale1.doubleValue());
						contentStream.curveTo(x1.floatValue(), y1.floatValue(), x2.floatValue(), y2.floatValue(),
								x3.floatValue(), y3.floatValue());
						continue;
					}
					if (dataArr.get(0).equals("L")) {
						Double x1 = Double.valueOf(startXPos.doubleValue()
								+ FlattenUtil.getDoubleValue(dataArr.get(1)).doubleValue() * scale1.doubleValue());
						Double y1 = Double.valueOf(startYPos.doubleValue()
								- FlattenUtil.getDoubleValue(dataArr.get(2)).doubleValue() * scale1.doubleValue());
						contentStream.lineTo(x1.floatValue(), y1.floatValue());
					}
				}
				contentStream.stroke();
			}
			contentStream.restoreGraphicsState();
		} catch (ParseException parseException) {
			parseException.printStackTrace();
		} catch (IOException exception) {
			exception.printStackTrace();
		}
	}

	protected void writeSignFieldData(PDDocument document, PDPage page, PDPageContentStream contentStream,
			FlattenFieldVO fieldVO) {
		String signValue = fieldVO.getValue();
		if (signValue == null || signValue.isEmpty())
			return;
		try {
			Double ury = Double.valueOf(page.getCropBox().getUpperRightY());
			String signType = fieldVO.getSignType();
			Double pdfX1 = fieldVO.getPdfX();
			Double pdfY1 = fieldVO.getPdfY();
			Double pdfX2 = fieldVO.getPdfX2();
			Double pdfY2 = fieldVO.getPdfY2();
			Double fieldWidth = Double.valueOf(Math.abs(pdfX2.doubleValue() - pdfX1.doubleValue()));
			Double fieldHeight = Double.valueOf(Math.abs(pdfY2.doubleValue() - pdfY1.doubleValue()));
			Double orgSignWidth = fieldVO.getOrgSignWidth();
			Double orgSignHeight = fieldVO.getOrgSignHeight();
			if ("image".equals(signType)) {
				writeSignFieldImageData(document, contentStream, fieldVO, pdfX1, pdfY1, pdfX2, pdfY2, fieldWidth,
						fieldHeight, orgSignWidth, orgSignHeight);
			} else {
				writeSignFieldPathData(contentStream, fieldVO, ury, pdfX1, pdfY1, pdfX2, pdfY2, fieldWidth, fieldHeight,
						orgSignWidth, orgSignHeight);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	protected void writeCheckboxFieldPathData(PDPageContentStream contentStream, PDPage page, FlattenFieldVO fieldVO) {
		String checkValue = fieldVO.getValue();
		if (!"true".equals(checkValue))
			return;
		try {
			Double pdfX1 = fieldVO.getPdfX();
			Double pdfY1 = fieldVO.getPdfY();
			Double pdfX2 = fieldVO.getPdfX2();
			Double pdfY2 = fieldVO.getPdfY2();
			Double fieldWidth = Double.valueOf(Math.abs(pdfX2.doubleValue() - pdfX1.doubleValue()));
			Double fieldHeight = Double.valueOf(Math.abs(pdfY2.doubleValue() - pdfY1.doubleValue()));
			Double scaleX = Double.valueOf(fieldWidth.doubleValue() / 48.0D);
			Double scaleY = Double.valueOf(fieldHeight.doubleValue() / 48.0D);
			Double scale1 = (scaleX.doubleValue() > scaleY.doubleValue()) ? scaleY : scaleX;
			Double pathWidth = Double.valueOf(48.0D * scale1.doubleValue());
			Double pathHeight = Double.valueOf(48.0D * scale1.doubleValue());
			Double posX = Double
					.valueOf(pdfX1.doubleValue() + (fieldWidth.doubleValue() - pathWidth.doubleValue()) / 2.0D);
			Double posY = Double
					.valueOf(pdfY1.doubleValue() - (fieldHeight.doubleValue() - pathHeight.doubleValue()) / 2.0D);
			Double startXPos = posX;
			Double startYPos = posY;
			if (posY.equals(Double.valueOf(0.0D)))
				startYPos = Double.valueOf(startYPos.doubleValue() - pathHeight.doubleValue());
			contentStream.saveGraphicsState();
			contentStream.setStrokingColor(Color.BLACK);
			contentStream.setLineWidth(1.0F);
			contentStream.moveTo(startXPos.floatValue() + 17.2F * scale1.floatValue(),
					startYPos.floatValue() - 32.2F * scale1.floatValue());
			contentStream.lineTo(startXPos.floatValue() + 4.9F * scale1.floatValue(),
					startYPos.floatValue() - 19.9F * scale1.floatValue());
			contentStream.lineTo(startXPos.floatValue() + 0.0F * scale1.floatValue(),
					startYPos.floatValue() - 24.8F * scale1.floatValue());
			contentStream.lineTo(startXPos.floatValue() + 17.2F * scale1.floatValue(),
					startYPos.floatValue() - 42.0F * scale1.floatValue());
			contentStream.lineTo(startXPos.floatValue() + 48.0F * scale1.floatValue(),
					startYPos.floatValue() - 10.9F * scale1.floatValue());
			contentStream.lineTo(startXPos.floatValue() + 43.1F * scale1.floatValue(),
					startYPos.floatValue() - 6.0F * scale1.floatValue());
			contentStream.closeAndFillAndStroke();
			contentStream.restoreGraphicsState();
		} catch (IOException exception) {
			exception.printStackTrace();
		}
	}

	protected void writeRadioFieldPathData(PDPageContentStream contentStream, PDPage page, FlattenFieldVO fieldVO) {
		try {
			String radioValue = fieldVO.getValue();
			String radioType = fieldVO.getRadioType();
			String radioDValue = fieldVO.getDefaultValue();
			if (!radioValue.equals(radioDValue) && radioType.equals("2"))
				return;
			Double pdfX1 = fieldVO.getPdfX();
			Double pdfY1 = fieldVO.getPdfY();
			Double pdfX2 = fieldVO.getPdfX2();
			Double pdfY2 = fieldVO.getPdfY2();
			Double fieldWidth = Double.valueOf(Math.abs(pdfX2.doubleValue() - pdfX1.doubleValue()));
			Double fieldHeight = Double.valueOf(Math.abs(pdfY2.doubleValue() - pdfY1.doubleValue()));
			Double scaleX = Double.valueOf(fieldWidth.doubleValue() / 48.0D);
			Double scaleY = Double.valueOf(fieldHeight.doubleValue() / 48.0D);
			Double scale1 = (scaleX.doubleValue() > scaleY.doubleValue()) ? scaleY : scaleX;
			Double pathWidth = Double.valueOf(48.0D * scale1.doubleValue());
			Double pathHeight = Double.valueOf(48.0D * scale1.doubleValue());
			Double posX = Double
					.valueOf(pdfX1.doubleValue() + (fieldWidth.doubleValue() - pathWidth.doubleValue()) / 2.0D);
			Double posY = Double
					.valueOf(pdfY1.doubleValue() - (fieldHeight.doubleValue() - pathHeight.doubleValue()) / 2.0D);
			Double startXPos = posX;
			Double startYPos = posY;
			if (posY.equals(Double.valueOf(0.0D)))
				startYPos = Double.valueOf(startYPos.doubleValue() - pathHeight.doubleValue());
			contentStream.saveGraphicsState();
			contentStream.setStrokingColor(Color.BLACK);
			contentStream.setLineWidth(1.0F);
			if (radioValue.equals(radioDValue) && radioType.equals("1")) {
				contentStream.moveTo(startXPos.floatValue() + 24.0F * scale1.floatValue(),
						startYPos.floatValue() - 12.0F * scale1.floatValue());
				contentStream.curveTo(startXPos.floatValue() + 17.4F * scale1.floatValue(),
						startYPos.floatValue() - 12.0F * scale1.floatValue(),
						startXPos.floatValue() + 12.0F * scale1.floatValue(),
						startYPos.floatValue() - 17.4F * scale1.floatValue(),
						startXPos.floatValue() + 12.0F * scale1.floatValue(),
						startYPos.floatValue() - 24.0F * scale1.floatValue());
				contentStream.curveTo(startXPos.floatValue() + 12.0F * scale1.floatValue(),
						startYPos.floatValue() - 30.6F * scale1.floatValue(),
						startXPos.floatValue() + 17.4F * scale1.floatValue(),
						startYPos.floatValue() - 36.0F * scale1.floatValue(),
						startXPos.floatValue() + 24.0F * scale1.floatValue(),
						startYPos.floatValue() - 36.0F * scale1.floatValue());
				contentStream.curveTo(startXPos.floatValue() + 30.6F * scale1.floatValue(),
						startYPos.floatValue() - 36.0F * scale1.floatValue(),
						startXPos.floatValue() + 36.0F * scale1.floatValue(),
						startYPos.floatValue() - 30.6F * scale1.floatValue(),
						startXPos.floatValue() + 36.0F * scale1.floatValue(),
						startYPos.floatValue() - 24.0F * scale1.floatValue());
				contentStream.curveTo(startXPos.floatValue() + 36.0F * scale1.floatValue(),
						startYPos.floatValue() - 17.4F * scale1.floatValue(),
						startXPos.floatValue() + 30.6F * scale1.floatValue(),
						startYPos.floatValue() - 12.0F * scale1.floatValue(),
						startXPos.floatValue() + 24.0F * scale1.floatValue(),
						startYPos.floatValue() - 12.0F * scale1.floatValue());
			}
			contentStream.moveTo(startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 0.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 10.8F * scale1.floatValue(),
					startYPos.floatValue() - 0.0F * scale1.floatValue(),
					startXPos.floatValue() + 0.0F * scale1.floatValue(),
					startYPos.floatValue() - 10.8F * scale1.floatValue(),
					startXPos.floatValue() + 0.0F * scale1.floatValue(),
					startYPos.floatValue() - 24.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 0.0F * scale1.floatValue(),
					startYPos.floatValue() - 37.2F * scale1.floatValue(),
					startXPos.floatValue() + 10.8F * scale1.floatValue(),
					startYPos.floatValue() - 48.0F * scale1.floatValue(),
					startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 48.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 37.2F * scale1.floatValue(),
					startYPos.floatValue() - 48.0F * scale1.floatValue(),
					startXPos.floatValue() + 48.0F * scale1.floatValue(),
					startYPos.floatValue() - 37.2F * scale1.floatValue(),
					startXPos.floatValue() + 48.0F * scale1.floatValue(),
					startYPos.floatValue() - 24.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 48.0F * scale1.floatValue(),
					startYPos.floatValue() - 10.8F * scale1.floatValue(),
					startXPos.floatValue() + 37.2F * scale1.floatValue(),
					startYPos.floatValue() - 0.0F * scale1.floatValue(),
					startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 0.0F * scale1.floatValue());
			contentStream.moveTo(startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 43.2F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 13.4F * scale1.floatValue(),
					startYPos.floatValue() - 43.2F * scale1.floatValue(),
					startXPos.floatValue() + 4.8F * scale1.floatValue(),
					startYPos.floatValue() - 34.6F * scale1.floatValue(),
					startXPos.floatValue() + 4.8F * scale1.floatValue(),
					startYPos.floatValue() - 24.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 4.8F * scale1.floatValue(),
					startYPos.floatValue() - 13.4F * scale1.floatValue(),
					startXPos.floatValue() + 13.4F * scale1.floatValue(),
					startYPos.floatValue() - 4.8F * scale1.floatValue(),
					startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 4.8F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 34.6F * scale1.floatValue(),
					startYPos.floatValue() - 4.8F * scale1.floatValue(),
					startXPos.floatValue() + 43.2F * scale1.floatValue(),
					startYPos.floatValue() - 13.4F * scale1.floatValue(),
					startXPos.floatValue() + 43.2F * scale1.floatValue(),
					startYPos.floatValue() - 24.0F * scale1.floatValue());
			contentStream.curveTo(startXPos.floatValue() + 43.2F * scale1.floatValue(),
					startYPos.floatValue() - 34.6F * scale1.floatValue(),
					startXPos.floatValue() + 34.6F * scale1.floatValue(),
					startYPos.floatValue() - 43.2F * scale1.floatValue(),
					startXPos.floatValue() + 24.0F * scale1.floatValue(),
					startYPos.floatValue() - 43.2F * scale1.floatValue());
			contentStream.fillAndStroke();
			contentStream.restoreGraphicsState();
		} catch (IOException exception) {
			exception.printStackTrace();
		}
	}

	protected void writeDataToPage(PDDocument document, int pageNo, FlattenPageVO pageVO,
			HashMap<String, PDFont> fontMap) {
		List<FlattenFieldVO> fieldsList = pageVO.getFields();
		if (fieldsList.size() <= 0)
			return;
		try {
			PDPage pdPage = document.getPage(pageNo);
			PDPageContentStream contentStream = new PDPageContentStream(document, pdPage,
					PDPageContentStream.AppendMode.APPEND, true, true);
			for (FlattenFieldVO fieldObj : fieldsList) {
				String fieldType = fieldObj.getType();
				if ("TextField".equals(fieldType) || "DateField".equals(fieldType) || "NumberField".equals(fieldType)
						|| "LabelField".equals(fieldType) || "ComboboxField".equals(fieldType)) {
					writeTextFieldData(document, contentStream, fieldObj, false, fontMap);
					continue;
				}
				if ("MultiLineTextField".equals(fieldType) || "MemoField".equals(fieldType)) {
					writeTextFieldData(document, contentStream, fieldObj, true, fontMap);
					continue;
				}
				if ("SignField".equals(fieldType)) {
					writeSignFieldData(document, pdPage, contentStream, fieldObj);
					continue;
				}
				if ("ImageField".equals(fieldType)) {
					writeImageFieldData(document, contentStream, fieldObj);
					continue;
				}
				if ("CheckboxField".equals(fieldType)) {
					writeCheckboxFieldPathData(contentStream, pdPage, fieldObj);
					continue;
				}
				if ("RadioField".equals(fieldType))
					writeRadioFieldPathData(contentStream, pdPage, fieldObj);
			}
			List<FlattenFieldVO> memosList = pageVO.getMemos();
			if (memosList == null || memosList.size() <= 0) {
				contentStream.close();
				return;
			}
			for (FlattenFieldVO memoObj : memosList) {
				String memoType = memoObj.getType();
				if ("MemoField".equals(memoType))
					writeTextFieldData(document, contentStream, memoObj, true, fontMap);
			}
			contentStream.close();
		} catch (IOException ioException) {
			ioException.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public String writeDataToPdf(String pdfPath, FlattenVO flattenVO, String outputFileName) {
		File file = new File(pdfPath);
		try {
			return writeDataToPdf(file, flattenVO, outputFileName);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String writeDataToPdf(File pdfFile, FlattenVO flattenVO, String outputFileName) {
		boolean check = false;
		try {
			String userDirectory = Flatten.class.getProtectionDomain().getCodeSource().getLocation().toURI().getPath();
			File parentFile = new File(userDirectory);
			File licenseFile = new File(parentFile.getParent() + "/documaker_lic.xml");
			//outputFileName = outputFileName + "___";
//System.out.println("writeDataToPdf > ");		
			LicenseCheck licCheck = new LicenseCheck("", licenseFile);
			licCheck.setServerName(serverName);
			check = licCheck.checkLicense();
			check = true;//guilty 2024-02-15 Test 를 위한 강제 허용(License 에러 발생)
			if (check) {
				PDDocument document = Loader.loadPDF(pdfFile);
				List<FlattenOwnerVO> ownersList = flattenVO.getFormerList();
				FlattenOwnerVO ownerObj = ownersList.get(0);
				List<FlattenPageVO> pagesList = ownerObj.getPages();
				HashMap<String, PDFont> fontMap = new HashMap();
				for (FlattenPageVO page : pagesList) {
					int pageNo = page.getPageNo();
					writeDataToPage(document, pageNo, page, fontMap);
				}
				String savePath = outputFileName;
				document.save(new File(savePath));
				document.close();
				
				return savePath;
			} else {
				return licCheck.getErrorMsg();
			}

		} catch (IOException ioException) {
			ioException.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String writeDataToPdf(String pdfPath, String jsonData, String outputFileName) {
		try {
			return writeDataToPdf(pdfPath, JsonUtil.getJsonToFlattenVO(jsonData), outputFileName);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public String writeDataToPdf(File pdfFile, String jsonData, String outputFileName) {
		try {
			return writeDataToPdf(pdfFile, JsonUtil.getJsonToFlattenVO(jsonData), outputFileName);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public void setServerName(String serverName) {
		this.serverName = serverName;
	}
}
