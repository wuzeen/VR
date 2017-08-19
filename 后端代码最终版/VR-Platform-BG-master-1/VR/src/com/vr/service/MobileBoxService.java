package com.vr.service;

import java.util.HashMap;
import java.util.List;

import com.vr.domain.MobileBox;

public interface MobileBoxService {


    public boolean modifyMobileBoxInfo(HashMap<String,Object> info,MobileBox mobileBox);
    public List<MobileBox> getMobileBoxByPage(int pageNo);
    public MobileBox getMobileBoxById(int id);

}
