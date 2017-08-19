package com.vr.daoImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.PCHeadSetDao;

import com.vr.domain.MobileBox;
import com.vr.domain.PcheadSet;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("pcHeadSetDaoImpl")
public class PCHeadSetDaoImpl extends HibernateUtils implements PCHeadSetDao {

	@Override
	public boolean deletePCHeadSet(PcheadSet pcHeadSet) {
		return delete(pcHeadSet);
	}

	@Override
	public boolean updatePCHeadSet(List<Map<String, String>>list) {
		for (Map<String, String> map : list) {
			if(map.size()==0)
				break;
			PcheadSet pcHeadSet = new PcheadSet();
	
			pcHeadSet.setBluerayirradiance(map.get("蓝光辐照度（W·m^-2·sr^-1）"));
			pcHeadSet.setBoundarywarning(map.get("边界警示"));
			pcHeadSet.setBrand(map.get("品牌"));
			pcHeadSet.setBroadbandcharacteristicvoltageofearphone(map.get("耳机的宽带特征电压（mV）"));
		pcHeadSet.setPicLocation(map.get("图片"));
			pcHeadSet.setCvsmean(map.get("CVS均值"));
			pcHeadSet.setElectrostaticdischarge(map.get("静电放电"));
			pcHeadSet.setFieldangle(map.get("视场角（°）"));
			pcHeadSet.setMaximumoutputvoltage(map.get("播放器最大输出电压（mV）"));
			pcHeadSet.setMeanchangeofvisualacuity(map.get("视力变化均值"));
			pcHeadSet.setMonocularresolution(map.get("单眼分辨率"));
			pcHeadSet.setProductmodel(map.get("产品型号"));
			pcHeadSet.setRadiationdisturbance(map.get("辐射骚扰"));
			pcHeadSet.setRefreshrate(map.get("刷新率（Hz）"));
			pcHeadSet.setRemark(map.get("备注"));
			pcHeadSet.setSalesmodel(map.get("销售型号（名）"));
			pcHeadSet.setScreentype(map.get("屏幕类型"));
			pcHeadSet.setSoundpressurelevel(map.get("声压级（dB(A)）"));
			pcHeadSet.setSsqmean(map.get("SSQ均值"));
			pcHeadSet.setSystemdelay(map.get("系统延迟(ms)"));
			pcHeadSet.setTrackingmode(map.get("跟踪模式"));
			pcHeadSet.setTrackingrange(map.get("跟踪范围（m）"));
			pcHeadSet.setWeight(map.get("重量(kg)"));
			pcHeadSet.setWorkingtemperature(map.get("工作温度(℃)"));
			save(pcHeadSet);
		}
		return true;
	}

	@Override
	public List<Object> getPCHeadSetByPage(int pageNo) {
		String hql = "from PcheadSet p";
		return listpage(hql, pageNo, 9);
	}

	@Override
	public PcheadSet getPCHeadSetById(int id) {
		String hql = "from PcheadSet p where p.id=?";
		return (PcheadSet) findByHql(hql, new Object[] { id });
	}

	@Override
	public Object getPCHeadSetSize() {
		// TODO Auto-generated method stub
		
		String hql="select count(*) from PcheadSet p";
		return getSize(hql);
	}

}
