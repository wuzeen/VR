package com.vr.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.MessageDao;
import com.vr.domain.MessageLeaving;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("messageDaoImpl")
public class MessageDaoImpl extends HibernateUtils implements MessageDao{

	@Override
	public boolean createMessage(Object message) {
		// TODO Auto-generated method stub
		return save(message);
	}

	@Override
	public boolean deleteMessage(Object message) {
		// TODO Auto-generated method stub
		return delete(message);
	}

	@Override
	public boolean updateMessage(Object message) {
		// TODO Auto-generated method stub
		return update(message);
	}

	@Override
	public List<Object> getByCondition(String condition,int pageNo,String type,String belong) {
		// TODO Auto-generated method stub
		String hql = "from "+type+" a "+"where a.belong="+belong;
		hql+=" order by ";
		hql+=condition;
		return listpage(hql,pageNo, 10);
	}

	@Override
	public Object getMessageById(int id,String type) {
		// TODO Auto-generated method stub
		String hql="from "+type+" a where a.id=?";
		return findByHql(hql,new Object[]{id});
	}



}
