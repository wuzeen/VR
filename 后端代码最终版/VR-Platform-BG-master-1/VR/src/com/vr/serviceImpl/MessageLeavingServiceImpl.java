package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import com.vr.dao.*;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageLeaving;
import com.vr.domain.User;
import com.vr.domain.VotedUser;
import com.vr.util.ConvertUtil;

@Service
@Qualifier("messageLeavingServiceImpl")
public class MessageLeavingServiceImpl implements com.vr.service.MessageLeavingService {
	@Autowired
	@Qualifier("messageDaoImpl")
	private MessageDao dao;
	@Autowired
	@Qualifier("voteduserDaoImpl")
	private VotedUserDao voteduserdao;
	@Override
	public List<Object> getMessageLeavingByHot(int pageNo,String belong) {
		// TODO Auto-generated method stub
		return dao.getByCondition("upvote", pageNo,"MessageLeaving",belong);
	}

	@Override
	public List<Object> getMessageLeavingByNew(int pageNo,String belong) {
		// TODO Auto-generated method stub
		return dao.getByCondition("releasetime", pageNo,"MessageLeaving",belong);
	}

	@Override
	public MessageLeaving getMessageLeavingById(int id) {
		// TODO Auto-generated method stub
		return (MessageLeaving)dao.getMessageById(id,"MessageLeaving");
	}

	@Override
	public MessageLeaving MessageLeavingSave(User user, String content,String belongname) {
		// TODO Auto-generated method stub
		MessageLeaving messageLeaving=new MessageLeaving();
		messageLeaving.setMessage(content);
		messageLeaving.setUser(user);
		String date=ConvertUtil.DatetoString(new Date(), "yyyy-MM-dd HH:mm:ss");
		messageLeaving.setReleasetime(date);
		messageLeaving.setBelong(belongname);
		messageLeaving.setUpvote(0);
		dao.createMessage(messageLeaving);
		return messageLeaving;
	}

	@Override
	public List<MessageLeaving> getMessageLeavings(String condition,int pageNo,String belong) {
		// TODO Auto-generated method stub
		
		List<Object>list=null;
		if(condition.equals("hot"))
		{
			list= getMessageLeavingByHot(pageNo,belong);
		}
		else if(condition.equals("time"))
		{
			list= getMessageLeavingByNew(pageNo,belong);
		}
		if(list==null)
		{
			return null;
		}
		List<MessageLeaving>messageLeavings=new ArrayList<>();
		for(Object o:list)
		{
			messageLeavings.add((MessageLeaving)o);
		}
		return messageLeavings;
	}

	@Override
	public void MessageUpvoted(int id,int userid,int upvote) {
		// TODO Auto-generated method stub
		MessageLeaving MessageLeaving = (MessageLeaving)dao.getMessageById(id, "MessageLeaving");
		MessageLeaving.setUpvote(MessageLeaving.getUpvote() + upvote);
		dao.updateMessage(MessageLeaving);

	}
	@Override
	public int check(int userid, String name) {
		// TODO Auto-generated method stub
		return voteduserdao.checkVoted(name, userid);
	}


}
