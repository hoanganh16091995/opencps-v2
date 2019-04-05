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

import com.fds.vr.business.model.ILVehicleCustomsBorderGuard;
import com.fds.vr.business.model.ILVehicleCustomsBorderGuardModel;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;

import com.liferay.portal.kernel.bean.AutoEscapeBeanHandler;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.impl.BaseModelImpl;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.DateUtil;
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
 * The base model implementation for the ILVehicleCustomsBorderGuard service. Represents a row in the &quot;il_vehicle_customsborderguard&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface {@link ILVehicleCustomsBorderGuardModel} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link ILVehicleCustomsBorderGuardImpl}.
 * </p>
 *
 * @author LamTV
 * @see ILVehicleCustomsBorderGuardImpl
 * @see ILVehicleCustomsBorderGuard
 * @see ILVehicleCustomsBorderGuardModel
 * @generated
 */
@ProviderType
public class ILVehicleCustomsBorderGuardModelImpl extends BaseModelImpl<ILVehicleCustomsBorderGuard>
	implements ILVehicleCustomsBorderGuardModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a il vehicle customs border guard model instance should use the {@link ILVehicleCustomsBorderGuard} interface instead.
	 */
	public static final String TABLE_NAME = "il_vehicle_customsborderguard";
	public static final Object[][] TABLE_COLUMNS = {
			{ "vehicleCustomsBorderGuardId", Types.BIGINT },
			{ "registrationNumber", Types.VARCHAR },
			{ "expImpGateType", Types.VARCHAR },
			{ "expImpGate", Types.VARCHAR },
			{ "driverName", Types.VARCHAR },
			{ "driverLicenceNo", Types.VARCHAR },
			{ "registrationDate", Types.TIMESTAMP },
			{ "customsDepartureDate", Types.TIMESTAMP },
			{ "customsArrivalDate", Types.TIMESTAMP },
			{ "borderGuardsDepartureDate", Types.TIMESTAMP },
			{ "borderGuardsArrivalDate", Types.TIMESTAMP },
			{ "syncDate", Types.TIMESTAMP }
		};
	public static final Map<String, Integer> TABLE_COLUMNS_MAP = new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("vehicleCustomsBorderGuardId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("registrationNumber", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("expImpGateType", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("expImpGate", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("driverName", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("driverLicenceNo", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("registrationDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("customsDepartureDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("customsArrivalDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("borderGuardsDepartureDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("borderGuardsArrivalDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("syncDate", Types.TIMESTAMP);
	}

	public static final String TABLE_SQL_CREATE = "create table il_vehicle_customsborderguard (vehicleCustomsBorderGuardId LONG not null primary key,registrationNumber VARCHAR(75) null,expImpGateType VARCHAR(75) null,expImpGate VARCHAR(75) null,driverName VARCHAR(75) null,driverLicenceNo VARCHAR(75) null,registrationDate DATE null,customsDepartureDate DATE null,customsArrivalDate DATE null,borderGuardsDepartureDate DATE null,borderGuardsArrivalDate DATE null,syncDate DATE null)";
	public static final String TABLE_SQL_DROP = "drop table il_vehicle_customsborderguard";
	public static final String ORDER_BY_JPQL = " ORDER BY ilVehicleCustomsBorderGuard.syncDate DESC";
	public static final String ORDER_BY_SQL = " ORDER BY il_vehicle_customsborderguard.syncDate DESC";
	public static final String DATA_SOURCE = "liferayDataSource";
	public static final String SESSION_FACTORY = "liferaySessionFactory";
	public static final String TX_MANAGER = "liferayTransactionManager";
	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.entity.cache.enabled.com.fds.vr.business.model.ILVehicleCustomsBorderGuard"),
			true);
	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.com.fds.vr.business.model.ILVehicleCustomsBorderGuard"),
			true);
	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.column.bitmask.enabled.com.fds.vr.business.model.ILVehicleCustomsBorderGuard"),
			true);
	public static final long REGISTRATIONNUMBER_COLUMN_BITMASK = 1L;
	public static final long SYNCDATE_COLUMN_BITMASK = 2L;
	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(com.fds.vr.service.util.ServiceProps.get(
				"lock.expiration.time.com.fds.vr.business.model.ILVehicleCustomsBorderGuard"));

	public ILVehicleCustomsBorderGuardModelImpl() {
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
		return ILVehicleCustomsBorderGuard.class;
	}

	@Override
	public String getModelClassName() {
		return ILVehicleCustomsBorderGuard.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("id", getId());
		attributes.put("registrationNumber", getRegistrationNumber());
		attributes.put("expImpGateType", getExpImpGateType());
		attributes.put("expImpGate", getExpImpGate());
		attributes.put("driverName", getDriverName());
		attributes.put("driverLicenceNo", getDriverLicenceNo());
		attributes.put("registrationDate", getRegistrationDate());
		attributes.put("customsDepartureDate", getCustomsDepartureDate());
		attributes.put("customsArrivalDate", getCustomsArrivalDate());
		attributes.put("borderGuardsDepartureDate",
			getBorderGuardsDepartureDate());
		attributes.put("borderGuardsArrivalDate", getBorderGuardsArrivalDate());
		attributes.put("syncDate", getSyncDate());

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

		String registrationNumber = (String)attributes.get("registrationNumber");

		if (registrationNumber != null) {
			setRegistrationNumber(registrationNumber);
		}

		String expImpGateType = (String)attributes.get("expImpGateType");

		if (expImpGateType != null) {
			setExpImpGateType(expImpGateType);
		}

		String expImpGate = (String)attributes.get("expImpGate");

		if (expImpGate != null) {
			setExpImpGate(expImpGate);
		}

		String driverName = (String)attributes.get("driverName");

		if (driverName != null) {
			setDriverName(driverName);
		}

		String driverLicenceNo = (String)attributes.get("driverLicenceNo");

		if (driverLicenceNo != null) {
			setDriverLicenceNo(driverLicenceNo);
		}

		Date registrationDate = (Date)attributes.get("registrationDate");

		if (registrationDate != null) {
			setRegistrationDate(registrationDate);
		}

		Date customsDepartureDate = (Date)attributes.get("customsDepartureDate");

		if (customsDepartureDate != null) {
			setCustomsDepartureDate(customsDepartureDate);
		}

		Date customsArrivalDate = (Date)attributes.get("customsArrivalDate");

		if (customsArrivalDate != null) {
			setCustomsArrivalDate(customsArrivalDate);
		}

		Date borderGuardsDepartureDate = (Date)attributes.get(
				"borderGuardsDepartureDate");

		if (borderGuardsDepartureDate != null) {
			setBorderGuardsDepartureDate(borderGuardsDepartureDate);
		}

		Date borderGuardsArrivalDate = (Date)attributes.get(
				"borderGuardsArrivalDate");

		if (borderGuardsArrivalDate != null) {
			setBorderGuardsArrivalDate(borderGuardsArrivalDate);
		}

		Date syncDate = (Date)attributes.get("syncDate");

		if (syncDate != null) {
			setSyncDate(syncDate);
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
	public String getRegistrationNumber() {
		if (_registrationNumber == null) {
			return StringPool.BLANK;
		}
		else {
			return _registrationNumber;
		}
	}

	@Override
	public void setRegistrationNumber(String registrationNumber) {
		_columnBitmask |= REGISTRATIONNUMBER_COLUMN_BITMASK;

		if (_originalRegistrationNumber == null) {
			_originalRegistrationNumber = _registrationNumber;
		}

		_registrationNumber = registrationNumber;
	}

	public String getOriginalRegistrationNumber() {
		return GetterUtil.getString(_originalRegistrationNumber);
	}

	@Override
	public String getExpImpGateType() {
		if (_expImpGateType == null) {
			return StringPool.BLANK;
		}
		else {
			return _expImpGateType;
		}
	}

	@Override
	public void setExpImpGateType(String expImpGateType) {
		_expImpGateType = expImpGateType;
	}

	@Override
	public String getExpImpGate() {
		if (_expImpGate == null) {
			return StringPool.BLANK;
		}
		else {
			return _expImpGate;
		}
	}

	@Override
	public void setExpImpGate(String expImpGate) {
		_expImpGate = expImpGate;
	}

	@Override
	public String getDriverName() {
		if (_driverName == null) {
			return StringPool.BLANK;
		}
		else {
			return _driverName;
		}
	}

	@Override
	public void setDriverName(String driverName) {
		_driverName = driverName;
	}

	@Override
	public String getDriverLicenceNo() {
		if (_driverLicenceNo == null) {
			return StringPool.BLANK;
		}
		else {
			return _driverLicenceNo;
		}
	}

	@Override
	public void setDriverLicenceNo(String driverLicenceNo) {
		_driverLicenceNo = driverLicenceNo;
	}

	@Override
	public Date getRegistrationDate() {
		return _registrationDate;
	}

	@Override
	public void setRegistrationDate(Date registrationDate) {
		_registrationDate = registrationDate;
	}

	@Override
	public Date getCustomsDepartureDate() {
		return _customsDepartureDate;
	}

	@Override
	public void setCustomsDepartureDate(Date customsDepartureDate) {
		_customsDepartureDate = customsDepartureDate;
	}

	@Override
	public Date getCustomsArrivalDate() {
		return _customsArrivalDate;
	}

	@Override
	public void setCustomsArrivalDate(Date customsArrivalDate) {
		_customsArrivalDate = customsArrivalDate;
	}

	@Override
	public Date getBorderGuardsDepartureDate() {
		return _borderGuardsDepartureDate;
	}

	@Override
	public void setBorderGuardsDepartureDate(Date borderGuardsDepartureDate) {
		_borderGuardsDepartureDate = borderGuardsDepartureDate;
	}

	@Override
	public Date getBorderGuardsArrivalDate() {
		return _borderGuardsArrivalDate;
	}

	@Override
	public void setBorderGuardsArrivalDate(Date borderGuardsArrivalDate) {
		_borderGuardsArrivalDate = borderGuardsArrivalDate;
	}

	@Override
	public Date getSyncDate() {
		return _syncDate;
	}

	@Override
	public void setSyncDate(Date syncDate) {
		_columnBitmask = -1L;

		_syncDate = syncDate;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(0,
			ILVehicleCustomsBorderGuard.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public ILVehicleCustomsBorderGuard toEscapedModel() {
		if (_escapedModel == null) {
			_escapedModel = (ILVehicleCustomsBorderGuard)ProxyUtil.newProxyInstance(_classLoader,
					_escapedModelInterfaces, new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		ILVehicleCustomsBorderGuardImpl ilVehicleCustomsBorderGuardImpl = new ILVehicleCustomsBorderGuardImpl();

		ilVehicleCustomsBorderGuardImpl.setId(getId());
		ilVehicleCustomsBorderGuardImpl.setRegistrationNumber(getRegistrationNumber());
		ilVehicleCustomsBorderGuardImpl.setExpImpGateType(getExpImpGateType());
		ilVehicleCustomsBorderGuardImpl.setExpImpGate(getExpImpGate());
		ilVehicleCustomsBorderGuardImpl.setDriverName(getDriverName());
		ilVehicleCustomsBorderGuardImpl.setDriverLicenceNo(getDriverLicenceNo());
		ilVehicleCustomsBorderGuardImpl.setRegistrationDate(getRegistrationDate());
		ilVehicleCustomsBorderGuardImpl.setCustomsDepartureDate(getCustomsDepartureDate());
		ilVehicleCustomsBorderGuardImpl.setCustomsArrivalDate(getCustomsArrivalDate());
		ilVehicleCustomsBorderGuardImpl.setBorderGuardsDepartureDate(getBorderGuardsDepartureDate());
		ilVehicleCustomsBorderGuardImpl.setBorderGuardsArrivalDate(getBorderGuardsArrivalDate());
		ilVehicleCustomsBorderGuardImpl.setSyncDate(getSyncDate());

		ilVehicleCustomsBorderGuardImpl.resetOriginalValues();

		return ilVehicleCustomsBorderGuardImpl;
	}

	@Override
	public int compareTo(
		ILVehicleCustomsBorderGuard ilVehicleCustomsBorderGuard) {
		int value = 0;

		value = DateUtil.compareTo(getSyncDate(),
				ilVehicleCustomsBorderGuard.getSyncDate());

		value = value * -1;

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

		if (!(obj instanceof ILVehicleCustomsBorderGuard)) {
			return false;
		}

		ILVehicleCustomsBorderGuard ilVehicleCustomsBorderGuard = (ILVehicleCustomsBorderGuard)obj;

		long primaryKey = ilVehicleCustomsBorderGuard.getPrimaryKey();

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
		ILVehicleCustomsBorderGuardModelImpl ilVehicleCustomsBorderGuardModelImpl =
			this;

		ilVehicleCustomsBorderGuardModelImpl._originalRegistrationNumber = ilVehicleCustomsBorderGuardModelImpl._registrationNumber;

		ilVehicleCustomsBorderGuardModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<ILVehicleCustomsBorderGuard> toCacheModel() {
		ILVehicleCustomsBorderGuardCacheModel ilVehicleCustomsBorderGuardCacheModel =
			new ILVehicleCustomsBorderGuardCacheModel();

		ilVehicleCustomsBorderGuardCacheModel.id = getId();

		ilVehicleCustomsBorderGuardCacheModel.registrationNumber = getRegistrationNumber();

		String registrationNumber = ilVehicleCustomsBorderGuardCacheModel.registrationNumber;

		if ((registrationNumber != null) && (registrationNumber.length() == 0)) {
			ilVehicleCustomsBorderGuardCacheModel.registrationNumber = null;
		}

		ilVehicleCustomsBorderGuardCacheModel.expImpGateType = getExpImpGateType();

		String expImpGateType = ilVehicleCustomsBorderGuardCacheModel.expImpGateType;

		if ((expImpGateType != null) && (expImpGateType.length() == 0)) {
			ilVehicleCustomsBorderGuardCacheModel.expImpGateType = null;
		}

		ilVehicleCustomsBorderGuardCacheModel.expImpGate = getExpImpGate();

		String expImpGate = ilVehicleCustomsBorderGuardCacheModel.expImpGate;

		if ((expImpGate != null) && (expImpGate.length() == 0)) {
			ilVehicleCustomsBorderGuardCacheModel.expImpGate = null;
		}

		ilVehicleCustomsBorderGuardCacheModel.driverName = getDriverName();

		String driverName = ilVehicleCustomsBorderGuardCacheModel.driverName;

		if ((driverName != null) && (driverName.length() == 0)) {
			ilVehicleCustomsBorderGuardCacheModel.driverName = null;
		}

		ilVehicleCustomsBorderGuardCacheModel.driverLicenceNo = getDriverLicenceNo();

		String driverLicenceNo = ilVehicleCustomsBorderGuardCacheModel.driverLicenceNo;

		if ((driverLicenceNo != null) && (driverLicenceNo.length() == 0)) {
			ilVehicleCustomsBorderGuardCacheModel.driverLicenceNo = null;
		}

		Date registrationDate = getRegistrationDate();

		if (registrationDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.registrationDate = registrationDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.registrationDate = Long.MIN_VALUE;
		}

		Date customsDepartureDate = getCustomsDepartureDate();

		if (customsDepartureDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.customsDepartureDate = customsDepartureDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.customsDepartureDate = Long.MIN_VALUE;
		}

		Date customsArrivalDate = getCustomsArrivalDate();

		if (customsArrivalDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.customsArrivalDate = customsArrivalDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.customsArrivalDate = Long.MIN_VALUE;
		}

		Date borderGuardsDepartureDate = getBorderGuardsDepartureDate();

		if (borderGuardsDepartureDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.borderGuardsDepartureDate = borderGuardsDepartureDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.borderGuardsDepartureDate = Long.MIN_VALUE;
		}

		Date borderGuardsArrivalDate = getBorderGuardsArrivalDate();

		if (borderGuardsArrivalDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.borderGuardsArrivalDate = borderGuardsArrivalDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.borderGuardsArrivalDate = Long.MIN_VALUE;
		}

		Date syncDate = getSyncDate();

		if (syncDate != null) {
			ilVehicleCustomsBorderGuardCacheModel.syncDate = syncDate.getTime();
		}
		else {
			ilVehicleCustomsBorderGuardCacheModel.syncDate = Long.MIN_VALUE;
		}

		return ilVehicleCustomsBorderGuardCacheModel;
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(25);

		sb.append("{id=");
		sb.append(getId());
		sb.append(", registrationNumber=");
		sb.append(getRegistrationNumber());
		sb.append(", expImpGateType=");
		sb.append(getExpImpGateType());
		sb.append(", expImpGate=");
		sb.append(getExpImpGate());
		sb.append(", driverName=");
		sb.append(getDriverName());
		sb.append(", driverLicenceNo=");
		sb.append(getDriverLicenceNo());
		sb.append(", registrationDate=");
		sb.append(getRegistrationDate());
		sb.append(", customsDepartureDate=");
		sb.append(getCustomsDepartureDate());
		sb.append(", customsArrivalDate=");
		sb.append(getCustomsArrivalDate());
		sb.append(", borderGuardsDepartureDate=");
		sb.append(getBorderGuardsDepartureDate());
		sb.append(", borderGuardsArrivalDate=");
		sb.append(getBorderGuardsArrivalDate());
		sb.append(", syncDate=");
		sb.append(getSyncDate());
		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		StringBundler sb = new StringBundler(40);

		sb.append("<model><model-name>");
		sb.append("com.fds.vr.business.model.ILVehicleCustomsBorderGuard");
		sb.append("</model-name>");

		sb.append(
			"<column><column-name>id</column-name><column-value><![CDATA[");
		sb.append(getId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>registrationNumber</column-name><column-value><![CDATA[");
		sb.append(getRegistrationNumber());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>expImpGateType</column-name><column-value><![CDATA[");
		sb.append(getExpImpGateType());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>expImpGate</column-name><column-value><![CDATA[");
		sb.append(getExpImpGate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>driverName</column-name><column-value><![CDATA[");
		sb.append(getDriverName());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>driverLicenceNo</column-name><column-value><![CDATA[");
		sb.append(getDriverLicenceNo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>registrationDate</column-name><column-value><![CDATA[");
		sb.append(getRegistrationDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>customsDepartureDate</column-name><column-value><![CDATA[");
		sb.append(getCustomsDepartureDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>customsArrivalDate</column-name><column-value><![CDATA[");
		sb.append(getCustomsArrivalDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>borderGuardsDepartureDate</column-name><column-value><![CDATA[");
		sb.append(getBorderGuardsDepartureDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>borderGuardsArrivalDate</column-name><column-value><![CDATA[");
		sb.append(getBorderGuardsArrivalDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>syncDate</column-name><column-value><![CDATA[");
		sb.append(getSyncDate());
		sb.append("]]></column-value></column>");

		sb.append("</model>");

		return sb.toString();
	}

	private static final ClassLoader _classLoader = ILVehicleCustomsBorderGuard.class.getClassLoader();
	private static final Class<?>[] _escapedModelInterfaces = new Class[] {
			ILVehicleCustomsBorderGuard.class
		};
	private long _id;
	private String _registrationNumber;
	private String _originalRegistrationNumber;
	private String _expImpGateType;
	private String _expImpGate;
	private String _driverName;
	private String _driverLicenceNo;
	private Date _registrationDate;
	private Date _customsDepartureDate;
	private Date _customsArrivalDate;
	private Date _borderGuardsDepartureDate;
	private Date _borderGuardsArrivalDate;
	private Date _syncDate;
	private long _columnBitmask;
	private ILVehicleCustomsBorderGuard _escapedModel;
}