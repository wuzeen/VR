package com.vr.dao;

import java.util.List;

public interface MessageDao {
	 public boolean createMessage(Object message);
	 public boolean deleteMessage(Object message);
	  public boolean updateMessage(Object message);
	  public List<Object> getByCondition(String condition,int pageNo,String type,String belong);
	  public Object getMessageById(int id,String type);
}
