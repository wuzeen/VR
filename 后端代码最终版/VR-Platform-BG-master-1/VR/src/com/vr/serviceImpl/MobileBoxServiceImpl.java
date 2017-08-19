package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.MobileBox;
import com.vr.service.MobileBoxService;

@Service
@Qualifier("mobileBoxServiceImpl")
public class MobileBoxServiceImpl implements MobileBoxService{

	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDao dao;
	



	@Override
	public boolean modifyMobileBoxInfo(HashMap<String, Object> info, MobileBox mobileBox) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<MobileBox> getMobileBoxByPage(int pageNo) {
		List<Object> l=dao.getMobileBoxByPage(pageNo);
		List<MobileBox> list=new ArrayList<MobileBox>();
		for(Object o:l){
			list.add((MobileBox)o);
		}
		return list;
	}

	@Override
	public MobileBox getMobileBoxById(int id) {
		return dao.getMobileBoxById(id);
	}

}
