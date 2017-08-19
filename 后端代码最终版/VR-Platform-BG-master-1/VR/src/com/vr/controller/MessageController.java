package com.vr.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.domain.User;
import com.vr.domain.VotedUser;
import com.vr.service.AllInOnePCService;
import com.vr.service.MessageLeavingService;
import com.vr.service.MessageResponseService;
import com.vr.service.UserService;
import com.vr.util.ContextUtil;
import com.vr.util.ConvertUtil;
import com.vr.util.response.Data;
import com.vr.view.MessageLeavingView;

@Controller
public class MessageController {
	@Autowired
	@Qualifier("messageLeavingServiceImpl")
	private MessageLeavingService messageLeavingService;
	@Autowired
	@Qualifier("messageResponseServiceImpl")
	private MessageResponseService messageResponseService;
	@Autowired
	@Qualifier("userServiceImpl")
	private UserService userService;

	// ok
	
	@ResponseBody
	@RequestMapping("/MessageLeaving/{uid}")
	@JsonView(MessageLeavingView.Tag.class)
	public void SaveMessageLeaving(@PathVariable String uid, @RequestBody Map<String, String> map) {
		int userid = Integer.parseInt(uid);

		String content = map.get("content");
		String belongname = map.get("belong");
		User user = userService.getUserById(userid);
		MessageLeaving leaving= messageLeavingService.MessageLeavingSave(user, content, belongname);
		
		
	}

	// ok
	@ResponseBody
	@RequestMapping("/MessageResponse/{uid}")
	public void SaveMessageResponse(@PathVariable String uid, @RequestBody Map<String, String> map) {
		int userid = Integer.parseInt(uid);

		String content = map.get("content");
		String id = map.get("leavingid");
		int mainid = Integer.parseInt(id);
		User user = userService.getUserById(userid);
		MessageResponse messageResponse= messageResponseService.createMessageResponse(user, content, mainid);

	}

	// ok
	@ResponseBody
	@RequestMapping("/MessageLeaving/show/{uid}")
	@JsonView(MessageLeavingView.Tag.class)
	public List<MessageLeaving> ShowMessageLeaving(@PathVariable String uid) {
		int userid = Integer.parseInt(uid);

		HttpServletRequest request = ContextUtil.getRequest();
		String belong = request.getParameter("belong");

		String condition = request.getParameter("condition");
		
		List<MessageLeaving> messageLeavings = messageLeavingService.getMessageLeavings(condition, 1, belong);
		for (MessageLeaving leaving : messageLeavings) {

			leaving.setState(messageLeavingService.check(userid, String.valueOf(leaving.getId())));
			System.out.println(leaving);
		}

		return messageLeavings;
	}

	// ok
	@RequestMapping("/MessageLeaving/upvote/{uid}")
	public void upvote(@PathVariable String uid, @RequestBody Map<String, String> map) {
		int userid = Integer.parseInt(uid);

		int id = Integer.parseInt(map.get("id"));
		int upvote=Integer.parseInt(map.get("value"));
		messageLeavingService.MessageUpvoted(id, userid,upvote);
		;
	}

	@RequestMapping("/test")
	public void test() {
		System.out.println("15454");
	}
}
