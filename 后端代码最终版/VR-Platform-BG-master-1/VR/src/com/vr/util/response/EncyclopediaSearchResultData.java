package com.vr.util.response;

public class EncyclopediaSearchResultData {
	
	private int id;
	private String keyword;
	private String type;
	private String changenote;
	private String firstprop;
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
	public String getFirstprop() {
		return firstprop;
	}
	public void setFirstprop(String firstprop) {
		this.firstprop = firstprop;
	}
	public EncyclopediaSearchResultData() {
	}
	
	public EncyclopediaSearchResultData(int id, String keyword, String type,
			String changenote, String firstprop) {

		this.id = id;
		this.keyword = keyword;
		this.type = type;
		this.changenote = changenote;
		this.firstprop = firstprop;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	

}
