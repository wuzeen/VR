package com.vr.util.request;

public class EncyclopediaSearchData {
	
	String keyword;
	int pageNum;
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public EncyclopediaSearchData(String keyword, int pageNum) {
		this.keyword = keyword;
		this.pageNum = pageNum;
	}
	public EncyclopediaSearchData() {
	}
	
	

}
