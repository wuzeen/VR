package com.vr.daoImpl;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.UserDao;
import com.vr.domain.User;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("userDaoImpl")
public class UserDaoImpl extends HibernateUtils implements UserDao {

	@Override
	public boolean createUser(User user) {
		return save(user);
	}

	@Override
	public boolean deleteUser(User user) {
		return delete(user);
	}

	@Override
	public boolean updateUser(User user) {
		return update(user);
	}

	@Override
	public User getUserByEmailAndPassword(String email, String password) {
		String hql="from User u where u.email=? and u.password=?";
		return (User) findByHql(hql,new Object[]{email,password});
	}

	@Override
	public boolean isExistEmail(String email) {
		String hql="from User u where u.email=?";
		return (User) findByHql(hql,new Object[]{email})==null?false:true;
	}

	@Override
	public boolean isExistNickname(String nickname) {
		String hql="from User u where u.nickname=?";
		return (User) findByHql(hql,new Object[]{nickname})==null?false:true;
	}

	@Override
	public User getUserById(Integer id) {
		String hql="from User u where u.id=?";
	    return (User) findByHql(hql,new Object[]{id});
	} 
      
}
