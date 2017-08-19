package com.vr.util.request;

public class EncyclopediaDirType {
	
	private String type;
	private int pageNum;

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
	public EncyclopediaDirType(String type, int pageNum) {
		this.type = type;
		this.pageNum = pageNum;
	}

	public EncyclopediaDirType() {
		
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	

}
