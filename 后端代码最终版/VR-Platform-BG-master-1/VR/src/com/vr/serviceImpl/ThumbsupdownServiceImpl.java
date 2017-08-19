package com.vr.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.ThumbsupdownDao;
import com.vr.dao.VotedUserDao;
import com.vr.domain.Thumbsupdown;
import com.vr.domain.VotedUser;
import com.vr.service.ThumbsupdownService;
@Service
@Qualifier("thumbsupdownServiceImpl")
public class ThumbsupdownServiceImpl implements ThumbsupdownService {
	@Autowired
	@Qualifier("ThumbsupdownDaoImpl")
	private ThumbsupdownDao dao;
	@Autowired
	@Qualifier("voteduserDaoImpl")
	private VotedUserDao voteduserdao;
	@Override
	public void upvote(int userid, String name,int upvote) {
		// TODO Auto-generated method stub
		Thumbsupdown Thumbsupdown = dao.getThumbsupdown(name);
		Thumbsupdown.setUpvote(Thumbsupdown.getUpvote() + upvote);
		dao.updateThumbsupdown(Thumbsupdown);
		voteduserdao.saveVotedUser(name, userid,"1");
	}

	@Override
	public void downvote(int userid, String name,int downvote) {
		// TODO Auto-generated method stub
		Thumbsupdown thumbsupdown = dao.getThumbsupdown(name);
		thumbsupdown.setDownvote(thumbsupdown.getDownvote()+downvote);
		dao.updateThumbsupdown(thumbsupdown);
		voteduserdao.saveVotedUser(name, userid,"-1");

	}

	@Override
	public int check(int userid,String name) {
		// TODO Auto-generated method stub
		return voteduserdao.checkVoted(name, userid);
	}

}
