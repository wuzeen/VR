package com.vr.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import org.springframework.stereotype.Service;

import com.vr.dao.AllInOnePCDao;
import com.vr.dao.PCHeadSetDao;
import com.vr.domain.AllInOnePc;
import com.vr.domain.MobileBox;
import com.vr.service.AllInOnePCService;

@Service
@Qualifier("allInOnePCServiceImpl")
public class AllInOnePCServiceImpl implements AllInOnePCService{

	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao dao;
	



	@Override
	public boolean modifyAllInOnePCInfo(HashMap<String, Object> info, AllInOnePc allInOnePC) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<AllInOnePc> getAllInOnePCByPage(int pageNo) {
		List<Object> l=dao.getAllInOnePCByPage(pageNo);
		List<AllInOnePc> list=new ArrayList<AllInOnePc>();
		for(Object o:l){
			list.add((AllInOnePc)o);
		}
		return list;
	}

	@Override
	public AllInOnePc getAllInOnePCById(int id) {
		return dao.getAllInOnePCById(id);
	}



}
