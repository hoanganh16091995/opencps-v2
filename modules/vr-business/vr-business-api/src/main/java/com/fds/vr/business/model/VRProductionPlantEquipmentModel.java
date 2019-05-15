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

package com.fds.vr.business.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the VRProductionPlantEquipment service. Represents a row in the &quot;vr_productionplantequipment&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.fds.vr.business.model.impl.VRProductionPlantEquipmentModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.fds.vr.business.model.impl.VRProductionPlantEquipmentImpl}.
 * </p>
 *
 * @author LamTV
 * @see VRProductionPlantEquipment
 * @see com.fds.vr.business.model.impl.VRProductionPlantEquipmentImpl
 * @see com.fds.vr.business.model.impl.VRProductionPlantEquipmentModelImpl
 * @generated
 */
@ProviderType
public interface VRProductionPlantEquipmentModel extends BaseModel<VRProductionPlantEquipment> {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a vr production plant equipment model instance should use the {@link VRProductionPlantEquipment} interface instead.
	 */

	/**
	 * Returns the primary key of this vr production plant equipment.
	 *
	 * @return the primary key of this vr production plant equipment
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this vr production plant equipment.
	 *
	 * @param primaryKey the primary key of this vr production plant equipment
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the ID of this vr production plant equipment.
	 *
	 * @return the ID of this vr production plant equipment
	 */
	public long getId();

	/**
	 * Sets the ID of this vr production plant equipment.
	 *
	 * @param id the ID of this vr production plant equipment
	 */
	public void setId(long id);

	/**
	 * Returns the mt core of this vr production plant equipment.
	 *
	 * @return the mt core of this vr production plant equipment
	 */
	public long getMtCore();

	/**
	 * Sets the mt core of this vr production plant equipment.
	 *
	 * @param mtCore the mt core of this vr production plant equipment
	 */
	public void setMtCore(long mtCore);

	/**
	 * Returns the product plant ID of this vr production plant equipment.
	 *
	 * @return the product plant ID of this vr production plant equipment
	 */
	public long getProductPlantID();

	/**
	 * Sets the product plant ID of this vr production plant equipment.
	 *
	 * @param productPlantID the product plant ID of this vr production plant equipment
	 */
	public void setProductPlantID(long productPlantID);

	/**
	 * Returns the sequence no of this vr production plant equipment.
	 *
	 * @return the sequence no of this vr production plant equipment
	 */
	public long getSequenceNo();

	/**
	 * Sets the sequence no of this vr production plant equipment.
	 *
	 * @param sequenceNo the sequence no of this vr production plant equipment
	 */
	public void setSequenceNo(long sequenceNo);

	/**
	 * Returns the equipment code of this vr production plant equipment.
	 *
	 * @return the equipment code of this vr production plant equipment
	 */
	@AutoEscape
	public String getEquipmentCode();

	/**
	 * Sets the equipment code of this vr production plant equipment.
	 *
	 * @param equipmentCode the equipment code of this vr production plant equipment
	 */
	public void setEquipmentCode(String equipmentCode);

	/**
	 * Returns the equipment name of this vr production plant equipment.
	 *
	 * @return the equipment name of this vr production plant equipment
	 */
	@AutoEscape
	public String getEquipmentName();

	/**
	 * Sets the equipment name of this vr production plant equipment.
	 *
	 * @param equipmentName the equipment name of this vr production plant equipment
	 */
	public void setEquipmentName(String equipmentName);

	/**
	 * Returns the equipment type of this vr production plant equipment.
	 *
	 * @return the equipment type of this vr production plant equipment
	 */
	@AutoEscape
	public String getEquipmentType();

	/**
	 * Sets the equipment type of this vr production plant equipment.
	 *
	 * @param equipmentType the equipment type of this vr production plant equipment
	 */
	public void setEquipmentType(String equipmentType);

	/**
	 * Returns the trademark of this vr production plant equipment.
	 *
	 * @return the trademark of this vr production plant equipment
	 */
	@AutoEscape
	public String getTrademark();

	/**
	 * Sets the trademark of this vr production plant equipment.
	 *
	 * @param trademark the trademark of this vr production plant equipment
	 */
	public void setTrademark(String trademark);

	/**
	 * Returns the trademark name of this vr production plant equipment.
	 *
	 * @return the trademark name of this vr production plant equipment
	 */
	@AutoEscape
	public String getTrademarkName();

	/**
	 * Sets the trademark name of this vr production plant equipment.
	 *
	 * @param trademarkName the trademark name of this vr production plant equipment
	 */
	public void setTrademarkName(String trademarkName);

	/**
	 * Returns the commercial name of this vr production plant equipment.
	 *
	 * @return the commercial name of this vr production plant equipment
	 */
	@AutoEscape
	public String getCommercialName();

	/**
	 * Sets the commercial name of this vr production plant equipment.
	 *
	 * @param commercialName the commercial name of this vr production plant equipment
	 */
	public void setCommercialName(String commercialName);

	/**
	 * Returns the model code of this vr production plant equipment.
	 *
	 * @return the model code of this vr production plant equipment
	 */
	@AutoEscape
	public String getModelCode();

	/**
	 * Sets the model code of this vr production plant equipment.
	 *
	 * @param modelCode the model code of this vr production plant equipment
	 */
	public void setModelCode(String modelCode);

	/**
	 * Returns the design symbol no of this vr production plant equipment.
	 *
	 * @return the design symbol no of this vr production plant equipment
	 */
	@AutoEscape
	public String getDesignSymbolNo();

	/**
	 * Sets the design symbol no of this vr production plant equipment.
	 *
	 * @param designSymbolNo the design symbol no of this vr production plant equipment
	 */
	public void setDesignSymbolNo(String designSymbolNo);

	/**
	 * Returns the production country code of this vr production plant equipment.
	 *
	 * @return the production country code of this vr production plant equipment
	 */
	@AutoEscape
	public String getProductionCountryCode();

	/**
	 * Sets the production country code of this vr production plant equipment.
	 *
	 * @param productionCountryCode the production country code of this vr production plant equipment
	 */
	public void setProductionCountryCode(String productionCountryCode);

	/**
	 * Returns the equipment status of this vr production plant equipment.
	 *
	 * @return the equipment status of this vr production plant equipment
	 */
	@AutoEscape
	public String getEquipmentStatus();

	/**
	 * Sets the equipment status of this vr production plant equipment.
	 *
	 * @param equipmentStatus the equipment status of this vr production plant equipment
	 */
	public void setEquipmentStatus(String equipmentStatus);

	/**
	 * Returns the expire date of this vr production plant equipment.
	 *
	 * @return the expire date of this vr production plant equipment
	 */
	public Date getExpireDate();

	/**
	 * Sets the expire date of this vr production plant equipment.
	 *
	 * @param expireDate the expire date of this vr production plant equipment
	 */
	public void setExpireDate(Date expireDate);

	/**
	 * Returns the notes of this vr production plant equipment.
	 *
	 * @return the notes of this vr production plant equipment
	 */
	@AutoEscape
	public String getNotes();

	/**
	 * Sets the notes of this vr production plant equipment.
	 *
	 * @param notes the notes of this vr production plant equipment
	 */
	public void setNotes(String notes);

	/**
	 * Returns the modify date of this vr production plant equipment.
	 *
	 * @return the modify date of this vr production plant equipment
	 */
	public Date getModifyDate();

	/**
	 * Sets the modify date of this vr production plant equipment.
	 *
	 * @param modifyDate the modify date of this vr production plant equipment
	 */
	public void setModifyDate(Date modifyDate);

	/**
	 * Returns the sync date of this vr production plant equipment.
	 *
	 * @return the sync date of this vr production plant equipment
	 */
	public Date getSyncDate();

	/**
	 * Sets the sync date of this vr production plant equipment.
	 *
	 * @param syncDate the sync date of this vr production plant equipment
	 */
	public void setSyncDate(Date syncDate);

	@Override
	public boolean isNew();

	@Override
	public void setNew(boolean n);

	@Override
	public boolean isCachedModel();

	@Override
	public void setCachedModel(boolean cachedModel);

	@Override
	public boolean isEscapedModel();

	@Override
	public Serializable getPrimaryKeyObj();

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj);

	@Override
	public ExpandoBridge getExpandoBridge();

	@Override
	public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

	@Override
	public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext);

	@Override
	public Object clone();

	@Override
	public int compareTo(VRProductionPlantEquipment vrProductionPlantEquipment);

	@Override
	public int hashCode();

	@Override
	public CacheModel<VRProductionPlantEquipment> toCacheModel();

	@Override
	public VRProductionPlantEquipment toEscapedModel();

	@Override
	public VRProductionPlantEquipment toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}