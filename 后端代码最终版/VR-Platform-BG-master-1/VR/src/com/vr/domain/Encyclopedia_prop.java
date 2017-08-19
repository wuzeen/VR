package com.vr.domain;

import java.io.Serializable;

public class Encyclopedia_prop implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int id;
	private int prop_id;
	private String prop_keyword;
	private String content;
	private String changenote;

	
	public Encyclopedia_prop(int id, int prop_id, String prop_keyword,
			String content, String changenote) {
		this.id = id;
		this.prop_id = prop_id;
		this.prop_keyword = prop_keyword;
		this.content = content;
		this.changenote = changenote;
	}
	public Encyclopedia_prop() {
	}
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
	
	
	@Override 
    public boolean equals(Object obj)  
    {  
        if((this.id==((Encyclopedia_prop)obj).id)&&(this.prop_id==((Encyclopedia_prop)obj).prop_id)){
        	return true;
        }
        return false;
    }
	public String getProp_keyword() {
		return prop_keyword;
	}
	public void setProp_keyword(String prop_keyword) {
		this.prop_keyword = prop_keyword;
	} 

}
