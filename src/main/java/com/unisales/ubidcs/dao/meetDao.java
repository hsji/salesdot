package com.unisales.ubidcs.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;

import com.nexacro.java.xapi.data.DataSet;
import com.unisales.util.DataSetMapper;
import com.unisales.util.DataSetResultSetExtractor;
import com.unisales.util.NexaUtil;

import java.lang.reflect.Method;

@Component("meetDao")
public class meetDao {
	private static DataSource dataSource;

	private static JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		meetDao.dataSource = dataSource;
		meetDao.jdbcTemplate = new JdbcTemplate(dataSource);
		meetDao.jdbcTemplate.setResultsMapCaseInsensitive(false);	
	}

	public DataSource getDataSource() {
		return dataSource;
	}
	
	public static DataSet introProcCall(Map<String,Object> querymap, Map<String,Object> search) throws ClassNotFoundException {
		 String outds = (String) querymap.get("outds");
		 String mapperid = (String) querymap.get("mapid");
		 
		 DataSet ds = null;
		 if(mapperid.equals("calendarCreate")) {
			 ds = calendarCreateProcCall(outds, search);
		 }
		 
		 return ds;
	}
		
	
	public static DataSet calendarCreateProcCall(String dsname, Map<String,Object> search) {
		
		DataSetResultSetExtractor extracter = new DataSetResultSetExtractor(dsname);
        SimpleJdbcCall  executor = new SimpleJdbcCall(jdbcTemplate)
                .withProcedureName("SP_CREATE_CALENDAR")
                .withCatalogName("TOBEATD")
                .declareParameters(
                	new SqlParameter("P_COM", 	Types.VARCHAR),	
                    new SqlParameter("P_YEAR", 	Types.VARCHAR),
                    new SqlParameter("P_ID", 	Types.VARCHAR),
                    new SqlParameter("P_IP", 	Types.VARCHAR),
                    new SqlOutParameter("RESULT", Types.INTEGER, extracter));

        executor.setAccessCallParameterMetaData(true);
        executor.compile();
        SqlParameterSource param = new MapSqlParameterSource()
        		.addValue("P_COM",  (String) search.get("COM_CODE"))
                .addValue("P_YEAR", (String) search.get("PRESENT_DATE"))
                .addValue("P_ID", 	(String) search.get("USER_ID_SRV"))
                .addValue("P_IP", 	(String) search.get("USER_CON_IPADDR_SRV"));

        executor.execute(param);
        
        return extracter.getDataset();
	}

}
