package com.vr.daoImpl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.Encyclopedia_propDao;
import com.vr.dao.Encyclopedia_propchangerequireDao;
import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;
import com.vr.domain.Encyclopedia_propchangerequire;
import com.vr.util.HibernateUtils;
import com.vr.util.response.Encyclopedia_proprequireData;
@Repository
@Qualifier("encyclopedia_propchangerequireDaoImpl")
public class Encyclopedia_propchangerequireDaoImpl  extends HibernateUtils implements Encyclopedia_propchangerequireDao {

	
	
	@Override
	public boolean createEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		if(isexist(ency_propchangerequire)){
			return false;
		}
		return saveNew(ency_propchangerequire);
	}

	@Override
	public boolean deleteEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		return delete(ency_propchangerequire);
	}

	@Override
	public boolean updateEncyclopedia_propchangerequire(
			Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub
		return update(ency_propchangerequire);
	}

	@Override
	public boolean isexist(Encyclopedia_propchangerequire ency_propchangerequire) {
		// TODO Auto-generated method stub

		List<Object> obj=findByHqlGetList("from Encyclopedia_propchangerequire n where n.id=? and n.prop_id=? and n.changenote=?",new Object[]{ency_propchangerequire.getId(),ency_propchangerequire.getProp_id(),ency_propchangerequire.getChangenote()});
		if(obj.size()!=0){
			return true;
		}
		return false;
	}

	@Override
	public List<Encyclopedia_proprequireData> getEncyclopedia_proprequireBypage(
			int pageNum, int pageSize) {
		System.out.println("3333");
		// TODO Auto-generated method stub
		pageNum--;
		pageNum*=pageSize;
		List<Encyclopedia_proprequireData> result=new ArrayList<>();
		List<Encyclopedia_propchangerequire> ency_proprequire=getAllRequire();
		for(int i=pageNum;(i<ency_proprequire.size())&&(i<pageNum+pageSize);i++){
			Encyclopedia_proprequireData res=new Encyclopedia_proprequireData();
			res.setRequireid(i);
			res.setKeyword("keyword");			
			res.setId(ency_proprequire.get(i).getId());
			res.setProp_id(ency_proprequire.get(i).getProp_id());
			res.setProp_keyword(ency_proprequire.get(i).getProp_keyword());
			res.setContent(ency_proprequire.get(i).getContent());
			res.setChangenote(ency_proprequire.get(i).getChangenote());
			result.add(res);
			
		}
		return result;
	}

	@Override
	public List<Encyclopedia_propchangerequire> getAllRequire() {
		// TODO Auto-generated method stub
		System.out.println("4444");
		List<Encyclopedia_propchangerequire> result=new ArrayList<>();
		List<Object> obj=findByHqlGetList("from Encyclopedia_propchangerequire n ",new Object[]{});
		for(int i=0;i<obj.size();i++){
			result.add((Encyclopedia_propchangerequire)obj.get(i));
		}
		System.out.println("5555");
		return result;
	}

}
