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

import com.fds.vr.business.model.VRInputStampbook;
import com.fds.vr.business.model.VRInputStampbookModel;

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
 * The base model implementation for the VRInputStampbook service. Represents a row in the &quot;vr_inputstampbook&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This implementation and its corresponding interface {@link VRInputStampbookModel} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link VRInputStampbookImpl}.
 * </p>
 *
 * @author LamTV
 * @see VRInputStampbookImpl
 * @see VRInputStampbook
 * @see VRInputStampbookModel
 * @generated
 */
@ProviderType
public class VRInputStampbookModelImpl extends BaseModelImpl<VRInputStampbook>
	implements VRInputStampbookModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this class directly. All methods that expect a vr input stampbook model instance should use the {@link VRInputStampbook} interface instead.
	 */
	public static final String TABLE_NAME = "vr_inputstampbook";
	public static final Object[][] TABLE_COLUMNS = {
			{ "id", Types.BIGINT },
			{ "mtCore", Types.BIGINT },
			{ "inputSheetId", Types.BIGINT },
			{ "bookId", Types.BIGINT },
			{ "vehicleClass", Types.VARCHAR },
			{ "stampType", Types.VARCHAR },
			{ "stampShortNo", Types.VARCHAR },
			{ "serialStartNo", Types.BIGINT },
			{ "serialEndNo", Types.VARCHAR },
			{ "subTotalInDocument", Types.BIGINT },
			{ "subTotalQuantities", Types.BIGINT },
			{ "units", Types.BIGINT },
			{ "unitPrice", Types.BIGINT },
			{ "totalAmount", Types.BIGINT },
			{ "totalInUse", Types.BIGINT },
			{ "totalNotUsed", Types.BIGINT },
			{ "sum1", Types.BIGINT },
			{ "sum2", Types.BIGINT },
			{ "sum3", Types.BIGINT },
			{ "remark", Types.VARCHAR },
			{ "modifyDate", Types.TIMESTAMP },
			{ "syncDate", Types.TIMESTAMP }
		};
	public static final Map<String, Integer> TABLE_COLUMNS_MAP = new HashMap<String, Integer>();

	static {
		TABLE_COLUMNS_MAP.put("id", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("mtCore", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("inputSheetId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("bookId", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("vehicleClass", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("stampType", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("stampShortNo", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("serialStartNo", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("serialEndNo", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("subTotalInDocument", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("subTotalQuantities", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("units", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("unitPrice", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("totalAmount", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("totalInUse", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("totalNotUsed", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("sum1", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("sum2", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("sum3", Types.BIGINT);
		TABLE_COLUMNS_MAP.put("remark", Types.VARCHAR);
		TABLE_COLUMNS_MAP.put("modifyDate", Types.TIMESTAMP);
		TABLE_COLUMNS_MAP.put("syncDate", Types.TIMESTAMP);
	}

	public static final String TABLE_SQL_CREATE = "create table vr_inputstampbook (id LONG not null primary key,mtCore LONG,inputSheetId LONG,bookId LONG,vehicleClass VARCHAR(75) null,stampType VARCHAR(75) null,stampShortNo VARCHAR(75) null,serialStartNo LONG,serialEndNo VARCHAR(75) null,subTotalInDocument LONG,subTotalQuantities LONG,units LONG,unitPrice LONG,totalAmount LONG,totalInUse LONG,totalNotUsed LONG,sum1 LONG,sum2 LONG,sum3 LONG,remark VARCHAR(75) null,modifyDate DATE null,syncDate DATE null)";
	public static final String TABLE_SQL_DROP = "drop table vr_inputstampbook";
	public static final String ORDER_BY_JPQL = " ORDER BY vrInputStampbook.modifyDate DESC";
	public static final String ORDER_BY_SQL = " ORDER BY vr_inputstampbook.modifyDate DESC";
	public static final String DATA_SOURCE = "liferayDataSource";
	public static final String SESSION_FACTORY = "liferaySessionFactory";
	public static final String TX_MANAGER = "liferayTransactionManager";
	public static final boolean ENTITY_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.entity.cache.enabled.com.fds.vr.business.model.VRInputStampbook"),
			true);
	public static final boolean FINDER_CACHE_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.finder.cache.enabled.com.fds.vr.business.model.VRInputStampbook"),
			true);
	public static final boolean COLUMN_BITMASK_ENABLED = GetterUtil.getBoolean(com.fds.vr.service.util.ServiceProps.get(
				"value.object.column.bitmask.enabled.com.fds.vr.business.model.VRInputStampbook"),
			true);
	public static final long BOOKID_COLUMN_BITMASK = 1L;
	public static final long INPUTSHEETID_COLUMN_BITMASK = 2L;
	public static final long MTCORE_COLUMN_BITMASK = 4L;
	public static final long STAMPTYPE_COLUMN_BITMASK = 8L;
	public static final long MODIFYDATE_COLUMN_BITMASK = 16L;
	public static final long LOCK_EXPIRATION_TIME = GetterUtil.getLong(com.fds.vr.service.util.ServiceProps.get(
				"lock.expiration.time.com.fds.vr.business.model.VRInputStampbook"));

	public VRInputStampbookModelImpl() {
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
		return VRInputStampbook.class;
	}

	@Override
	public String getModelClassName() {
		return VRInputStampbook.class.getName();
	}

	@Override
	public Map<String, Object> getModelAttributes() {
		Map<String, Object> attributes = new HashMap<String, Object>();

		attributes.put("id", getId());
		attributes.put("mtCore", getMtCore());
		attributes.put("inputSheetId", getInputSheetId());
		attributes.put("bookId", getBookId());
		attributes.put("vehicleClass", getVehicleClass());
		attributes.put("stampType", getStampType());
		attributes.put("stampShortNo", getStampShortNo());
		attributes.put("serialStartNo", getSerialStartNo());
		attributes.put("serialEndNo", getSerialEndNo());
		attributes.put("subTotalInDocument", getSubTotalInDocument());
		attributes.put("subTotalQuantities", getSubTotalQuantities());
		attributes.put("units", getUnits());
		attributes.put("unitPrice", getUnitPrice());
		attributes.put("totalAmount", getTotalAmount());
		attributes.put("totalInUse", getTotalInUse());
		attributes.put("totalNotUsed", getTotalNotUsed());
		attributes.put("sum1", getSum1());
		attributes.put("sum2", getSum2());
		attributes.put("sum3", getSum3());
		attributes.put("remark", getRemark());
		attributes.put("modifyDate", getModifyDate());
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

		Long mtCore = (Long)attributes.get("mtCore");

		if (mtCore != null) {
			setMtCore(mtCore);
		}

		Long inputSheetId = (Long)attributes.get("inputSheetId");

		if (inputSheetId != null) {
			setInputSheetId(inputSheetId);
		}

		Long bookId = (Long)attributes.get("bookId");

		if (bookId != null) {
			setBookId(bookId);
		}

		String vehicleClass = (String)attributes.get("vehicleClass");

		if (vehicleClass != null) {
			setVehicleClass(vehicleClass);
		}

		String stampType = (String)attributes.get("stampType");

		if (stampType != null) {
			setStampType(stampType);
		}

		String stampShortNo = (String)attributes.get("stampShortNo");

		if (stampShortNo != null) {
			setStampShortNo(stampShortNo);
		}

		Long serialStartNo = (Long)attributes.get("serialStartNo");

		if (serialStartNo != null) {
			setSerialStartNo(serialStartNo);
		}

		String serialEndNo = (String)attributes.get("serialEndNo");

		if (serialEndNo != null) {
			setSerialEndNo(serialEndNo);
		}

		Long subTotalInDocument = (Long)attributes.get("subTotalInDocument");

		if (subTotalInDocument != null) {
			setSubTotalInDocument(subTotalInDocument);
		}

		Long subTotalQuantities = (Long)attributes.get("subTotalQuantities");

		if (subTotalQuantities != null) {
			setSubTotalQuantities(subTotalQuantities);
		}

		Long units = (Long)attributes.get("units");

		if (units != null) {
			setUnits(units);
		}

		Long unitPrice = (Long)attributes.get("unitPrice");

		if (unitPrice != null) {
			setUnitPrice(unitPrice);
		}

		Long totalAmount = (Long)attributes.get("totalAmount");

		if (totalAmount != null) {
			setTotalAmount(totalAmount);
		}

		Long totalInUse = (Long)attributes.get("totalInUse");

		if (totalInUse != null) {
			setTotalInUse(totalInUse);
		}

		Long totalNotUsed = (Long)attributes.get("totalNotUsed");

		if (totalNotUsed != null) {
			setTotalNotUsed(totalNotUsed);
		}

		Long sum1 = (Long)attributes.get("sum1");

		if (sum1 != null) {
			setSum1(sum1);
		}

		Long sum2 = (Long)attributes.get("sum2");

		if (sum2 != null) {
			setSum2(sum2);
		}

		Long sum3 = (Long)attributes.get("sum3");

		if (sum3 != null) {
			setSum3(sum3);
		}

		String remark = (String)attributes.get("remark");

		if (remark != null) {
			setRemark(remark);
		}

		Date modifyDate = (Date)attributes.get("modifyDate");

		if (modifyDate != null) {
			setModifyDate(modifyDate);
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
	public long getMtCore() {
		return _mtCore;
	}

	@Override
	public void setMtCore(long mtCore) {
		_columnBitmask |= MTCORE_COLUMN_BITMASK;

		if (!_setOriginalMtCore) {
			_setOriginalMtCore = true;

			_originalMtCore = _mtCore;
		}

		_mtCore = mtCore;
	}

	public long getOriginalMtCore() {
		return _originalMtCore;
	}

	@Override
	public long getInputSheetId() {
		return _inputSheetId;
	}

	@Override
	public void setInputSheetId(long inputSheetId) {
		_columnBitmask |= INPUTSHEETID_COLUMN_BITMASK;

		if (!_setOriginalInputSheetId) {
			_setOriginalInputSheetId = true;

			_originalInputSheetId = _inputSheetId;
		}

		_inputSheetId = inputSheetId;
	}

	public long getOriginalInputSheetId() {
		return _originalInputSheetId;
	}

	@Override
	public long getBookId() {
		return _bookId;
	}

	@Override
	public void setBookId(long bookId) {
		_columnBitmask |= BOOKID_COLUMN_BITMASK;

		if (!_setOriginalBookId) {
			_setOriginalBookId = true;

			_originalBookId = _bookId;
		}

		_bookId = bookId;
	}

	public long getOriginalBookId() {
		return _originalBookId;
	}

	@Override
	public String getVehicleClass() {
		if (_vehicleClass == null) {
			return StringPool.BLANK;
		}
		else {
			return _vehicleClass;
		}
	}

	@Override
	public void setVehicleClass(String vehicleClass) {
		_vehicleClass = vehicleClass;
	}

	@Override
	public String getStampType() {
		if (_stampType == null) {
			return StringPool.BLANK;
		}
		else {
			return _stampType;
		}
	}

	@Override
	public void setStampType(String stampType) {
		_columnBitmask |= STAMPTYPE_COLUMN_BITMASK;

		if (_originalStampType == null) {
			_originalStampType = _stampType;
		}

		_stampType = stampType;
	}

	public String getOriginalStampType() {
		return GetterUtil.getString(_originalStampType);
	}

	@Override
	public String getStampShortNo() {
		if (_stampShortNo == null) {
			return StringPool.BLANK;
		}
		else {
			return _stampShortNo;
		}
	}

	@Override
	public void setStampShortNo(String stampShortNo) {
		_stampShortNo = stampShortNo;
	}

	@Override
	public long getSerialStartNo() {
		return _serialStartNo;
	}

	@Override
	public void setSerialStartNo(long serialStartNo) {
		_serialStartNo = serialStartNo;
	}

	@Override
	public String getSerialEndNo() {
		if (_serialEndNo == null) {
			return StringPool.BLANK;
		}
		else {
			return _serialEndNo;
		}
	}

	@Override
	public void setSerialEndNo(String serialEndNo) {
		_serialEndNo = serialEndNo;
	}

	@Override
	public long getSubTotalInDocument() {
		return _subTotalInDocument;
	}

	@Override
	public void setSubTotalInDocument(long subTotalInDocument) {
		_subTotalInDocument = subTotalInDocument;
	}

	@Override
	public long getSubTotalQuantities() {
		return _subTotalQuantities;
	}

	@Override
	public void setSubTotalQuantities(long subTotalQuantities) {
		_subTotalQuantities = subTotalQuantities;
	}

	@Override
	public long getUnits() {
		return _units;
	}

	@Override
	public void setUnits(long units) {
		_units = units;
	}

	@Override
	public long getUnitPrice() {
		return _unitPrice;
	}

	@Override
	public void setUnitPrice(long unitPrice) {
		_unitPrice = unitPrice;
	}

	@Override
	public long getTotalAmount() {
		return _totalAmount;
	}

	@Override
	public void setTotalAmount(long totalAmount) {
		_totalAmount = totalAmount;
	}

	@Override
	public long getTotalInUse() {
		return _totalInUse;
	}

	@Override
	public void setTotalInUse(long totalInUse) {
		_totalInUse = totalInUse;
	}

	@Override
	public long getTotalNotUsed() {
		return _totalNotUsed;
	}

	@Override
	public void setTotalNotUsed(long totalNotUsed) {
		_totalNotUsed = totalNotUsed;
	}

	@Override
	public long getSum1() {
		return _sum1;
	}

	@Override
	public void setSum1(long sum1) {
		_sum1 = sum1;
	}

	@Override
	public long getSum2() {
		return _sum2;
	}

	@Override
	public void setSum2(long sum2) {
		_sum2 = sum2;
	}

	@Override
	public long getSum3() {
		return _sum3;
	}

	@Override
	public void setSum3(long sum3) {
		_sum3 = sum3;
	}

	@Override
	public String getRemark() {
		if (_remark == null) {
			return StringPool.BLANK;
		}
		else {
			return _remark;
		}
	}

	@Override
	public void setRemark(String remark) {
		_remark = remark;
	}

	@Override
	public Date getModifyDate() {
		return _modifyDate;
	}

	@Override
	public void setModifyDate(Date modifyDate) {
		_columnBitmask = -1L;

		_modifyDate = modifyDate;
	}

	@Override
	public Date getSyncDate() {
		return _syncDate;
	}

	@Override
	public void setSyncDate(Date syncDate) {
		_syncDate = syncDate;
	}

	public long getColumnBitmask() {
		return _columnBitmask;
	}

	@Override
	public ExpandoBridge getExpandoBridge() {
		return ExpandoBridgeFactoryUtil.getExpandoBridge(0,
			VRInputStampbook.class.getName(), getPrimaryKey());
	}

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext) {
		ExpandoBridge expandoBridge = getExpandoBridge();

		expandoBridge.setAttributes(serviceContext);
	}

	@Override
	public VRInputStampbook toEscapedModel() {
		if (_escapedModel == null) {
			_escapedModel = (VRInputStampbook)ProxyUtil.newProxyInstance(_classLoader,
					_escapedModelInterfaces, new AutoEscapeBeanHandler(this));
		}

		return _escapedModel;
	}

	@Override
	public Object clone() {
		VRInputStampbookImpl vrInputStampbookImpl = new VRInputStampbookImpl();

		vrInputStampbookImpl.setId(getId());
		vrInputStampbookImpl.setMtCore(getMtCore());
		vrInputStampbookImpl.setInputSheetId(getInputSheetId());
		vrInputStampbookImpl.setBookId(getBookId());
		vrInputStampbookImpl.setVehicleClass(getVehicleClass());
		vrInputStampbookImpl.setStampType(getStampType());
		vrInputStampbookImpl.setStampShortNo(getStampShortNo());
		vrInputStampbookImpl.setSerialStartNo(getSerialStartNo());
		vrInputStampbookImpl.setSerialEndNo(getSerialEndNo());
		vrInputStampbookImpl.setSubTotalInDocument(getSubTotalInDocument());
		vrInputStampbookImpl.setSubTotalQuantities(getSubTotalQuantities());
		vrInputStampbookImpl.setUnits(getUnits());
		vrInputStampbookImpl.setUnitPrice(getUnitPrice());
		vrInputStampbookImpl.setTotalAmount(getTotalAmount());
		vrInputStampbookImpl.setTotalInUse(getTotalInUse());
		vrInputStampbookImpl.setTotalNotUsed(getTotalNotUsed());
		vrInputStampbookImpl.setSum1(getSum1());
		vrInputStampbookImpl.setSum2(getSum2());
		vrInputStampbookImpl.setSum3(getSum3());
		vrInputStampbookImpl.setRemark(getRemark());
		vrInputStampbookImpl.setModifyDate(getModifyDate());
		vrInputStampbookImpl.setSyncDate(getSyncDate());

		vrInputStampbookImpl.resetOriginalValues();

		return vrInputStampbookImpl;
	}

	@Override
	public int compareTo(VRInputStampbook vrInputStampbook) {
		int value = 0;

		value = DateUtil.compareTo(getModifyDate(),
				vrInputStampbook.getModifyDate());

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

		if (!(obj instanceof VRInputStampbook)) {
			return false;
		}

		VRInputStampbook vrInputStampbook = (VRInputStampbook)obj;

		long primaryKey = vrInputStampbook.getPrimaryKey();

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
		VRInputStampbookModelImpl vrInputStampbookModelImpl = this;

		vrInputStampbookModelImpl._originalMtCore = vrInputStampbookModelImpl._mtCore;

		vrInputStampbookModelImpl._setOriginalMtCore = false;

		vrInputStampbookModelImpl._originalInputSheetId = vrInputStampbookModelImpl._inputSheetId;

		vrInputStampbookModelImpl._setOriginalInputSheetId = false;

		vrInputStampbookModelImpl._originalBookId = vrInputStampbookModelImpl._bookId;

		vrInputStampbookModelImpl._setOriginalBookId = false;

		vrInputStampbookModelImpl._originalStampType = vrInputStampbookModelImpl._stampType;

		vrInputStampbookModelImpl._columnBitmask = 0;
	}

	@Override
	public CacheModel<VRInputStampbook> toCacheModel() {
		VRInputStampbookCacheModel vrInputStampbookCacheModel = new VRInputStampbookCacheModel();

		vrInputStampbookCacheModel.id = getId();

		vrInputStampbookCacheModel.mtCore = getMtCore();

		vrInputStampbookCacheModel.inputSheetId = getInputSheetId();

		vrInputStampbookCacheModel.bookId = getBookId();

		vrInputStampbookCacheModel.vehicleClass = getVehicleClass();

		String vehicleClass = vrInputStampbookCacheModel.vehicleClass;

		if ((vehicleClass != null) && (vehicleClass.length() == 0)) {
			vrInputStampbookCacheModel.vehicleClass = null;
		}

		vrInputStampbookCacheModel.stampType = getStampType();

		String stampType = vrInputStampbookCacheModel.stampType;

		if ((stampType != null) && (stampType.length() == 0)) {
			vrInputStampbookCacheModel.stampType = null;
		}

		vrInputStampbookCacheModel.stampShortNo = getStampShortNo();

		String stampShortNo = vrInputStampbookCacheModel.stampShortNo;

		if ((stampShortNo != null) && (stampShortNo.length() == 0)) {
			vrInputStampbookCacheModel.stampShortNo = null;
		}

		vrInputStampbookCacheModel.serialStartNo = getSerialStartNo();

		vrInputStampbookCacheModel.serialEndNo = getSerialEndNo();

		String serialEndNo = vrInputStampbookCacheModel.serialEndNo;

		if ((serialEndNo != null) && (serialEndNo.length() == 0)) {
			vrInputStampbookCacheModel.serialEndNo = null;
		}

		vrInputStampbookCacheModel.subTotalInDocument = getSubTotalInDocument();

		vrInputStampbookCacheModel.subTotalQuantities = getSubTotalQuantities();

		vrInputStampbookCacheModel.units = getUnits();

		vrInputStampbookCacheModel.unitPrice = getUnitPrice();

		vrInputStampbookCacheModel.totalAmount = getTotalAmount();

		vrInputStampbookCacheModel.totalInUse = getTotalInUse();

		vrInputStampbookCacheModel.totalNotUsed = getTotalNotUsed();

		vrInputStampbookCacheModel.sum1 = getSum1();

		vrInputStampbookCacheModel.sum2 = getSum2();

		vrInputStampbookCacheModel.sum3 = getSum3();

		vrInputStampbookCacheModel.remark = getRemark();

		String remark = vrInputStampbookCacheModel.remark;

		if ((remark != null) && (remark.length() == 0)) {
			vrInputStampbookCacheModel.remark = null;
		}

		Date modifyDate = getModifyDate();

		if (modifyDate != null) {
			vrInputStampbookCacheModel.modifyDate = modifyDate.getTime();
		}
		else {
			vrInputStampbookCacheModel.modifyDate = Long.MIN_VALUE;
		}

		Date syncDate = getSyncDate();

		if (syncDate != null) {
			vrInputStampbookCacheModel.syncDate = syncDate.getTime();
		}
		else {
			vrInputStampbookCacheModel.syncDate = Long.MIN_VALUE;
		}

		return vrInputStampbookCacheModel;
	}

	@Override
	public String toString() {
		StringBundler sb = new StringBundler(45);

		sb.append("{id=");
		sb.append(getId());
		sb.append(", mtCore=");
		sb.append(getMtCore());
		sb.append(", inputSheetId=");
		sb.append(getInputSheetId());
		sb.append(", bookId=");
		sb.append(getBookId());
		sb.append(", vehicleClass=");
		sb.append(getVehicleClass());
		sb.append(", stampType=");
		sb.append(getStampType());
		sb.append(", stampShortNo=");
		sb.append(getStampShortNo());
		sb.append(", serialStartNo=");
		sb.append(getSerialStartNo());
		sb.append(", serialEndNo=");
		sb.append(getSerialEndNo());
		sb.append(", subTotalInDocument=");
		sb.append(getSubTotalInDocument());
		sb.append(", subTotalQuantities=");
		sb.append(getSubTotalQuantities());
		sb.append(", units=");
		sb.append(getUnits());
		sb.append(", unitPrice=");
		sb.append(getUnitPrice());
		sb.append(", totalAmount=");
		sb.append(getTotalAmount());
		sb.append(", totalInUse=");
		sb.append(getTotalInUse());
		sb.append(", totalNotUsed=");
		sb.append(getTotalNotUsed());
		sb.append(", sum1=");
		sb.append(getSum1());
		sb.append(", sum2=");
		sb.append(getSum2());
		sb.append(", sum3=");
		sb.append(getSum3());
		sb.append(", remark=");
		sb.append(getRemark());
		sb.append(", modifyDate=");
		sb.append(getModifyDate());
		sb.append(", syncDate=");
		sb.append(getSyncDate());
		sb.append("}");

		return sb.toString();
	}

	@Override
	public String toXmlString() {
		StringBundler sb = new StringBundler(70);

		sb.append("<model><model-name>");
		sb.append("com.fds.vr.business.model.VRInputStampbook");
		sb.append("</model-name>");

		sb.append(
			"<column><column-name>id</column-name><column-value><![CDATA[");
		sb.append(getId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>mtCore</column-name><column-value><![CDATA[");
		sb.append(getMtCore());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>inputSheetId</column-name><column-value><![CDATA[");
		sb.append(getInputSheetId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>bookId</column-name><column-value><![CDATA[");
		sb.append(getBookId());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>vehicleClass</column-name><column-value><![CDATA[");
		sb.append(getVehicleClass());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>stampType</column-name><column-value><![CDATA[");
		sb.append(getStampType());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>stampShortNo</column-name><column-value><![CDATA[");
		sb.append(getStampShortNo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>serialStartNo</column-name><column-value><![CDATA[");
		sb.append(getSerialStartNo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>serialEndNo</column-name><column-value><![CDATA[");
		sb.append(getSerialEndNo());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>subTotalInDocument</column-name><column-value><![CDATA[");
		sb.append(getSubTotalInDocument());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>subTotalQuantities</column-name><column-value><![CDATA[");
		sb.append(getSubTotalQuantities());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>units</column-name><column-value><![CDATA[");
		sb.append(getUnits());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>unitPrice</column-name><column-value><![CDATA[");
		sb.append(getUnitPrice());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>totalAmount</column-name><column-value><![CDATA[");
		sb.append(getTotalAmount());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>totalInUse</column-name><column-value><![CDATA[");
		sb.append(getTotalInUse());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>totalNotUsed</column-name><column-value><![CDATA[");
		sb.append(getTotalNotUsed());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>sum1</column-name><column-value><![CDATA[");
		sb.append(getSum1());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>sum2</column-name><column-value><![CDATA[");
		sb.append(getSum2());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>sum3</column-name><column-value><![CDATA[");
		sb.append(getSum3());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>remark</column-name><column-value><![CDATA[");
		sb.append(getRemark());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>modifyDate</column-name><column-value><![CDATA[");
		sb.append(getModifyDate());
		sb.append("]]></column-value></column>");
		sb.append(
			"<column><column-name>syncDate</column-name><column-value><![CDATA[");
		sb.append(getSyncDate());
		sb.append("]]></column-value></column>");

		sb.append("</model>");

		return sb.toString();
	}

	private static final ClassLoader _classLoader = VRInputStampbook.class.getClassLoader();
	private static final Class<?>[] _escapedModelInterfaces = new Class[] {
			VRInputStampbook.class
		};
	private long _id;
	private long _mtCore;
	private long _originalMtCore;
	private boolean _setOriginalMtCore;
	private long _inputSheetId;
	private long _originalInputSheetId;
	private boolean _setOriginalInputSheetId;
	private long _bookId;
	private long _originalBookId;
	private boolean _setOriginalBookId;
	private String _vehicleClass;
	private String _stampType;
	private String _originalStampType;
	private String _stampShortNo;
	private long _serialStartNo;
	private String _serialEndNo;
	private long _subTotalInDocument;
	private long _subTotalQuantities;
	private long _units;
	private long _unitPrice;
	private long _totalAmount;
	private long _totalInUse;
	private long _totalNotUsed;
	private long _sum1;
	private long _sum2;
	private long _sum3;
	private String _remark;
	private Date _modifyDate;
	private Date _syncDate;
	private long _columnBitmask;
	private VRInputStampbook _escapedModel;
}