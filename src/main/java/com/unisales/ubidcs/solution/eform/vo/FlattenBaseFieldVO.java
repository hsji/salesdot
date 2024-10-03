package com.unisales.ubidcs.solution.eform.vo;
 
import com.google.gson.annotations.SerializedName;

public class FlattenBaseFieldVO {
  @SerializedName("m_id")
  private String id;
  
  @SerializedName("m_x")
  private Double x;
  
  @SerializedName("m_y")
  private Double y;
  
  @SerializedName("m_width")
  private Double width;
  
  @SerializedName("m_height")
  private Double height;
  
  @SerializedName("m_pageNo")
  private int pageNo;
  
  @SerializedName("m_pdfX")
  private Double pdfX;
  
  @SerializedName("m_pdfY")
  private Double pdfY;
  
  @SerializedName("m_pdfX2")
  private Double pdfX2;
  
  @SerializedName("m_pdfY2")
  private Double pdfY2;
  
  @SerializedName("m_type")
  private String type;
  
  @SerializedName("m_fontSize")
  private int fontSize;
  
  @SerializedName("m_fontName")
  private String fontName;
  
  @SerializedName("m_fontWeight")
  private String fontWeight;
  
  @SerializedName("m_fontStyle")
  private String fontStyle;
  
  @SerializedName("m_fontColor")
  private String fontColor;
  
  @SerializedName("m_kind")
  private String kind;
  
  @SerializedName("m_isRemoved")
  private boolean isRemoved;
  
  @SerializedName("m_value")
  private String value;
  
  @SerializedName("m_ownerId")
  private String ownerId;
  
  @SerializedName("m_fieldId")
  private String fieldId;
  
  @SerializedName("m_required")
  private String required;
  
  @SerializedName("m_backColor")
  private String backColor;
  
  public void setId(String id) {
    this.id = id;
  }
  
  public void setX(Double x) {
    this.x = x;
  }
  
  public void setY(Double y) {
    this.y = y;
  }
  
  public void setWidth(Double width) {
    this.width = width;
  }
  
  public void setHeight(Double height) {
    this.height = height;
  }
  
  public void setPageNo(int pageNo) {
    this.pageNo = pageNo;
  }
  
  public void setPdfX(Double pdfX) {
    this.pdfX = pdfX;
  }
  
  public void setPdfY(Double pdfY) {
    this.pdfY = pdfY;
  }
  
  public void setPdfX2(Double pdfX2) {
    this.pdfX2 = pdfX2;
  }
  
  public void setPdfY2(Double pdfY2) {
    this.pdfY2 = pdfY2;
  }
  
  public void setType(String type) {
    this.type = type;
  }
  
  public void setFontSize(int fontSize) {
    this.fontSize = fontSize;
  }
  
  public void setFontName(String fontName) {
    this.fontName = fontName;
  }
  
  public void setFontWeight(String fontWeight) {
    this.fontWeight = fontWeight;
  }
  
  public void setFontStyle(String fontStyle) {
    this.fontStyle = fontStyle;
  }
  
  public void setFontColor(String fontColor) {
    this.fontColor = fontColor;
  }
  
  public void setKind(String kind) {
    this.kind = kind;
  }
  
  public void setRemoved(boolean isRemoved) {
    this.isRemoved = isRemoved;
  }
  
  public void setValue(String value) {
    this.value = value;
  }
  
  public void setOwnerId(String ownerId) {
    this.ownerId = ownerId;
  }
  
  public void setFieldId(String fieldId) {
    this.fieldId = fieldId;
  }
  
  public void setRequired(String required) {
    this.required = required;
  }
  
  public void setBackColor(String backColor) {
    this.backColor = backColor;
  }
  
  public String getId() {
    return this.id;
  }
  
  public Double getX() {
    return this.x;
  }
  
  public Double getY() {
    return this.y;
  }
  
  public Double getWidth() {
    return this.width;
  }
  
  public Double getHeight() {
    return this.height;
  }
  
  public int getPageNo() {
    return this.pageNo;
  }
  
  public Double getPdfX() {
    return this.pdfX;
  }
  
  public Double getPdfY() {
    return this.pdfY;
  }
  
  public Double getPdfX2() {
    return this.pdfX2;
  }
  
  public Double getPdfY2() {
    return this.pdfY2;
  }
  
  public String getType() {
    return this.type;
  }
  
  public int getFontSize() {
    return this.fontSize;
  }
  
  public String getFontName() {
    return this.fontName;
  }
  
  public String getFontWeight() {
    return this.fontWeight;
  }
  
  public String getFontStyle() {
    return this.fontStyle;
  }
  
  public String getFontColor() {
    return this.fontColor;
  }
  
  public String getKind() {
    return this.kind;
  }
  
  public boolean isRemoved() {
    return this.isRemoved;
  }
  
  public String getValue() {
    return this.value;
  }
  
  public String getOwnerId() {
    return this.ownerId;
  }
  
  public String getFieldId() {
    return this.fieldId;
  }
  
  public String getRequired() {
    return this.required;
  }
  
  public String getBackColor() {
    return this.backColor;
  }
}
