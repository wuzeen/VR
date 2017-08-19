package com.vr.service;

import java.util.List;

import com.vr.domain.Encyclopedia;

public interface EncyclopediaService {
	
	
	public Encyclopedia getEncyclopediaById(int id);
	public Encyclopedia getEncyclopediaByKeyword(String keyword);
	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword);
	public List<Encyclopedia> getEncyclopediasByType(String type);
	public List<Encyclopedia> getEncyclopediasByType(String type,int pageNum,int pageSize);
	 public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,int pageNum,int pageSize);
	 public List<String> getAllTypes();

}
