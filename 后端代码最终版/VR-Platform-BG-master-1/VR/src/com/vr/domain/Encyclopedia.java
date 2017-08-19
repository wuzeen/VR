package com.vr.domain;

public class Encyclopedia {
	
	private int id;
	private String keyword;
	private String type;
	private String changenote;

	
	
	public Encyclopedia() {
		
	}



	



	public Encyclopedia(int id, String keyword, String type, String changenote) {

		this.id = id;
		this.keyword = keyword;
		this.type = type;
		this.changenote = changenote;
	}







	public int getId() {
		return id;
		
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getKeyword() {
		return keyword;
	}



	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}



	public String getChangenote() {
		return changenote;
	}



	public void setChangenote(String changenote) {
		this.changenote = changenote;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}

	
	

}
