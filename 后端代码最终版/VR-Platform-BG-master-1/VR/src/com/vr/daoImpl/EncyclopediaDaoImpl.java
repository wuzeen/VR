package com.vr.daoImpl;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.EncyclopediaDao;
import com.vr.domain.Encyclopedia;
import com.vr.domain.News;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("encyclopediaDaoImpl")
public class EncyclopediaDaoImpl  extends HibernateUtils implements EncyclopediaDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	public boolean createEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return save(ency);
	}

	public boolean deleteEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return delete(ency);
	}

	public boolean updateEncyclopedia(Encyclopedia ency) {
		// TODO Auto-generated method stub
		return update(ency);
	}

	public Encyclopedia getEncyclopediaById(Integer id) {
		// TODO Auto-generated method stub
		
		return (Encyclopedia) findByHql("from Encyclopedia n where n.id=?", new Object[] { id });
	}
	public Encyclopedia getEncyclopediaByKeyword(String keyword){
		return (Encyclopedia) findByHql("from Encyclopedia n where n.keyword like ?",new Object[]{"%"+keyword+"%"});
	}

	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword) {
		// TODO Auto-generated method stub
		List<Encyclopedia> ency=new ArrayList<>();
		List<Object> obj=findByHqlGetList("from Encyclopedia n where n.keyword like ?",new Object[]{"%"+keyword+"%"});
		for(int i=0;i<obj.size();i++){
			ency.add((Encyclopedia)obj.get(i));
		}
		return ency;
	}

	Comparator<Encyclopedia> comparator=new Comparator<Encyclopedia>(){
		public int compare(Encyclopedia e1,Encyclopedia e2){
			if(e1.getId()<e2.getId()){
				return 0;
			}
			return 1;
		}
	};
	
	
	@Override
	public List<Encyclopedia> getEncyclopediasByKeyword(String keyword,
			int pageNum,int pageSize) {
		// TODO Auto-generated method stub
		List<Encyclopedia> ency=new ArrayList<>();
		ency=getEncyclopediasByKeyword(keyword);
		int size=ency.size();
		pageNum--;
		
		pageNum*=pageSize;
		
		Collections.sort(ency,comparator);
		List<Encyclopedia> result=new ArrayList<>();
		
		for(int i=pageNum;(i<pageNum+pageSize)&&(i<size);i++){
			result.add(ency.get(i));
		}
		return result;
	}

	@Override
	public List<String> getAllTypes() {
		// TODO Auto-generated method stub
		
		Session session = sessionFactory.openSession();
		String hql = " select distinct type from Encyclopedia";    
        Query query = session.createQuery(hql);    
            
        List<String> list = query.list();    
        
        return list;
	}

	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type) {
		// TODO Auto-generated method stub
		List<Encyclopedia> result=new ArrayList<>();
		
		List<Object> obj=findByHqlGetList("from Encyclopedia n where n.type =?",new Object[]{type});
		for(int i=0;i<obj.size();i++){
			result.add((Encyclopedia)obj.get(i));
		}
		
		return result;
	}

	
	
	
	@Override
	public List<Encyclopedia> getEncyclopediasByType(String type, int pageNum,
			int pageSize) {
		// TODO Auto-generated method stub
		List<Encyclopedia> ency=new ArrayList<>();
		ency=getEncyclopediasByType(type);
		int size=ency.size();
		pageNum--;
		
		pageNum*=pageSize;
		
		Collections.sort(ency,comparator);
		List<Encyclopedia> result=new ArrayList<>();
		
		for(int i=pageNum;(i<pageNum+pageSize)&&(i<size);i++){
			result.add(ency.get(i));
		}
		return result;
	}
	
	

}
