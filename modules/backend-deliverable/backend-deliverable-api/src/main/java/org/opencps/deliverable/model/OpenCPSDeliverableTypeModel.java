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

package org.opencps.deliverable.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.GroupedModel;
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.model.StagedAuditedModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the OpenCPSDeliverableType service. Represents a row in the &quot;opencps_deliverabletype&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link org.opencps.deliverable.model.impl.OpenCPSDeliverableTypeModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link org.opencps.deliverable.model.impl.OpenCPSDeliverableTypeImpl}.
 * </p>
 *
 * @author binhth
 * @see OpenCPSDeliverableType
 * @see org.opencps.deliverable.model.impl.OpenCPSDeliverableTypeImpl
 * @see org.opencps.deliverable.model.impl.OpenCPSDeliverableTypeModelImpl
 * @generated
 */
@ProviderType
public interface OpenCPSDeliverableTypeModel extends BaseModel<OpenCPSDeliverableType>,
	GroupedModel, ShardedModel, StagedAuditedModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a open cps deliverable type model instance should use the {@link OpenCPSDeliverableType} interface instead.
	 */

	/**
	 * Returns the primary key of this open cps deliverable type.
	 *
	 * @return the primary key of this open cps deliverable type
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this open cps deliverable type.
	 *
	 * @param primaryKey the primary key of this open cps deliverable type
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the uuid of this open cps deliverable type.
	 *
	 * @return the uuid of this open cps deliverable type
	 */
	@AutoEscape
	@Override
	public String getUuid();

	/**
	 * Sets the uuid of this open cps deliverable type.
	 *
	 * @param uuid the uuid of this open cps deliverable type
	 */
	@Override
	public void setUuid(String uuid);

	/**
	 * Returns the deliverable type ID of this open cps deliverable type.
	 *
	 * @return the deliverable type ID of this open cps deliverable type
	 */
	public long getDeliverableTypeId();

	/**
	 * Sets the deliverable type ID of this open cps deliverable type.
	 *
	 * @param deliverableTypeId the deliverable type ID of this open cps deliverable type
	 */
	public void setDeliverableTypeId(long deliverableTypeId);

	/**
	 * Returns the group ID of this open cps deliverable type.
	 *
	 * @return the group ID of this open cps deliverable type
	 */
	@Override
	public long getGroupId();

	/**
	 * Sets the group ID of this open cps deliverable type.
	 *
	 * @param groupId the group ID of this open cps deliverable type
	 */
	@Override
	public void setGroupId(long groupId);

	/**
	 * Returns the company ID of this open cps deliverable type.
	 *
	 * @return the company ID of this open cps deliverable type
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this open cps deliverable type.
	 *
	 * @param companyId the company ID of this open cps deliverable type
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the user ID of this open cps deliverable type.
	 *
	 * @return the user ID of this open cps deliverable type
	 */
	@Override
	public long getUserId();

	/**
	 * Sets the user ID of this open cps deliverable type.
	 *
	 * @param userId the user ID of this open cps deliverable type
	 */
	@Override
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this open cps deliverable type.
	 *
	 * @return the user uuid of this open cps deliverable type
	 */
	@Override
	public String getUserUuid();

	/**
	 * Sets the user uuid of this open cps deliverable type.
	 *
	 * @param userUuid the user uuid of this open cps deliverable type
	 */
	@Override
	public void setUserUuid(String userUuid);

	/**
	 * Returns the user name of this open cps deliverable type.
	 *
	 * @return the user name of this open cps deliverable type
	 */
	@AutoEscape
	@Override
	public String getUserName();

	/**
	 * Sets the user name of this open cps deliverable type.
	 *
	 * @param userName the user name of this open cps deliverable type
	 */
	@Override
	public void setUserName(String userName);

	/**
	 * Returns the create date of this open cps deliverable type.
	 *
	 * @return the create date of this open cps deliverable type
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this open cps deliverable type.
	 *
	 * @param createDate the create date of this open cps deliverable type
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this open cps deliverable type.
	 *
	 * @return the modified date of this open cps deliverable type
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this open cps deliverable type.
	 *
	 * @param modifiedDate the modified date of this open cps deliverable type
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the type code of this open cps deliverable type.
	 *
	 * @return the type code of this open cps deliverable type
	 */
	@AutoEscape
	public String getTypeCode();

	/**
	 * Sets the type code of this open cps deliverable type.
	 *
	 * @param typeCode the type code of this open cps deliverable type
	 */
	public void setTypeCode(String typeCode);

	/**
	 * Returns the type name of this open cps deliverable type.
	 *
	 * @return the type name of this open cps deliverable type
	 */
	@AutoEscape
	public String getTypeName();

	/**
	 * Sets the type name of this open cps deliverable type.
	 *
	 * @param typeName the type name of this open cps deliverable type
	 */
	public void setTypeName(String typeName);

	/**
	 * Returns the form script file ID of this open cps deliverable type.
	 *
	 * @return the form script file ID of this open cps deliverable type
	 */
	public long getFormScriptFileId();

	/**
	 * Sets the form script file ID of this open cps deliverable type.
	 *
	 * @param formScriptFileId the form script file ID of this open cps deliverable type
	 */
	public void setFormScriptFileId(long formScriptFileId);

	/**
	 * Returns the form report file ID of this open cps deliverable type.
	 *
	 * @return the form report file ID of this open cps deliverable type
	 */
	public long getFormReportFileId();

	/**
	 * Sets the form report file ID of this open cps deliverable type.
	 *
	 * @param formReportFileId the form report file ID of this open cps deliverable type
	 */
	public void setFormReportFileId(long formReportFileId);

	/**
	 * Returns the code pattern of this open cps deliverable type.
	 *
	 * @return the code pattern of this open cps deliverable type
	 */
	@AutoEscape
	public String getCodePattern();

	/**
	 * Sets the code pattern of this open cps deliverable type.
	 *
	 * @param codePattern the code pattern of this open cps deliverable type
	 */
	public void setCodePattern(String codePattern);

	/**
	 * Returns the counter of this open cps deliverable type.
	 *
	 * @return the counter of this open cps deliverable type
	 */
	public long getCounter();

	/**
	 * Sets the counter of this open cps deliverable type.
	 *
	 * @param counter the counter of this open cps deliverable type
	 */
	public void setCounter(long counter);

	/**
	 * Returns the mapping data of this open cps deliverable type.
	 *
	 * @return the mapping data of this open cps deliverable type
	 */
	@AutoEscape
	public String getMappingData();

	/**
	 * Sets the mapping data of this open cps deliverable type.
	 *
	 * @param mappingData the mapping data of this open cps deliverable type
	 */
	public void setMappingData(String mappingData);

	/**
	 * Returns the data config of this open cps deliverable type.
	 *
	 * @return the data config of this open cps deliverable type
	 */
	@AutoEscape
	public String getDataConfig();

	/**
	 * Sets the data config of this open cps deliverable type.
	 *
	 * @param dataConfig the data config of this open cps deliverable type
	 */
	public void setDataConfig(String dataConfig);

	/**
	 * Returns the table config of this open cps deliverable type.
	 *
	 * @return the table config of this open cps deliverable type
	 */
	@AutoEscape
	public String getTableConfig();

	/**
	 * Sets the table config of this open cps deliverable type.
	 *
	 * @param tableConfig the table config of this open cps deliverable type
	 */
	public void setTableConfig(String tableConfig);

	/**
	 * Returns the doc sync of this open cps deliverable type.
	 *
	 * @return the doc sync of this open cps deliverable type
	 */
	public int getDocSync();

	/**
	 * Sets the doc sync of this open cps deliverable type.
	 *
	 * @param docSync the doc sync of this open cps deliverable type
	 */
	public void setDocSync(int docSync);

	/**
	 * Returns the gov agencies of this open cps deliverable type.
	 *
	 * @return the gov agencies of this open cps deliverable type
	 */
	@AutoEscape
	public String getGovAgencies();

	/**
	 * Sets the gov agencies of this open cps deliverable type.
	 *
	 * @param govAgencies the gov agencies of this open cps deliverable type
	 */
	public void setGovAgencies(String govAgencies);

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
	public int compareTo(OpenCPSDeliverableType openCPSDeliverableType);

	@Override
	public int hashCode();

	@Override
	public CacheModel<OpenCPSDeliverableType> toCacheModel();

	@Override
	public OpenCPSDeliverableType toEscapedModel();

	@Override
	public OpenCPSDeliverableType toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}