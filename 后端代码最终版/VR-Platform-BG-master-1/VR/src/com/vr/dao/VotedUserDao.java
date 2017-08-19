package com.vr.dao;

import com.vr.domain.VotedUser;

public interface VotedUserDao {
	  public boolean saveVotedUser(String name, int id2,String type);
	  public int checkVoted(String name, int userid);
}
