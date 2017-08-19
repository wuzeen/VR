package com.vr.daoImpl;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.AdminDao;
import com.vr.domain.Admin;
import com.vr.util.HibernateUtils;
import com.vr.util.response.Code;
@Repository
@Qualifier("adminDaoImpl")
public class AdminDaoImpl extends HibernateUtils implements AdminDao{

	@Override
	public int checkPassword(Admin admin) {
		// TODO Auto-generated method stub
		if(getAdmin(admin)!=null)
			return Code.SUCCEED;
		else 
			return Code.WRONG_EMAIL_OR_PASSWORD;
		
	}

	@Override
	public boolean saveAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return save(admin);
	}

	@Override
	public boolean deleteAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return delete(admin);
	}

	@Override
	public Object getAdmin(Admin admin) {
		// TODO Auto-generated method stub	
		String adminname=admin.getAdminname();
		String password=admin.getPassword();
		String hql="from Admin a where a.adminname=? and password=?";
		return findByHql(hql, new Object[]{adminname,password});
	}

}
