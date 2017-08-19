package com.vr.controller;

import java.io.File;
import java.io.IOException;
import java.text.NumberFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vr.dao.AdminDao;
import com.vr.dao.QuestionDao;
import com.vr.daoImpl.MessageDaoImpl;
import com.vr.domain.Admin;
import com.vr.domain.MessageLeaving;
import com.vr.domain.MessageResponse;
import com.vr.service.AnswerService;
import com.vr.service.MessageLeavingService;
import com.vr.util.*;
@Controller
public class t {
	@Test
	public void test() throws IOException {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		AdminDao adminDao=(AdminDao)ctx.getBean("adminDaoImpl");
		Admin admin=new Admin();
		admin.setAdminname("vrroot");
		admin.setPassword("123456");
		Admin newadmin=(Admin)adminDao.getAdmin(admin);
		System.out.println(newadmin);
		
	}
	@RequestMapping("/home")
	public String tdsd(Map<String, String> map)
	{
		System.out.println(map.get("textarea"));
		return "home";
	}
	@RequestMapping("/hello")
	public String tds()
	{
		return "hello";
	}
}
