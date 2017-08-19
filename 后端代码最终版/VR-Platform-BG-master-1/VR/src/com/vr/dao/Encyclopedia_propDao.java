package com.vr.dao;

import java.util.List;

import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;

public interface Encyclopedia_propDao {
	
	
	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public List<Encyclopedia_prop> getEncyclopedia_propsById(Integer id);
    public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword);
    public Encyclopedia_prop getFirstEncyclopedia_propById(int id);

}
