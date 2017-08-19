package com.vr.dao;

import java.util.List;

import com.vr.domain.Encyclopedia_propchangerequire;
import com.vr.util.response.Encyclopedia_proprequireData;
public interface Encyclopedia_propchangerequireDao {
	
	
	public boolean createEncyclopedia_propchangerequire(Encyclopedia_propchangerequire ency_propchangerequire);
    public boolean deleteEncyclopedia_propchangerequire(Encyclopedia_propchangerequire ency_propchangerequire);
    public boolean updateEncyclopedia_propchangerequire(Encyclopedia_propchangerequire ency_propchangerequire);
    public boolean isexist(Encyclopedia_propchangerequire ency_propchangerequire);
    public List<Encyclopedia_propchangerequire> getAllRequire();
    public List<Encyclopedia_proprequireData> getEncyclopedia_proprequireBypage(int pageNum,int pageSize);

}
