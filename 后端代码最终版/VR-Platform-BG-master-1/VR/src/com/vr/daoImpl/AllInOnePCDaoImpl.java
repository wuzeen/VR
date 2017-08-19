package com.vr.daoImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.vr.dao.AllInOnePCDao;
import com.vr.domain.AllInOnePc;
import com.vr.util.HibernateUtils;

@Repository
@Qualifier("allInOnePCDaoImpl")
public class AllInOnePCDaoImpl extends HibernateUtils implements AllInOnePCDao {

	@Override
	public boolean deleteAllInOnePC(AllInOnePc allInOnePC) {
		return delete(allInOnePC);
	}

	@Override
	public boolean updateAllInOnePC(List<Map<String, String>> list) {
		for (Map<String, String> map : list) {
			if(map.size()==0)
			break;
			AllInOnePc allInOnePc = new AllInOnePc();
			allInOnePc.setBatteryCapacity(map.get("电池容量（mAh）"));
			allInOnePc.setBluerayirradiance(map.get("蓝光辐照度（W·m^-2·sr^-1）"));
			allInOnePc.setBoundarywarning(map.get("边界警示"));
			allInOnePc.setBrand(map.get("品牌"));
			allInOnePc.setBroadbandcharacteristicvoltageofearphone(map.get("耳机的宽带特征电压（mV）"));
			allInOnePc.setCpu(map.get("CPU(GHz)"));
			allInOnePc.setCvsmean(map.get("CVS均值"));
			allInOnePc.setElectrostaticdischarge(map.get("静电放电"));
			allInOnePc.setFieldangle(map.get("视场角（°）"));
			allInOnePc.setMaximumoutputvoltage(map.get("播放器最大输出电压（mV）"));
			allInOnePc.setMeanchangeofvisualacuity(map.get("视力变化均值"));
			allInOnePc.setMemory(map.get("内存（GB）"));
			allInOnePc.setMonocularresolution(map.get("单眼分辨率"));
			allInOnePc.setProductmodel(map.get("产品型号"));
			allInOnePc.setRadiationdisturbance(map.get("辐射骚扰"));
			allInOnePc.setRefreshrate(map.get("刷新率（Hz）"));
			allInOnePc.setRemark(map.get("备注"));
			allInOnePc.setSalesmodel(map.get("销售型号（名）"));
			allInOnePc.setScreentype(map.get("屏幕类型"));
			allInOnePc.setSoundpressurelevel(map.get("声压级（dB(A)）"));
			allInOnePc.setSsqmean(map.get("SSQ均值"));
			allInOnePc.setSystemdelay(map.get("系统延迟(ms)"));
			allInOnePc.setTrackingmode(map.get("跟踪模式"));
			allInOnePc.setTrackingrange(map.get("跟踪范围（m）"));
			allInOnePc.setWeight(map.get("重量(kg)"));
			allInOnePc.setWorkingtemperature(map.get("工作温度(℃)"));
			allInOnePc.setPicLocation(map.get("图片"));
			save(allInOnePc);
		}
		return true;
	}

	@Override
	public List<Object> getAllInOnePCByPage(int pageNo) {
		String hql = "from AllInOnePc a";
		return listpage(hql, pageNo, 9);
	}

	@Override
	public AllInOnePc getAllInOnePCById(int id) {
		String hql = "from AllInOnePc a where a.id=?";
		return (AllInOnePc) findByHql(hql, new Object[] { id });
	}

	@Override
	public Object getAllInOneSize() {
		// TODO Auto-generated method stub
		String hql="select count(*) from AllInOnePc p";
		return getSize(hql);
	}

}
