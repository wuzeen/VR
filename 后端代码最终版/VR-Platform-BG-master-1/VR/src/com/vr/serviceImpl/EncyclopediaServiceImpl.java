package com.vr.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.vr.dao.EncyclopediaDao;
import com.vr.domain.Encyclopedia;
import com.vr.service.EncyclopediaService;
@Service
@Qualifier("encyclopediaServiceImpl")
public class EncyclopediaServiceImpl implements EncyclopediaService {
	@Autowired
	@Qualifier("encyclopediaDaoImpl")
	private EncyclopediaDao encydao;

	public Encyclopedia getEncyclopediaById(int id) {
		// TODO Auto-generated method stub
		

		return encydao.getEncyclopediaById(id);
	}

	public Encyclopedia getEncyclopediaByKeyword(String keyword){
		return encydao.getEncyclopediaByKeyword(keyword);
	}


	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByKeyword(keyword);
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,
			int pageNum, int pageSize) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByKeyword(keyword, pageNum, pageSize);
	}

	public List<String> getAllTypes() {
		// TODO Auto-generated method stub
		return encydao.getAllTypes();
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByType(type);
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type, int pageNum,
			int pageSize) {
		// TODO Auto-generated method stub
		return encydao.getEncyclopediasByType(type, pageNum, pageSize);
	}
}
