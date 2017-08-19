package com.vr.service;

import com.vr.domain.MessageResponse;
import com.vr.domain.User;

public interface MessageResponseService {
	public MessageResponse createMessageResponse(User user, String content, int Commentid);
    public boolean deleteMessageResponse(MessageResponse messageResponse);

}
