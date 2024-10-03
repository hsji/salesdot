package com.unisales.util;


import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

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

public class DataSetResultSetExtractor implements ResultSetExtractor<DataSet> {
	
	private String outDsName = "";
	private DataSet outDs = null;
	
	public DataSetResultSetExtractor(String dsname) {
		outDsName = dsname;
	}
	
	@Override
	public DataSet extractData(ResultSet rs) throws SQLException, DataAccessException {
    	try {
			outDs = NexaUtil.executeDataset(outDsName, rs);
		} catch (Exception e) {
			e.printStackTrace();
		}		  
    	return outDs;
	}
	
    public DataSet getDataset(){
        return outDs;
    }	
}
