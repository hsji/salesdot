package com.unisales.ubidcs.solution.eform.vo;
 
import com.google.gson.annotations.SerializedName;

public class FlattenFieldVO extends FlattenBaseFieldVO {
  @SerializedName("m_comboboxList")
  private String comboboxList;
  
  @SerializedName("m_inputMax")
  private String inputMax;
  
  @SerializedName("m_inputMin")
  private String inputMin;
  
  @SerializedName("m_useCurrentDate")
  private String useCurrentDate;
  
  @SerializedName("m_inputFormat")
  private String inputFormat;
  
  @SerializedName("m_groupName")
  private String groupName;
  
  @SerializedName("m_radioType")
  private String radioType;
  
  @SerializedName("m_defaultValue")
  private String defaultValue;
  
  @SerializedName("m_signPenThickness")
  private int signPenThickness;
  
  @SerializedName("m_signPenColor")
  private String signPenColor;
  
  @SerializedName("m_svgData")
  private String svgData;
  
  @SerializedName("signType")
  private String signType;
  
  public void setComboboxList(String comboboxList) {
    this.comboboxList = comboboxList;
  }
  
  public void setInputMax(String inputMax) {
    this.inputMax = inputMax;
  }
  
  public void setInputMin(String inputMin) {
    this.inputMin = inputMin;
  }
  
  public void setUseCurrentDate(String useCurrentDate) {
    this.useCurrentDate = useCurrentDate;
  }
  
  public void setInputFormat(String inputFormat) {
    this.inputFormat = inputFormat;
  }
  
  public void setGroupName(String groupName) {
    this.groupName = groupName;
  }
  
  public void setRadioType(String radioType) {
    this.radioType = radioType;
  }
  
  public void setDefaultValue(String defaultValue) {
    this.defaultValue = defaultValue;
  }
  
  public void setSignPenThickness(int signPenThickness) {
    this.signPenThickness = signPenThickness;
  }
  
  public void setSignPenColor(String signPenColor) {
    this.signPenColor = signPenColor;
  }
  
  public void setSvgData(String svgData) {
    this.svgData = svgData;
  }
  
  public void setSignType(String signType) {
    this.signType = signType;
  }
  
  public void setOrgSignWidth(Double orgSignWidth) {
    this.orgSignWidth = orgSignWidth;
  }
  
  public void setOrgSignHeight(Double orgSignHeight) {
    this.orgSignHeight = orgSignHeight;
  }
  
  public void setOrgSignLeft(Double orgSignLeft) {
    this.orgSignLeft = orgSignLeft;
  }
  
  public void setOrgSignTop(Double orgSignTop) {
    this.orgSignTop = orgSignTop;
  }
  
  public void setStpNo(String stpNo) {
    this.stpNo = stpNo;
  }
  
  public void setPlaceHolder(String placeHolder) {
    this.placeHolder = placeHolder;
  }
  
  public void setDefaultValueText(String defaultValueText) {
    this.defaultValueText = defaultValueText;
  }
  
  public void setTextAlign(String textAlign) {
    this.textAlign = textAlign;
  }
  
  public void setTextVeticalAlign(String textVeticalAlign) {
    this.textVeticalAlign = textVeticalAlign;
  }
  
  public void setBold(String bold) {
    this.bold = bold;
  }
  
  public void setMaxValueLength(int maxValueLength) {
    this.maxValueLength = maxValueLength;
  }
  
  public String getComboboxList() {
    return this.comboboxList;
  }
  
  public String getInputMax() {
    return this.inputMax;
  }
  
  public String getInputMin() {
    return this.inputMin;
  }
  
  public String getUseCurrentDate() {
    return this.useCurrentDate;
  }
  
  public String getInputFormat() {
    return this.inputFormat;
  }
  
  public String getGroupName() {
    return this.groupName;
  }
  
  public String getRadioType() {
    return this.radioType;
  }
  
  public String getDefaultValue() {
    return this.defaultValue;
  }
  
  public int getSignPenThickness() {
    return this.signPenThickness;
  }
  
  public String getSignPenColor() {
    return this.signPenColor;
  }
  
  public String getSvgData() {
    return this.svgData;
  }
  
  public String getSignType() {
    return this.signType;
  }
  
  @SerializedName("m_orgSignWidth")
  private Double orgSignWidth = Double.valueOf(1.0D);
  
  public Double getOrgSignWidth() {
    return this.orgSignWidth;
  }
  
  @SerializedName("m_orgSignHeight")
  private Double orgSignHeight = Double.valueOf(1.0D);
  
  public Double getOrgSignHeight() {
    return this.orgSignHeight;
  }
  
  @SerializedName("m_orgSignLeft")
  private Double orgSignLeft = Double.valueOf(0.0D);
  
  public Double getOrgSignLeft() {
    return this.orgSignLeft;
  }
  
  @SerializedName("m_orgSignTop")
  private Double orgSignTop = Double.valueOf(0.0D);
  
  @SerializedName("m_stpNo")
  private String stpNo;
  
  @SerializedName("m_placeHolder")
  private String placeHolder;
  
  @SerializedName("m_defaultValueText")
  private String defaultValueText;
  
  @SerializedName("m_textAlign")
  private String textAlign;
  
  @SerializedName("m_textVeticalAlign")
  private String textVeticalAlign;
  
  @SerializedName("m_bold")
  private String bold;
  
  @SerializedName("m_maxValueLength")
  private int maxValueLength;
  
  public Double getOrgSignTop() {
    return this.orgSignTop;
  }
  
  public String getStpNo() {
    return this.stpNo;
  }
  
  public String getPlaceHolder() {
    return this.placeHolder;
  }
  
  public String getDefaultValueText() {
    return this.defaultValueText;
  }
  
  public String getTextAlign() {
    return this.textAlign;
  }
  
  public String getTextVeticalAlign() {
    return this.textVeticalAlign;
  }
  
  public String getBold() {
    return this.bold;
  }
  
  public int getMaxValueLength() {
    return this.maxValueLength;
  }
}
