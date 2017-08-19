package com.vr.controller;

import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.dao.AdminDao;
import com.vr.domain.Admin;
import com.vr.service.AllInOnePCService;
import com.vr.util.ContextUtil;
import com.vr.util.ConvertUtil;
import com.vr.util.response.Code;
import com.vr.util.response.Data;

@Controller
public class AdminController {
	@Autowired
	@Qualifier("adminDaoImpl")
	private AdminDao adminDao;

	public AdminDao getAdminDao() {
		return adminDao;
	}

	public void setAdminDao(AdminDao adminDao) {
		this.adminDao = adminDao;
	}
	@ResponseBody
	@RequestMapping("/admin/login")
	public Data adminLogin(@RequestBody Admin admin)
	{
		Data data=new Data(null);
		System.out.println(admin.toString());
		if(adminDao.checkPassword(admin)==Code.SUCCEED)
		{
			HttpSession session=ContextUtil.getSession();
			session.setAttribute("user", admin);
			data.setData(Code.SUCCEED);
		}
		else
		{
			data.setData(Code.WRONG_EMAIL_OR_PASSWORD);
		}
		return data;
	}
	
}
