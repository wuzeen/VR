package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.MessageLeaving;
import com.vr.domain.User;
import com.vr.domain.VotedUser;

public interface MessageLeavingService {
	    public List<Object> getMessageLeavingByHot(int pageNo,String belong);
	    public List<Object> getMessageLeavingByNew(int pageNo,String belong);
	    public List<MessageLeaving> getMessageLeavings(String condition,int pageNo,String belong);
	    public MessageLeaving getMessageLeavingById(int id);
	    public MessageLeaving MessageLeavingSave(User user,String content,String belongname);
	    public void MessageUpvoted(int id,int userid,int upvote);
	    public int check(int userid,String name);
	
}
