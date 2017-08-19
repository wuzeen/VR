package com.vr.dao;



import java.util.List;

import com.vr.domain.Encyclopedia;

public interface EncyclopediaDao {
	
	
	public boolean createEncyclopedia(Encyclopedia ency);
    public boolean deleteEncyclopedia(Encyclopedia ency);
    public boolean updateEncyclopedia(Encyclopedia ency);
    public Encyclopedia getEncyclopediaById(Integer id);
    public Encyclopedia getEncyclopediaByKeyword(String keyword);
    public List<Encyclopedia> getEncyclopediasByKeyword(String keyword);
    public List<Encyclopedia> getEncyclopediasByType(String type,int pageNum,int pageSize);
    public List<Encyclopedia> getEncyclopediasByType(String type);
    public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,int pageNum,int pageSize);
    public List<String> getAllTypes();
    

}
