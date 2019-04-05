/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.fds.vr.business.model.impl;

import aQute.bnd.annotation.ProviderType;

import com.fds.vr.business.model.VRLimitConfigTechSpec;
import com.fds.vr.business.model.VRLimitConfigTechSpecModel;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;

import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.GetterUtil;
import com.liferay.portal.kernel.util.ProxyUtil;
import com.liferay.portal.kernel.util.StringBundler;
import com.liferay.portal.kernel.util.StringPool;

import java.io.Serializable;

import java.sql.Types;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * The base model implementation for the VRLimitConfigTechSpec service. Represents a row in the &quot;vr_cfg_limit_technicalspec&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface {@link VRLimitConfigTechSpecModel} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link VRLimitConfigTechSpecImpl}.
 * </p>
 *
 * @author LamTV
 * @see VRLimitConfigTechSpecImpl
 * @see VRLimitConfigTechSpec
 * @see VRLimitConfigTechSpecModel
 * @generated
 */
@ProviderType
public class VRLimitConfigTechSpecModelImpl extends BaseModelImpl<VRLimitConfigTechSpec>
	implements VRLimitConfigTechSpecModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a vr limit config tech spec model instance should use the {@link VRLimitConfigTechSpec} interface instead.
	 */
	public static final String TABLE_NAME = "vr_cfg_limit_technicalspec";
	public static final Object[][] TABLE_COLUMNS = {
			{ "id", Types.BIGINT },
			{ "vehicletype", Types.VARCHAR },
			{ "vehicletypename", Types.VARCHAR },
			{ "markup_SMRM", Types.VARCHAR },
			{ "searching_drive_config", Types.BIGINT },
			{ "searching_drive_config_desc", Types.VARCHAR },
			{ "sequenceno", Types.INTEGER },
			{ "specificationcode", Types.VARCHAR },
			{ "specificationname", Types.VARCHAR },
			{ "synchdate", Types.TIMESTAMP }
		};
	public static final Map<String, Integer> TABLE_COLUMNS_MAP = new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("id", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("vehicletype", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("vehicletypename", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("markup_SMRM", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("searching_drive_config", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("searching_drive_config_desc", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("sequenceno", Types.INTEGER);
		TABLE_COLUMNS_MAP.put("specificationcode", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("specificationname", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("synchdate", Types.TIMESTAMP);
	}

	public static final String TABLE_SQL_CREATE = "create table vr_cfg_limit_technicalspec (id LONG not null primary key,vehicletype VARCHAR(75) null,vehicletypename VARCHAR(75) null,markup_SMRM VARCHAR(75) null,searching_drive_config LONG,searching_drive_config_desc VARCHAR(75) null,sequenceno INTEGER,specificationcode VARCHAR(75) null,specificationname VARCHAR(75) null,synchdate DATE null)";
	public static final String TABLE_SQL_DROP = "drop table vr_cfg_limit_technicalspec";
	public static final String ORDER_BY_JPQL = " ORDER BY vrLimitConfigTechSpec.sequenceNo ASC";
	public static final String ORDER_BY_SQL = " ORDER BY vr_cfg_limit_technicalspec.sequenceno ASC";
	public static final String DATA_SOURCE = "liferayDataSource";
	public static final String SESSION_FACTORY = "liferaySessionFactory";
	public static final String TX_MANAGER = "liferayTransactionManager";
	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.entity.cache.enabled.com.fds.vr.business.model.VRLimitConfigTechSpec"),
			true);
	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.com.fds.vr.business.model.VRLimitConfigTechSpec"),
			true);
	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.column.bitmask.enabled.com.fds.vr.business.model.VRLimitConfigTechSpec"),
			true);
	public static final long MARKUPSMRM_COLUMN_BITMASK = 1L;
	public static final long SEARCHINGDRIVECONFIG_COLUMN_BITMASK = 2L;
	public static final long VEHICLETYPE_COLUMN_BITMASK = 4L;
	public static final long SEQUENCENO_COLUMN_BITMASK = 8L;
	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(com.fds.vr.service.util.ServiceProps.get(
				"lock.expiration.time.com.fds.vr.business.model.VRLimitConfigTechSpec"));

	public VRLimitConfigTechSpecModelImpl() {
	}

	@Override
	public long getPrimaryKey() {
		return _id;
	}

	@Override
	public void setPrimaryKey(long primaryKey) {
		setId(primaryKey);
	}

	@Override
	public Serializable getPrimaryKeyObj() {
		return _id;
	}

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj) {
		setPrimaryKey(((Long)primaryKeyObj).longValue());
	}

	@Override
	public Class<?> getModelClass() {
		return VRLimitConfigTechSpec.class;
	}

	@Override
	public String getModelClassName() {
		return VRLimitConfigTechSpec.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("id", getId());
		attributes.put("vehicleType", getVehicleType());
		attributes.put("vehicleTypeName", getVehicleTypeName());
		attributes.put("markupSMRM", getMarkupSMRM());
		attributes.put("searchingDriveConfig", getSearchingDriveConfig());
		attributes.put("searchingDriveConfigDesc", getSearchingDriveConfigDesc());
		attributes.put("sequenceNo", getSequenceNo());
		attributes.put("specificationCode", getSpecificationCode());
		attributes.put("specificationName", getSpecificationName());
		attributes.put("synchDate", getSynchDate());

		attributes.put("entityCacheEnabled", isEntityCacheEnabled());
		attributes.put("finderCacheEnabled", isFinderCacheEnabled());

		return attributes;
	}

	@Override
	public void setModelAttributes(Map<String, Object> attributes) {
		Long id = (Long)attributes.get("id");

		if (id != null) {
			setId(id);
		}

		String vehicleType = (String)attributes.get("vehicleType");

		if (vehicleType != null) {
			setVehicleType(vehicleType);
		}

		String vehicleTypeName = (String)attributes.get("vehicleTypeName");

		if (vehicleTypeName != null) {
			setVehicleTypeName(vehicleTypeName);
		}

		String markupSMRM = (String)attributes.get("markupSMRM");

		if (markupSMRM != null) {
			setMarkupSMRM(markupSMRM);
		}

		Long searchingDriveConfig = (Long)attributes.get("searchingDriveConfig");

		if (searchingDriveConfig != null) {
			setSearchingDriveConfig(searchingDriveConfig);
		}

		String searchingDriveConfigDesc = (String)attributes.get(
				"searchingDriveConfigDesc");

		if (searchingDriveConfigDesc != null) {
			setSearchingDriveConfigDesc(searchingDriveConfigDesc);
		}

		Integer sequenceNo = (Integer)attributes.get("sequenceNo");

		if (sequenceNo != null) {
			setSequenceNo(sequenceNo);
		}

		String specificationCode = (String)attributes.get("specificationCode");

		if (specificationCode != null) {
			setSpecificationCode(specificationCode);
		}

		String specificationName = (String)attributes.get("specificationName");

		if (specificationName != null) {
			setSpecificationName(specificationName);
		}

		Date synchDate = (Date)attributes.get("synchDate");

		if (synchDate != null) {
			setSynchDate(synchDate);
		}
	}

	@Override
	public long getId() {
		return _id;
	}

	@Override
	public void setId(long id) {
		_id = id;
	}

	@Override
	public String getVehicleType() {
		if (_vehicleType == null) {
			return StringPool.BLANK;
		}
		else {
			return _vehicleType;
		}
	}

	@Override
	public void setVehicleType(String vehicleType) {
		_columnBitmask |= VEHICLETYPE_COLUMN_BITMASK;

		if (_originalVehicleType == null) {
			_originalVehicleType = _vehicleType;
		}

		_vehicleType = vehicleType;
	}

	public String getOriginalVehicleType() {
		return GetterUtil.getString(_originalVehicleType);
	}

	@Override
	public String getVehicleTypeName() {
		if (_vehicleTypeName == null) {
			return StringPool.BLANK;
		}
		else {
			return _vehicleTypeName;
		}
	}

	@Override
	public void setVehicleTypeName(String vehicleTypeName) {
		_vehicleTypeName = vehicleTypeName;
	}

	@Override
	public String getMarkupSMRM() {
		if (_markupSMRM == null) {
			return StringPool.BLANK;
		}
		else {
			return _markupSMRM;
		}
	}

	@Override
	public void setMarkupSMRM(String markupSMRM) {
		_columnBitmask |= MARKUPSMRM_COLUMN_BITMASK;

		if (_originalMarkupSMRM == null) {
			_originalMarkupSMRM = _markupSMRM;
		}

		_markupSMRM = markupSMRM;
	}

	public String getOriginalMarkupSMRM() {
		return GetterUtil.getString(_originalMarkupSMRM);
	}

	@Override
	public long getSearchingDriveConfig() {
		return _searchingDriveConfig;
	}

	@Override
	public void setSearchingDriveConfig(long searchingDriveConfig) {
		_columnBitmask |= SEARCHINGDRIVECONFIG_COLUMN_BITMASK;

		if (!_setOriginalSearchingDriveConfig) {
			_setOriginalSearchingDriveConfig = true;

			_originalSearchingDriveConfig = _searchingDriveConfig;
		}

		_searchingDriveConfig = searchingDriveConfig;
	}

	public long getOriginalSearchingDriveConfig() {
		return _originalSearchingDriveConfig;
	}

	@Override
	public String getSearchingDriveConfigDesc() {
		if (_searchingDriveConfigDesc == null) {
			return StringPool.BLANK;
		}
		else {
			return _searchingDriveConfigDesc;
		}
	}

	@Override
	public void setSearchingDriveConfigDesc(String searchingDriveConfigDesc) {
		_searchingDriveConfigDesc = searchingDriveConfigDesc;
	}

	@Override
	public int getSequenceNo() {
		return _sequenceNo;
	}

	@Override
	public void setSequenceNo(int sequenceNo) {
		_columnBitmask = -1L;

		_sequenceNo = sequenceNo;
	}

	@Override
	public String getSpecificationCode() {
		if (_specificationCode == null) {
			return StringPool.BLANK;
		}
		else {
			return _specificationCode;
		}
	}

	@Override
	public void setSpecificationCode(String specificationCode) {
		_specificationCode = specificationCode;
	}

	@Override
	public String getSpecificationName() {
		if (_specificationName == null) {
			return StringPool.BLANK;
		}
		else {
			return _specificationName;
		}
	}

	@Override
	public void setSpecificationName(String specificationName) {
		_specificationName = specificationName;
	}

	@Override
	public Date getSynchDate() {
		return _synchDate;
	}

	@Override
	public void setSynchDate(Date synchDate) {
		_synchDate = synchDate;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(0,
			VRLimitConfigTechSpec.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public VRLimitConfigTechSpec toEscapedModel() {
		if (_escapedModel == null) {
			_escapedModel = (VRLimitConfigTechSpec)ProxyUtil.newProxyInstance(_classLoader,
					_escapedModelInterfaces, new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		VRLimitConfigTechSpecImpl vrLimitConfigTechSpecImpl = new VRLimitConfigTechSpecImpl();

		vrLimitConfigTechSpecImpl.setId(getId());
		vrLimitConfigTechSpecImpl.setVehicleType(getVehicleType());
		vrLimitConfigTechSpecImpl.setVehicleTypeName(getVehicleTypeName());
		vrLimitConfigTechSpecImpl.setMarkupSMRM(getMarkupSMRM());
		vrLimitConfigTechSpecImpl.setSearchingDriveConfig(getSearchingDriveConfig());
		vrLimitConfigTechSpecImpl.setSearchingDriveConfigDesc(getSearchingDriveConfigDesc());
		vrLimitConfigTechSpecImpl.setSequenceNo(getSequenceNo());
		vrLimitConfigTechSpecImpl.setSpecificationCode(getSpecificationCode());
		vrLimitConfigTechSpecImpl.setSpecificationName(getSpecificationName());
		vrLimitConfigTechSpecImpl.setSynchDate(getSynchDate());

		vrLimitConfigTechSpecImpl.resetOriginalValues();

		return vrLimitConfigTechSpecImpl;
	}

	@Override
	public int compareTo(VRLimitConfigTechSpec vrLimitConfigTechSpec) {
		int value = 0;

		if (getSequenceNo() < vrLimitConfigTechSpec.getSequenceNo()) {
			value = -1;
		}
		else if (getSequenceNo() > vrLimitConfigTechSpec.getSequenceNo()) {
			value = 1;
		}
		else {
			value = 0;
		}

		if (value != 0) {
			return value;
		}

		return 0;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}

		if (!(obj instanceof VRLimitConfigTechSpec)) {
			return false;
		}

		VRLimitConfigTechSpec vrLimitConfigTechSpec = (VRLimitConfigTechSpec)obj;

		long primaryKey = vrLimitConfigTechSpec.getPrimaryKey();

		if (getPrimaryKey() == primaryKey) {
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public int hashCode() {
		return (int)getPrimaryKey();
	}

	@Override
	public boolean isEntityCacheEnabled() {
		return ENTITY_CACHE_ENABLED;
	}

	@Override
	public boolean isFinderCacheEnabled() {
		return FINDER_CACHE_ENABLED;
	}

	@Override
	public void resetOriginalValues() {
		VRLimitConfigTechSpecModelImpl vrLimitConfigTechSpecModelImpl = this;

		vrLimitConfigTechSpecModelImpl._originalVehicleType = vrLimitConfigTechSpecModelImpl._vehicleType;

		vrLimitConfigTechSpecModelImpl._originalMarkupSMRM = vrLimitConfigTechSpecModelImpl._markupSMRM;

		vrLimitConfigTechSpecModelImpl._originalSearchingDriveConfig = vrLimitConfigTechSpecModelImpl._searchingDriveConfig;

		vrLimitConfigTechSpecModelImpl._setOriginalSearchingDriveConfig = false;

		vrLimitConfigTechSpecModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<VRLimitConfigTechSpec> toCacheModel() {
		VRLimitConfigTechSpecCacheModel vrLimitConfigTechSpecCacheModel = new VRLimitConfigTechSpecCacheModel();

		vrLimitConfigTechSpecCacheModel.id = getId();

		vrLimitConfigTechSpecCacheModel.vehicleType = getVehicleType();

		String vehicleType = vrLimitConfigTechSpecCacheModel.vehicleType;

		if ((vehicleType != null) && (vehicleType.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.vehicleType = null;
		}

		vrLimitConfigTechSpecCacheModel.vehicleTypeName = getVehicleTypeName();

		String vehicleTypeName = vrLimitConfigTechSpecCacheModel.vehicleTypeName;

		if ((vehicleTypeName != null) && (vehicleTypeName.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.vehicleTypeName = null;
		}

		vrLimitConfigTechSpecCacheModel.markupSMRM = getMarkupSMRM();

		String markupSMRM = vrLimitConfigTechSpecCacheModel.markupSMRM;

		if ((markupSMRM != null) && (markupSMRM.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.markupSMRM = null;
		}

		vrLimitConfigTechSpecCacheModel.searchingDriveConfig = getSearchingDriveConfig();

		vrLimitConfigTechSpecCacheModel.searchingDriveConfigDesc = getSearchingDriveConfigDesc();

		String searchingDriveConfigDesc = vrLimitConfigTechSpecCacheModel.searchingDriveConfigDesc;

		if ((searchingDriveConfigDesc != null) &&
				(searchingDriveConfigDesc.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.searchingDriveConfigDesc = null;
		}

		vrLimitConfigTechSpecCacheModel.sequenceNo = getSequenceNo();

		vrLimitConfigTechSpecCacheModel.specificationCode = getSpecificationCode();

		String specificationCode = vrLimitConfigTechSpecCacheModel.specificationCode;

		if ((specificationCode != null) && (specificationCode.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.specificationCode = null;
		}

		vrLimitConfigTechSpecCacheModel.specificationName = getSpecificationName();

		String specificationName = vrLimitConfigTechSpecCacheModel.specificationName;

		if ((specificationName != null) && (specificationName.length() == 0)) {
			vrLimitConfigTechSpecCacheModel.specificationName = null;
		}

		Date synchDate = getSynchDate();

		if (synchDate != null) {
			vrLimitConfigTechSpecCacheModel.synchDate = synchDate.getTime();
		}
		else {
			vrLimitConfigTechSpecCacheModel.synchDate = Long.MIN_VALUE;
		}

		return vrLimitConfigTechSpecCacheModel;
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(21);

		sb.append("{id=");
		sb.append(getId());
		sb.append(", vehicleType=");
		sb.append(getVehicleType());
		sb.append(", vehicleTypeName=");
		sb.append(getVehicleTypeName());
		sb.append(", markupSMRM=");
		sb.append(getMarkupSMRM());
		sb.append(", searchingDriveConfig=");
		sb.append(getSearchingDriveConfig());
		sb.append(", searchingDriveConfigDesc=");
		sb.append(getSearchingDriveConfigDesc());
		sb.append(", sequenceNo=");
		sb.append(getSequenceNo());
		sb.append(", specificationCode=");
		sb.append(getSpecificationCode());
		sb.append(", specificationName=");
		sb.append(getSpecificationName());
		sb.append(", synchDate=");
		sb.append(getSynchDate());
		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		StringBundler sb = new StringBundler(34);

		sb.append("<model><model-name>");
		sb.append("com.fds.vr.business.model.VRLimitConfigTechSpec");
		sb.append("</model-name>");

		sb.append(
			"<column><column-name>id</column-name><column-value><![CDATA[");
		sb.append(getId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>vehicleType</column-name><column-value><![CDATA[");
		sb.append(getVehicleType());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>vehicleTypeName</column-name><column-value><![CDATA[");
		sb.append(getVehicleTypeName());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>markupSMRM</column-name><column-value><![CDATA[");
		sb.append(getMarkupSMRM());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>searchingDriveConfig</column-name><column-value><![CDATA[");
		sb.append(getSearchingDriveConfig());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>searchingDriveConfigDesc</column-name><column-value><![CDATA[");
		sb.append(getSearchingDriveConfigDesc());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>sequenceNo</column-name><column-value><![CDATA[");
		sb.append(getSequenceNo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>specificationCode</column-name><column-value><![CDATA[");
		sb.append(getSpecificationCode());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>specificationName</column-name><column-value><![CDATA[");
		sb.append(getSpecificationName());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>synchDate</column-name><column-value><![CDATA[");
		sb.append(getSynchDate());
		sb.append("]]></column-value></column>");

		sb.append("</model>");

		return sb.toString();
	}

	private static final ClassLoader _classLoader = VRLimitConfigTechSpec.class.getClassLoader();
	private static final Class<?>[] _escapedModelInterfaces = new Class[] {
			VRLimitConfigTechSpec.class
		};
	private long _id;
	private String _vehicleType;
	private String _originalVehicleType;
	private String _vehicleTypeName;
	private String _markupSMRM;
	private String _originalMarkupSMRM;
	private long _searchingDriveConfig;
	private long _originalSearchingDriveConfig;
	private boolean _setOriginalSearchingDriveConfig;
	private String _searchingDriveConfigDesc;
	private int _sequenceNo;
	private String _specificationCode;
	private String _specificationName;
	private Date _synchDate;
	private long _columnBitmask;
	private VRLimitConfigTechSpec _escapedModel;
}