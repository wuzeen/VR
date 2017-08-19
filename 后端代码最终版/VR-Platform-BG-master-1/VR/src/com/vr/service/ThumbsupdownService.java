package com.vr.service;

import com.vr.domain.Thumbsupdown;
import com.vr.domain.VotedUser;

public interface ThumbsupdownService {
public void upvote(int id,String type,int upvote);
public void downvote(int id,String type,int downvote);
public int check(int userid,String name);
}
