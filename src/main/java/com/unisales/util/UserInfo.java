package com.unisales.util;

import java.util.Map;

public class UserInfo {
	private String strCompanyCd;		// 회사코드
	private String strUserId;			// 사용자 ID
	private String strEmpNo;			// 사번
	private String strUserIPAddress;	// 접속 IP Address
	private String strUserConSysFlag;	// 접속 시스템
	private String strDeptCD;			// 사용자 부서코드

	private String strUerFlagCD;		// 직원구분코드(SM04)
	private String strWkgdCD;			// 직급코드(SM05)
	private String strWkdtCD;			// 직책코드(SM06)
	private String strOccuCD;			// 직종코드(SM07)
	private String strHoofStatCD;		// 재직상태코드(SM08)
	private String strChagWork;			// 담당업무
	
	public String getStrEmpNo() {
		return strEmpNo;
	}

	public void setStrEmpNo(String strEmpNo) {
		this.strEmpNo = strEmpNo;
	}

	public String getStrCompanyCd() {
		return strCompanyCd;
	}

	public void setStrCompanyCd(String strCompanyCd) {
		this.strCompanyCd = strCompanyCd;
	}
	
	public String getStrUserId() {
		return strUserId;
	}

	public void setStrUserId(String strUserId) {
		this.strUserId = strUserId;
	}
	
	public String getIp() {
		return strUserIPAddress;
	}
	
	public String getStrUserIPAddress() {
		return strUserIPAddress;
	}

	public void setStrUserIPAddress(String strUserIPAddress) {
		this.strUserIPAddress = strUserIPAddress;
	}

	public String getStrUserConSysFlag() {
		return strUserConSysFlag;
	}

	public void setStrUserConSysFlag(String strUserConSysFlag) {
		this.strUserConSysFlag = strUserConSysFlag;
	}

	public String getStrDeptCD() {
		return strDeptCD;
	}

	public void setStrDeptCD(String strDeptCD) {
		this.strDeptCD = strDeptCD;
	}

	public String getStrUerFlagCD() {
		return strUerFlagCD;
	}

	public void setStrUerFlagCD(String strUerFlagCD) {
		this.strUerFlagCD = strUerFlagCD;
	}

	public String getStrWkgdCD() {
		return strWkgdCD;
	}

	public void setStrWkgdCD(String strWkgdCD) {
		this.strWkgdCD = strWkgdCD;
	}

	public String getStrWkdtCD() {
		return strWkdtCD;
	}

	public void setStrWkdtCD(String strWkdtCD) {
		this.strWkdtCD = strWkdtCD;
	}

	public String getStrOccuCD() {
		return strOccuCD;
	}

	public void setStrOccuCD(String strOccuCD) {
		this.strOccuCD = strOccuCD;
	}

	public String getStrHoofStatCD() {
		return strHoofStatCD;
	}

	public void setStrHoofStatCD(String strHoofStatCD) {
		this.strHoofStatCD = strHoofStatCD;
	}

	public String getStrChagWork() {
		return strChagWork;
	}

	public void setStrChagWork(String strChagWork) {
		this.strChagWork = strChagWork;
	}

	public void setUserInfo(Map<String,Object> userInfo) {
		// 회사코드
		this.setStrCompanyCd(userInfo.get("COMPANY_CD").toString());
		// 이용자ID
		this.setStrUserId(userInfo.get("USER_ID").toString());
		// 사번
		this.setStrEmpNo(userInfo.get("EMP_NO").toString());
		// 부서코드 
		this.setStrDeptCD(userInfo.get("DEPT_CD").toString());
		// 직원구분코드(SM04)
		this.setStrUerFlagCD(userInfo.get("USER_FLAG_CD").toString());
		// 직급코드(SM05) 
		this.setStrWkgdCD(userInfo.get("WKGD_CD").toString());
		// 직책코드(SM06)
		this.setStrWkdtCD(userInfo.get("WKDT_CD").toString());
		// 직종코드(SM07)
		this.setStrOccuCD(userInfo.get("OCCU_CD").toString());
		// 재직상태코드(SM08)
		this.setStrHoofStatCD(userInfo.get("HOOF_STAT_CD").toString());
		//담당업무
		this.setStrChagWork(userInfo.get("CHAG_WORK").toString());
	}
	
}
