package com.vr.util.response;

public class Encyclopedia_propSearchResultData {
	
	private int id;
	private int prop_id;
	private String keyword;
	private String prop_keyword;
	private String content;
	private String changenote;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProp_id() {
		return prop_id;
	}
	public void setProp_id(int prop_id) {
		this.prop_id = prop_id;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getChangenote() {
		return changenote;
	}
	public void setChangenote(String changenote) {
		this.changenote = changenote;
	}
	
	public Encyclopedia_propSearchResultData(int id, int prop_id,
			String keyword, String prop_keyword, String content,
			String changenote) {
		this.id = id;
		this.prop_id = prop_id;
		this.keyword = keyword;
		this.prop_keyword = prop_keyword;
		this.content = content;
		this.changenote = changenote;
	}
	public Encyclopedia_propSearchResultData() {

	}
	public String getProp_keyword() {
		return prop_keyword;
	}
	public void setProp_keyword(String prop_keyword) {
		this.prop_keyword = prop_keyword;
	}
	
	
	
	

}
