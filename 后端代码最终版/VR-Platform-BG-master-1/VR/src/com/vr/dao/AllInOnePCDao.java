package com.vr.dao;

import java.util.List;
import java.util.Map;

import com.vr.domain.AllInOnePc;

public interface AllInOnePCDao {
    public boolean deleteAllInOnePC(AllInOnePc allInOnePC);
    public boolean updateAllInOnePC(List<Map<String, String>>list);
    public List<Object> getAllInOnePCByPage(int pageNo);
    public AllInOnePc getAllInOnePCById(int id);
    public Object getAllInOneSize();
    
}
