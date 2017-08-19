package com.vr.dao;

import java.util.List;
import java.util.Map;

import com.vr.domain.PcheadSet;

public interface PCHeadSetDao {


	public boolean deletePCHeadSet(PcheadSet pcHeadSet);

	public boolean updatePCHeadSet(List<Map<String, String>>list);

	public List<Object> getPCHeadSetByPage(int pageNo);

	public PcheadSet getPCHeadSetById(int id);
    public Object getPCHeadSetSize();
}
