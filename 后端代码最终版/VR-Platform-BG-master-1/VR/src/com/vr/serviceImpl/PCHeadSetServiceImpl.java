package com.vr.serviceImpl;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.PCHeadSetDao;
import com.vr.domain.PcheadSet;
import com.vr.service.PCHeadSetService;
@Service
@Qualifier("pcHeadSetServiceImpl")
public class PCHeadSetServiceImpl implements PCHeadSetService{

	@Autowired
	@Qualifier("pcHeadSetDaoImpl")
	private PCHeadSetDao dao;
	


	@Override
	public boolean modifyPCHeadSetInfo(HashMap<String, Object> info, PcheadSet pcHeadSet) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<PcheadSet> getPCHeadSetByPage(int pageNo) {
		List<Object> l=dao.getPCHeadSetByPage(pageNo);
		List<PcheadSet> list=new ArrayList<PcheadSet>();
		for(Object o:l){
			list.add((PcheadSet)o);
		}
		return list;
	}

	@Override
	public PcheadSet getPCHeadSetById(int id) {
		return dao.getPCHeadSetById(id);
	}

}
