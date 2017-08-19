package com.vr.daoImpl;



import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.ThumbsupdownDao;
import com.vr.domain.Thumbsupdown;
import com.vr.domain.VotedUser;
import com.vr.domain.VotedUserId;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("ThumbsupdownDaoImpl")
public class ThumbsupdownDaoImpl extends HibernateUtils implements ThumbsupdownDao{

	@Override
	public boolean createThumbsupdown(Thumbsupdown thumb) {
		// TODO Auto-generated method stub
		return save(thumb);
	}

	@Override
	public boolean deleteThumbsupdown(Thumbsupdown thumb) {
		// TODO Auto-generated method stub
		return delete(thumb);
	}

	@Override
	public boolean updateThumbsupdown(Thumbsupdown thumb) {
		// TODO Auto-generated method stub
		return update(thumb);
	}

	@Override
	public Thumbsupdown getThumbsupdown(String type) {
		// TODO Auto-generated method stub
		String hql="from Thumbsupdown a where a.type=?";
		Object result=findByHql(hql, new Object[]{type});
		if(result!=null)
			{System.out.println("thumb"+result);
			return (Thumbsupdown)result;
			}
		else
			System.out.println("thumbe"+result);
			{Thumbsupdown thumb=new Thumbsupdown();
			thumb.setDownvote(0);
			thumb.setUpvote(0);
			thumb.setType(type);
			createThumbsupdown(thumb);
			return thumb;
			}
		
		
		
		
	}





	

	
}
