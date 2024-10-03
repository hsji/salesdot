package com.unisales.util;


import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowCallbackHandler;

import com.nexacro.java.xapi.data.DataSet;


/**
 * <pre>
 * @title   Utility
 * @desc    TMS Utility         
 * @package com.tms.util
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2023. 11
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2023. 11. 01.		TOBESOFT	최초작성
 */

public class DataSetMapper implements RowCallbackHandler {
	
	static DataSet outDs = null;
	static String outDsName = "";
	
	public DataSetMapper(String dsname) {
		outDsName = dsname;
	}
	
    /**
	 * ResultSet으로 부터 Dataset을 생성한다.
	 * @param dsName		: 생성할 Dataset Name
	 * @param rs			: ResultSet
	 * @return				: Dataset
	 */	
	@Override
    public void processRow(ResultSet rs) throws SQLException {
    	try {
			outDs = NexaUtil.executeDataset(outDsName, rs);
		} catch (Exception e) {
			e.printStackTrace();
		}
    }
 
    public static DataSet getObjects(){
        return outDs;
    }
     
}
