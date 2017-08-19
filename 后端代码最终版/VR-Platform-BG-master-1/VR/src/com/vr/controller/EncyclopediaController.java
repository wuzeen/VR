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

import com.vr.dao.EncyclopediaDao;
import com.vr.daoImpl.EncyclopediaDaoImpl;
import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;
import com.vr.domain.Encyclopedia_propchangerequire;
import com.vr.service.EncyclopediaService;
import com.vr.service.Encyclopedia_propService;
import com.vr.service.Encyclopedia_propchangerequireService;
import com.vr.util.HibernateUtils;
import com.vr.util.request.AnswerRequest;
import com.vr.util.request.EncyclopediaDirType;
import com.vr.util.request.EncyclopediaSearchData;
import com.vr.util.response.EncyclopediaSearchResultData;
import com.vr.util.response.Encyclopedia_propSearchResultData;
import com.vr.util.response.Encyclopedia_proprequireData;


@Controller
public class EncyclopediaController extends HibernateUtils{
	
	
	@Autowired
	@Qualifier("encyclopediaServiceImpl")
	private EncyclopediaService encyservice;
	
	@Autowired
	@Qualifier("encyclopedia_propServiceImpl")
	private Encyclopedia_propService ency_propservice;
	
	@Autowired
	@Qualifier("encyclopedia_propchangerequireServiceImpl")
	private Encyclopedia_propchangerequireService ency_propchangerequireservice;
	

	@ResponseBody
	@RequestMapping("/encyclopediaSearch")
	public List<EncyclopediaSearchResultData> search(@RequestBody EncyclopediaSearchData searchdata) {
		
		String keyword=searchdata.getKeyword();
		int pageNum=searchdata.getPageNum();
		
		int pageSize=10;
		
		List<EncyclopediaSearchResultData> result=new ArrayList<>();
		
		List<Encyclopedia> ency=encyservice.getEncyclopediasByKeyword(keyword, pageNum, pageSize);
		
		System.out.println("1111");
		
		for(int i=0;(i<pageSize)&&(i<ency.size());i++){
			int id=ency.get(i).getId();
			Encyclopedia_prop firstprop=ency_propservice.getFirstEncyclopedia_propById(id);
			EncyclopediaSearchResultData res=new EncyclopediaSearchResultData();
			res.setId(id);
			res.setKeyword(ency.get(i).getKeyword());
			res.setType(ency.get(i).getType());
			res.setChangenote(ency.get(i).getChangenote());
			res.setFirstprop(firstprop.getContent());
			result.add(res);
			
		}
		return result;
		

	}
	
	@ResponseBody
	@RequestMapping("/encyclopedia-prop/{id}")
	public List<Encyclopedia_propSearchResultData> search(@PathVariable int id){
		System.out.println("1111");
		
		List<Encyclopedia_prop> ency_props=ency_propservice.getEncyclopedia_propsById(id);
		System.out.println(ency_props.size());
		List<Encyclopedia_propSearchResultData> result=new ArrayList<>();
		System.out.println("3333");
		for(int i=0;i<ency_props.size();i++){
			Encyclopedia_propSearchResultData res=new Encyclopedia_propSearchResultData();
			res.setId(id);
			res.setProp_id(ency_props.get(i).getProp_id());
			res.setKeyword(encyservice.getEncyclopediaById(id).getKeyword());
			res.setContent(ency_props.get(i).getContent());
			res.setChangenote(ency_props.get(i).getChangenote());
			res.setProp_keyword(ency_props.get(i).getProp_keyword());
			result.add(res);
		}
		return result;
	}
	
	
	@ResponseBody
	@RequestMapping("/encyclopediaDir")
	public List<String> getAllTypes(){
		System.out.println("encyclopediadir");
		
			List<String> result=encyservice.getAllTypes();
			return result;
		
	}
	
	@ResponseBody
	@RequestMapping("/encyclopediaTypeDir")
	public List<EncyclopediaSearchResultData> getEncyclopediasByType(@RequestBody EncyclopediaDirType dirtype){
		
		String type=dirtype.getType();
		int pageNum=dirtype.getPageNum();
		int pageSize=5;
		System.out.println(type);
		
			List<EncyclopediaSearchResultData> result=new ArrayList<>();
			
			
			List<Encyclopedia> encys=encyservice.getEncyclopediasByType(type,pageNum,pageSize);
			for(int i=0;i<encys.size();i++){
				int id=encys.get(i).getId();
				Encyclopedia_prop firstprop=ency_propservice.getFirstEncyclopedia_propById(id);
				EncyclopediaSearchResultData res=new EncyclopediaSearchResultData();
				res.setId(id);
				res.setKeyword(encys.get(i).getKeyword());
				res.setType(encys.get(i).getType());
				res.setChangenote(encys.get(i).getChangenote());
				res.setFirstprop(firstprop.getContent());
				result.add(res);
			}
			
			return result;
		
	}
	
	@ResponseBody
	@RequestMapping("/encyclopedia-propChange")
	public int updateEncyclopedia_prop(@RequestBody Encyclopedia_propchangerequire changerequire){
		System.out.println(changerequire.getChangenote());
		boolean state=ency_propchangerequireservice.createEncyclopedia_propchangerequire(changerequire);
		if(state==false){
			return 0;
		}
		return 1;
		
	}
	
	@ResponseBody
	@RequestMapping("/encyclopedia-propRequireOpen1")
	public boolean pass(@RequestBody Encyclopedia_propchangerequire changerequire){
		Encyclopedia_prop ency_prop=new Encyclopedia_prop();
		ency_prop.setId(changerequire.getId());
		ency_prop.setProp_id(changerequire.getProp_id());
		ency_prop.setProp_keyword(changerequire.getProp_keyword());
		ency_prop.setContent(changerequire.getContent());
		ency_prop.setChangenote(changerequire.getChangenote());
		boolean state=ency_propchangerequireservice.deleteEncyclopedia_propchangerequire(changerequire);
		state=ency_propservice.updateEncyclopedia_prop(ency_prop);
		return state;
	}
	
	@ResponseBody
	@RequestMapping("/encyclopedia-propRequireOpen2")
	public boolean nopass(@RequestBody Encyclopedia_propchangerequire changerequire){
		boolean state=ency_propchangerequireservice.deleteEncyclopedia_propchangerequire(changerequire);
		return state;
	}
	
	@ResponseBody
	@RequestMapping("/encyclopedia-propRequire/{pageNum}")
	public List<Encyclopedia_proprequireData> getEncyclopedia_propchangerequireBypage(@PathVariable int pageNum){
		int pageSize=10;
		System.out.println("1111");
		List<Encyclopedia_proprequireData> result=new ArrayList<>();
		result=ency_propchangerequireservice.getEncyclopedia_proprequireBypage(pageNum, pageSize);
		for(int i=0;i<result.size();i++){
			result.get(i).setKeyword(encyservice.getEncyclopediaById(result.get(i).getId()).getKeyword());
		}
		return result;
	}
	

}
