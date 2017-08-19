
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

import com.vr.dao.AllInOnePCDao;
import com.vr.domain.AllInOnePc;
import com.vr.service.AllInOnePCService;
import com.vr.util.request.CompareUtil;
import com.vr.util.response.Code;
import com.vr.util.response.Data;
import com.vr.util.response.ResponseDataPayload;
@Controller
public class AllInOnePCController {
	@Autowired
	@Qualifier("allInOnePCServiceImpl")
	private AllInOnePCService allInOnePCService;
	@Autowired
	@Qualifier("allInOnePCDaoImpl")
	private AllInOnePCDao dao;
	
	
	
	@ResponseBody
	@RequestMapping("/ivrCompare")
	public Data compare(@RequestBody CompareUtil cmpUtil) {
		List<AllInOnePc> l = null;
		System.out.println(cmpUtil.getIdList().size());
		if (cmpUtil.getIdList().size() > 4 || cmpUtil.getIdList().isEmpty()) {
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		} else {
			l = new ArrayList<AllInOnePc>();
			for (Integer i : cmpUtil.getIdList()) {
				l.add(allInOnePCService.getAllInOnePCById(i));
			}


			
			return new Data(new ResponseDataPayload(Code.SUCCEED,l));
		}
	}

	@ResponseBody
	@RequestMapping("/ivr/{id}")
	public ResponseDataPayload getPCHeadSetById(@PathVariable Integer id) {
		return new ResponseDataPayload(Code.SUCCEED,allInOnePCService.getAllInOnePCById(id));
	}

	@ResponseBody
	@RequestMapping("/products/ivr/{pageid}")
	public Data getAllInOnePCByPage(@PathVariable Integer pageid) {
		return new Data(new ResponseDataPayload(dao.getAllInOneSize(),allInOnePCService.getAllInOnePCByPage(pageid)));
	}
}
