package com.vr.util.response;

public class ResponseDataPayload {
     private Object code;
     private Object payload;
     
	public ResponseDataPayload(Object code, Object payload) {
		super();
		this.code = code;
		this.payload = payload;
	}
	public Object getCode() {
		return code;
	}
	public void setCode(Object code) {
		this.code = code;
	}
	public Object getPayload() {
		return payload;
	}
	public void setPayload(Object payload) {
		this.payload = payload;
	}
     
}
