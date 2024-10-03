package com.unisales.util;

import java.util.HashMap;
import org.apache.commons.lang.StringUtils;

public class UpperCaseCustomMap extends HashMap {
	
	@SuppressWarnings("unchecked")
	@Override
	public Object put(Object key, Object value){
		return super.put(StringUtils.upperCase((String)key), value);
	}
}
