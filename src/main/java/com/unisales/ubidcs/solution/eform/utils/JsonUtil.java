package com.unisales.ubidcs.solution.eform.utils;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.unisales.ubidcs.solution.eform.vo.FlattenVO;

public class JsonUtil {
  public static FlattenVO getJsonToFlattenVO(String jsonData) {
    Gson gson = (new GsonBuilder()).create();
    FlattenVO jsonVO = (FlattenVO)gson.fromJson(jsonData, FlattenVO.class);
    return jsonVO;
  }
}
