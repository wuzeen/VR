package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.AllInOnePc;

public interface AllInOnePCService {


    public boolean modifyAllInOnePCInfo(HashMap<String,Object> info,AllInOnePc allInOnePC);
    public List<AllInOnePc> getAllInOnePCByPage(int pageNo);
    public AllInOnePc getAllInOnePCById(int id);

}
