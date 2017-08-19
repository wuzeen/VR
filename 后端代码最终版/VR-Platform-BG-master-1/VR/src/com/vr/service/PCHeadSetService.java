package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.PcheadSet;

public interface PCHeadSetService {

  
    public boolean modifyPCHeadSetInfo(HashMap<String,Object> info,PcheadSet pcHeadSet);
    public List<PcheadSet> getPCHeadSetByPage(int pageNo);
    public PcheadSet getPCHeadSetById(int id);

}
