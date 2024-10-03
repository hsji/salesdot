package com.unisales.ubidcs.solution.eform.vo;

import java.util.List;

public class FlattenPageVO {
  public void setPageNo(int pageNo) {
    this.pageNo = pageNo;
  }
  
  public void setFields(List<FlattenFieldVO> fields) {
    this.fields = fields;
  }
  
  public void setMemos(List<FlattenFieldVO> memos) {
    this.memos = memos;
  }
  
  private int pageNo = 0;
  
  private List<FlattenFieldVO> fields;
  
  private List<FlattenFieldVO> memos;
  
  public int getPageNo() {
    return this.pageNo;
  }
  
  public List<FlattenFieldVO> getFields() {
    return this.fields;
  }
  
  public List<FlattenFieldVO> getMemos() {
    return this.memos;
  }
}
