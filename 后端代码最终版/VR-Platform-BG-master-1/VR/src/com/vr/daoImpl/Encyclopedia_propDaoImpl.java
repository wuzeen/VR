package com.vr.daoImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.Encyclopedia_propDao;
import com.vr.domain.Encyclopedia;
import com.vr.domain.Encyclopedia_prop;
import com.vr.domain.News;
import com.vr.util.HibernateUtils;
@Repository
@Qualifier("encyclopedia_propDaoImpl")
public class Encyclopedia_propDaoImpl extends HibernateUtils implements Encyclopedia_propDao {

	public boolean createEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return save(ency_prop);
	}

	public boolean deleteEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return delete(ency_prop);
	}

	public boolean updateEncyclopedia_prop(Encyclopedia_prop ency_prop) {
		// TODO Auto-generated method stub
		return update(ency_prop);
	}

	public List<Encyclopedia_prop> getEncyclopedia_propsById(Integer id) {
		// TODO Auto-generated method stub
		List<Encyclopedia_prop> ency_prop=new ArrayList<>();
		List<Object> obj=findByHqlGetList("from Encyclopedia_prop n where n.id=?",new Object[]{id});
		for(int i=0;i<obj.size();i++){
			System.out.println(((Encyclopedia_prop)obj.get(i)).getProp_id());
			ency_prop.add((Encyclopedia_prop)obj.get(i));
		}
		return ency_prop;
	}

	@Override
	public List<Encyclopedia_prop> getEncyclopedia_propsByKeyword(String keyword) {
		// TODO Auto-generated method stub
		System.out.println("3333");
		List<Encyclopedia_prop> ency_prop=new ArrayList<>();
		List<Object> obj=findByHqlGetList("from Encyclopedia_prop n where n.keyword=?",new Object[]{keyword});
		for(int i=0;i<obj.size();i++){
			ency_prop.add((Encyclopedia_prop)obj.get(i));
			
		}
		return ency_prop;
	}

	@Override
	public Encyclopedia_prop getFirstEncyclopedia_propById(int id) {
		
		return (Encyclopedia_prop) findByHql("from Encyclopedia_prop n where n.id=? and n.prop_id='0'", new Object[] { id });
	}

	

}
