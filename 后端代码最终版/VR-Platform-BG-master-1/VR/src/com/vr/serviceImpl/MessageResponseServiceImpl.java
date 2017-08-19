package com.vr.serviceImpl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.MessageDao;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.domain.User;
import com.vr.service.MessageLeavingService;
import com.vr.service.MessageResponseService;
import com.vr.util.ConvertUtil;

@Service
@Qualifier("messageResponseServiceImpl")
public class MessageResponseServiceImpl implements MessageResponseService{
	@Autowired
	@Qualifier("messageDaoImpl")
	private MessageDao dao;
	@Override
	public MessageResponse createMessageResponse(User user, String content, int Commentid) {
		// TODO Auto-generated method stub
		String date=ConvertUtil.DatetoString(new Date(), "yyyy-MM-dd HH:mm:ss");
		MessageResponse messageResponse=new MessageResponse();
		messageResponse.setMessageResponse(content);
		MessageLeaving leaving=(MessageLeaving)dao.getMessageById(Commentid, "MessageLeaving");
		messageResponse.setMessageLeaving(leaving);
		messageResponse.setUser(user);
		messageResponse.setReleasetime(date);
		
		 dao.createMessage(messageResponse);
		 return messageResponse;
	}

	@Override
	public boolean deleteMessageResponse(MessageResponse messageResponse) {
		// TODO Auto-generated method stub
		return dao.deleteMessage(messageResponse);
	}





}
