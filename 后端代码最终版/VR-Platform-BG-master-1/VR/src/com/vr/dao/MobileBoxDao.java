package com.vr.dao;

import java.util.List;
import java.util.Map;

import com.vr.domain.MobileBox;


public interface MobileBoxDao {

	public boolean deleteMobileBox(MobileBox mobileBox);

	public boolean updateMobileBox(List<Map<String, String>>list);

	public List<Object> getMobileBoxByPage(int pageNo);

	public MobileBox getMobileBoxById(int id);
    public Object getMobileBoxSize();
}
