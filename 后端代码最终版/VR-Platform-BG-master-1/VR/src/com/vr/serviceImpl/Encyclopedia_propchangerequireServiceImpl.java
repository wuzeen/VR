package com.vr.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.Encyclopedia_propDao;
import com.vr.dao.Encyclopedia_propchangerequireDao;
import com.vr.domain.Encyclopedia_propchangerequire;
import com.vr.service.Encyclopedia_propService;
import com.vr.service.Encyclopedia_propchangerequireService;
import com.vr.util.response.Encyclopedia_proprequireData;
@Service
@Qualifier("encyclopedia_propchangerequireServiceImpl")
public class Encyclopedia_propchangerequireServiceImpl  implements Encyclopedia_propchangerequireService {

	
	@Autowired
	@Qualifier("encyclopedia_propchangerequireDaoImpl")
	private Encyclopedia_propchangerequireDao ency_propchangerequiredao;
	
	
	@Override
	public boolean createEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		return ency_propchangerequiredao.createEncyclopedia_propchangerequire(ency_propchangerequire);
	}

	@Override
	public boolean deleteEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		return ency_propchangerequiredao.deleteEncyclopedia_propchangerequire(ency_propchangerequire);
	}

	@Override
	public boolean updateEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		return ency_propchangerequiredao.updateEncyclopedia_propchangerequire(ency_propchangerequire);
	}

	@Override
	public List<Encyclopedia_proprequireData> getEncyclopedia_proprequireBypage(
			int pageNum, int pageSize) {
		// TODO Auto-generated method stub
		System.out.println("2222");
		return ency_propchangerequiredao.getEncyclopedia_proprequireBypage(pageNum, pageSize);
	}

}
