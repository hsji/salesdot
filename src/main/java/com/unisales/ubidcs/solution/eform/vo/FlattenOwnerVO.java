package com.unisales.ubidcs.solution.eform.vo;

import com.google.gson.annotations.SerializedName;
import java.util.List;

public class FlattenOwnerVO {
  @SerializedName("pages")
  private List<FlattenPageVO> pages;
  
  @SerializedName("displayUserName")
  private String displayUserName;
  
  @SerializedName("email")
  private String email;
  
  @SerializedName("userUUID")
  private String userUUID;
  
  @SerializedName("userAddr")
  private String userAddr;
  
  @SerializedName("isFormer")
  private String formerYn;
  
  public void setPages(List<FlattenPageVO> pages) {
    this.pages = pages;
  }
  
  public void setDisplayUserName(String displayUserName) {
    this.displayUserName = displayUserName;
  }
  
  public void setEmail(String email) {
    this.email = email;
  }
  
  public void setUserUUID(String userUUID) {
    this.userUUID = userUUID;
  }
  
  public void setUserAddr(String userAddr) {
    this.userAddr = userAddr;
  }
  
  public void setFormerYn(String formerYn) {
    this.formerYn = formerYn;
  }
  
  public List<FlattenPageVO> getPages() {
    return this.pages;
  }
  
  public String getDisplayUserName() {
    return this.displayUserName;
  }
  
  public String getEmail() {
    return this.email;
  }
  
  public String getUserUUID() {
    return this.userUUID;
  }
  
  public String getUserAddr() {
    return this.userAddr;
  }
  
  public String getFormerYn() {
    return this.formerYn;
  }
}
