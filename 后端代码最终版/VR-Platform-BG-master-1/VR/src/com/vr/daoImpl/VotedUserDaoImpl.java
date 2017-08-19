package com.vr.daoImpl;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.VotedUserDao;
import com.vr.domain.VotedUser;
import com.vr.domain.VotedUserId;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("voteduserDaoImpl")
public class VotedUserDaoImpl extends HibernateUtils implements VotedUserDao{
	@Override
	public boolean saveVotedUser(String name, int id2,String type) {
		// TODO Auto-generated method stub
		VotedUser user=new VotedUser();
		VotedUserId id=new VotedUserId(id2, name);
		user.setId(id);	
		user.setType(type);
		return save(user);
	}

	@Override
	public int checkVoted(String name, int userid) {
		// TODO Auto-generated method stub
		String hql="from VotedUser a where a.id.userid=? and a.id.name=? and a.type=1";
		Object upvote=findByHql(hql, new Object[]{userid,name});
		String hql1="from VotedUser a where a.id.userid=? and a.id.name=? and a.type=-1";
		Object downvote=findByHql(hql1, new Object[]{userid,name});
		if(upvote!=null)
			
		{
			return 1;
			}
		else if(downvote!=null)
		{
	
			return -1;
		}
		else
		{
		
			return 0;
		}
	}
}
