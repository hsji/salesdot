package com.unisales.ubidcs.solution.eform.vo;

import java.util.List;

public class FlattenVO {
  private String templateName;
  
  private List<FlattenOwnerVO> formerList;
  
  public void setTemplateName(String templateName) {
    this.templateName = templateName;
  }
  
  public void setFormerList(List<FlattenOwnerVO> formerList) {
    this.formerList = formerList;
  }
  
  public String getTemplateName() {
    return this.templateName;
  }
  
  public List<FlattenOwnerVO> getFormerList() {
    return this.formerList;
  }
}
