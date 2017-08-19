package com.vr.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.vr.dao.MobileBoxDao;
import com.vr.domain.AllInOnePc;
import com.vr.domain.MobileBox;
import com.vr.service.AllInOnePCService;
import com.vr.service.MobileBoxService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseDataPayload;

@Controller
public class MobileBoxController {
	@Autowired
	@Qualifier("mobileBoxServiceImpl")
	private MobileBoxService mobileBoxService;
	@Autowired
	@Qualifier("mobileBoxDaoImpl")
	private MobileBoxDao dao;
	@ResponseBody
	@RequestMapping("/evrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<MobileBox> l = null;
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		} else {
			l = new ArrayList<MobileBox>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(mobileBoxService.getMobileBoxById(i));
			}


			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		}
	}

	@ResponseBody
	@RequestMapping("/evr/{id}")
	public ResponseDataPayload getMobileBoxById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED,mobileBoxService.getMobileBoxById(id));
	}

	@ResponseBody
	@RequestMapping("/products/evr/{pageid}")
	public Data getMobileBoxByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(dao.getMobileBoxSize(),mobileBoxService.getMobileBoxByPage(pageid)));
	}
}
