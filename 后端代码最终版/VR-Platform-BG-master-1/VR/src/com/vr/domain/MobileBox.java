package com.vr.domain;
// Generated 2017-7-25 10:39:31 by Hibernate Tools 4.0.1.Final

import com.fasterxml.jackson.annotation.JsonView;
import com.vr.view.QuestionProduct;

/**
 * MobileBox generated by hbm2java
 */
public class MobileBox implements java.io.Serializable {

	private Integer id;
	private String remark;
	private String brand;
	@JsonView(QuestionProduct.Tag.class)
	private String salesmodel;
	private String productmodel;
	private String weight;
	private String workingtemperature;
	private String bluerayirradiance;
	private String broadbandcharacteristicvoltageofearphone;
	private String boundarywarning;
	private String radiationdisturbance;
	private String electrostaticdischarge;
	private String fieldangle;
	private String systemdelay;
	private String trackingmode;
	private String trackingrange;
	private String meanchangeofvisualacuity;
	private String ssqmean;
	private String cvsmean;
	private String adapterphone;
	private String picLocation;
	private String hot;

	public MobileBox() {
	}

	public MobileBox(String remark, String brand, String salesmodel, String productmodel, String weight,
			String workingtemperature, String bluerayirradiance, String broadbandcharacteristicvoltageofearphone,
			String boundarywarning, String radiationdisturbance, String electrostaticdischarge, String fieldangle,
			String systemdelay, String trackingmode, String trackingrange, String meanchangeofvisualacuity,
			String ssqmean, String cvsmean, String adapterphone, String picLocation, String hot) {
		this.remark = remark;
		this.brand = brand;
		this.salesmodel = salesmodel;
		this.productmodel = productmodel;
		this.weight = weight;
		this.workingtemperature = workingtemperature;
		this.bluerayirradiance = bluerayirradiance;
		this.broadbandcharacteristicvoltageofearphone = broadbandcharacteristicvoltageofearphone;
		this.boundarywarning = boundarywarning;
		this.radiationdisturbance = radiationdisturbance;
		this.electrostaticdischarge = electrostaticdischarge;
		this.fieldangle = fieldangle;
		this.systemdelay = systemdelay;
		this.trackingmode = trackingmode;
		this.trackingrange = trackingrange;
		this.meanchangeofvisualacuity = meanchangeofvisualacuity;
		this.ssqmean = ssqmean;
		this.cvsmean = cvsmean;
		this.adapterphone = adapterphone;
		this.picLocation = picLocation;
		this.hot = hot;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getBrand() {
		return this.brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getSalesmodel() {
		return this.salesmodel;
	}

	public void setSalesmodel(String salesmodel) {
		this.salesmodel = salesmodel;
	}

	public String getProductmodel() {
		return this.productmodel;
	}

	public void setProductmodel(String productmodel) {
		this.productmodel = productmodel;
	}

	public String getWeight() {
		return this.weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getWorkingtemperature() {
		return this.workingtemperature;
	}

	public void setWorkingtemperature(String workingtemperature) {
		this.workingtemperature = workingtemperature;
	}

	public String getBluerayirradiance() {
		return this.bluerayirradiance;
	}

	public void setBluerayirradiance(String bluerayirradiance) {
		this.bluerayirradiance = bluerayirradiance;
	}

	public String getBroadbandcharacteristicvoltageofearphone() {
		return this.broadbandcharacteristicvoltageofearphone;
	}

	public void setBroadbandcharacteristicvoltageofearphone(String broadbandcharacteristicvoltageofearphone) {
		this.broadbandcharacteristicvoltageofearphone = broadbandcharacteristicvoltageofearphone;
	}

	public String getBoundarywarning() {
		return this.boundarywarning;
	}

	public void setBoundarywarning(String boundarywarning) {
		this.boundarywarning = boundarywarning;
	}

	public String getRadiationdisturbance() {
		return this.radiationdisturbance;
	}

	public void setRadiationdisturbance(String radiationdisturbance) {
		this.radiationdisturbance = radiationdisturbance;
	}

	public String getElectrostaticdischarge() {
		return this.electrostaticdischarge;
	}

	public void setElectrostaticdischarge(String electrostaticdischarge) {
		this.electrostaticdischarge = electrostaticdischarge;
	}

	public String getFieldangle() {
		return this.fieldangle;
	}

	public void setFieldangle(String fieldangle) {
		this.fieldangle = fieldangle;
	}

	public String getSystemdelay() {
		return this.systemdelay;
	}

	public void setSystemdelay(String systemdelay) {
		this.systemdelay = systemdelay;
	}

	public String getTrackingmode() {
		return this.trackingmode;
	}

	public void setTrackingmode(String trackingmode) {
		this.trackingmode = trackingmode;
	}

	public String getTrackingrange() {
		return this.trackingrange;
	}

	public void setTrackingrange(String trackingrange) {
		this.trackingrange = trackingrange;
	}

	public String getMeanchangeofvisualacuity() {
		return this.meanchangeofvisualacuity;
	}

	public void setMeanchangeofvisualacuity(String meanchangeofvisualacuity) {
		this.meanchangeofvisualacuity = meanchangeofvisualacuity;
	}

	public String getSsqmean() {
		return this.ssqmean;
	}

	public void setSsqmean(String ssqmean) {
		this.ssqmean = ssqmean;
	}

	public String getCvsmean() {
		return this.cvsmean;
	}

	public void setCvsmean(String cvsmean) {
		this.cvsmean = cvsmean;
	}

	public String getAdapterphone() {
		return this.adapterphone;
	}

	public void setAdapterphone(String adapterphone) {
		this.adapterphone = adapterphone;
	}

	public String getPicLocation() {
		return this.picLocation;
	}

	public void setPicLocation(String picLocation) {
		this.picLocation = picLocation;
	}

	public String getHot() {
		return this.hot;
	}

	public void setHot(String hot) {
		this.hot = hot;
	}

}
