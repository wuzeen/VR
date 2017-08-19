package com.vr.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.EncyclopediaDao;
import com.vr.dao.Encyclopedia_propDao;
import com.vr.domain.Encyclopedia_prop;
import com.vr.service.Encyclopedia_propService;
@Service
@Qualifier("encyclopedia_propServiceImpl")
public class Encyclopedia_propServiceImpl implements Encyclopedia_propService {

	@Autowired
	@Qualifier("encyclopedia_propDaoImpl")
	private Encyclopedia_propDao ency_propdao;
	
	@Override
	public Encyclopedia_prop getEncyclopedia_propById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Encyclopedia_prop getEncyclopedia_propByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Encyclopedia_prop> getEncyclopedia_propsById(int id) {
		// TODO Auto-generated method stub
		System.out.println("2222");
		return ency_propdao.getEncyclopedia_propsById(id);
	}

	@Override
	public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword) {
		// TODO Auto-generated method stub
		System.out.println("2222");
		return ency_propdao.getEncyclopedia_propsByKeyword(keyword);
	}

	@Override
	public Encyclopedia_prop getFirstEncyclopedia_propById(int id) {
		// TODO Auto-generated method stub
		return ency_propdao.getFirstEncyclopedia_propById(id);
	}

	@Override
	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.createEncyclopedia_prop(ency_prop);
	}

	@Override
	public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.deleteEncyclopedia_prop(ency_prop);
	}

	@Override
	public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return ency_propdao.updateEncyclopedia_prop(ency_prop);
	}

}
