package com.vr.service;

import java.util.List;


import com.vr.domain.Encyclopedia_prop;

public interface Encyclopedia_propService {
	
	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop);
    public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop);
	public Encyclopedia_prop getEncyclopedia_propById(int id);
	public Encyclopedia_prop getEncyclopedia_propByKeyword(String keyword);
	public List<Encyclopedia_prop> getEncyclopedia_propsById(int id);
	public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword);

	public Encyclopedia_prop getFirstEncyclopedia_propById(int id);
}
