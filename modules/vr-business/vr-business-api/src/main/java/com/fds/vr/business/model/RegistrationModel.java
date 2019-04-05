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
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.model.StagedModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the Registration service. Represents a row in the &quot;opencps_registration&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link com.fds.vr.business.model.impl.RegistrationModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link com.fds.vr.business.model.impl.RegistrationImpl}.
 * </p>
 *
 * @author LamTV
 * @see Registration
 * @see com.fds.vr.business.model.impl.RegistrationImpl
 * @see com.fds.vr.business.model.impl.RegistrationModelImpl
 * @generated
 */
@ProviderType
public interface RegistrationModel extends BaseModel<Registration>, ShardedModel,
	StagedModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a registration model instance should use the {@link Registration} interface instead.
	 */

	/**
	 * Returns the primary key of this registration.
	 *
	 * @return the primary key of this registration
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this registration.
	 *
	 * @param primaryKey the primary key of this registration
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the uuid of this registration.
	 *
	 * @return the uuid of this registration
	 */
	@AutoEscape
	@Override
	public String getUuid();

	/**
	 * Sets the uuid of this registration.
	 *
	 * @param uuid the uuid of this registration
	 */
	@Override
	public void setUuid(String uuid);

	/**
	 * Returns the registration ID of this registration.
	 *
	 * @return the registration ID of this registration
	 */
	public long getRegistrationId();

	/**
	 * Sets the registration ID of this registration.
	 *
	 * @param registrationId the registration ID of this registration
	 */
	public void setRegistrationId(long registrationId);

	/**
	 * Returns the company ID of this registration.
	 *
	 * @return the company ID of this registration
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this registration.
	 *
	 * @param companyId the company ID of this registration
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the group ID of this registration.
	 *
	 * @return the group ID of this registration
	 */
	public long getGroupId();

	/**
	 * Sets the group ID of this registration.
	 *
	 * @param groupId the group ID of this registration
	 */
	public void setGroupId(long groupId);

	/**
	 * Returns the user ID of this registration.
	 *
	 * @return the user ID of this registration
	 */
	public long getUserId();

	/**
	 * Sets the user ID of this registration.
	 *
	 * @param userId the user ID of this registration
	 */
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this registration.
	 *
	 * @return the user uuid of this registration
	 */
	public String getUserUuid();

	/**
	 * Sets the user uuid of this registration.
	 *
	 * @param userUuid the user uuid of this registration
	 */
	public void setUserUuid(String userUuid);

	/**
	 * Returns the create date of this registration.
	 *
	 * @return the create date of this registration
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this registration.
	 *
	 * @param createDate the create date of this registration
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this registration.
	 *
	 * @return the modified date of this registration
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this registration.
	 *
	 * @param modifiedDate the modified date of this registration
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the applicant name of this registration.
	 *
	 * @return the applicant name of this registration
	 */
	@AutoEscape
	public String getApplicantName();

	/**
	 * Sets the applicant name of this registration.
	 *
	 * @param applicantName the applicant name of this registration
	 */
	public void setApplicantName(String applicantName);

	/**
	 * Returns the applicant ID type of this registration.
	 *
	 * @return the applicant ID type of this registration
	 */
	@AutoEscape
	public String getApplicantIdType();

	/**
	 * Sets the applicant ID type of this registration.
	 *
	 * @param applicantIdType the applicant ID type of this registration
	 */
	public void setApplicantIdType(String applicantIdType);

	/**
	 * Returns the applicant ID no of this registration.
	 *
	 * @return the applicant ID no of this registration
	 */
	@AutoEscape
	public String getApplicantIdNo();

	/**
	 * Sets the applicant ID no of this registration.
	 *
	 * @param applicantIdNo the applicant ID no of this registration
	 */
	public void setApplicantIdNo(String applicantIdNo);

	/**
	 * Returns the applicant ID date of this registration.
	 *
	 * @return the applicant ID date of this registration
	 */
	public Date getApplicantIdDate();

	/**
	 * Sets the applicant ID date of this registration.
	 *
	 * @param applicantIdDate the applicant ID date of this registration
	 */
	public void setApplicantIdDate(Date applicantIdDate);

	/**
	 * Returns the address of this registration.
	 *
	 * @return the address of this registration
	 */
	@AutoEscape
	public String getAddress();

	/**
	 * Sets the address of this registration.
	 *
	 * @param address the address of this registration
	 */
	public void setAddress(String address);

	/**
	 * Returns the city code of this registration.
	 *
	 * @return the city code of this registration
	 */
	@AutoEscape
	public String getCityCode();

	/**
	 * Sets the city code of this registration.
	 *
	 * @param cityCode the city code of this registration
	 */
	public void setCityCode(String cityCode);

	/**
	 * Returns the city name of this registration.
	 *
	 * @return the city name of this registration
	 */
	@AutoEscape
	public String getCityName();

	/**
	 * Sets the city name of this registration.
	 *
	 * @param cityName the city name of this registration
	 */
	public void setCityName(String cityName);

	/**
	 * Returns the district code of this registration.
	 *
	 * @return the district code of this registration
	 */
	@AutoEscape
	public String getDistrictCode();

	/**
	 * Sets the district code of this registration.
	 *
	 * @param districtCode the district code of this registration
	 */
	public void setDistrictCode(String districtCode);

	/**
	 * Returns the district name of this registration.
	 *
	 * @return the district name of this registration
	 */
	@AutoEscape
	public String getDistrictName();

	/**
	 * Sets the district name of this registration.
	 *
	 * @param districtName the district name of this registration
	 */
	public void setDistrictName(String districtName);

	/**
	 * Returns the ward code of this registration.
	 *
	 * @return the ward code of this registration
	 */
	@AutoEscape
	public String getWardCode();

	/**
	 * Sets the ward code of this registration.
	 *
	 * @param wardCode the ward code of this registration
	 */
	public void setWardCode(String wardCode);

	/**
	 * Returns the ward name of this registration.
	 *
	 * @return the ward name of this registration
	 */
	@AutoEscape
	public String getWardName();

	/**
	 * Sets the ward name of this registration.
	 *
	 * @param wardName the ward name of this registration
	 */
	public void setWardName(String wardName);

	/**
	 * Returns the contact name of this registration.
	 *
	 * @return the contact name of this registration
	 */
	@AutoEscape
	public String getContactName();

	/**
	 * Sets the contact name of this registration.
	 *
	 * @param contactName the contact name of this registration
	 */
	public void setContactName(String contactName);

	/**
	 * Returns the contact tel no of this registration.
	 *
	 * @return the contact tel no of this registration
	 */
	@AutoEscape
	public String getContactTelNo();

	/**
	 * Sets the contact tel no of this registration.
	 *
	 * @param contactTelNo the contact tel no of this registration
	 */
	public void setContactTelNo(String contactTelNo);

	/**
	 * Returns the contact email of this registration.
	 *
	 * @return the contact email of this registration
	 */
	@AutoEscape
	public String getContactEmail();

	/**
	 * Sets the contact email of this registration.
	 *
	 * @param contactEmail the contact email of this registration
	 */
	public void setContactEmail(String contactEmail);

	/**
	 * Returns the gov agency code of this registration.
	 *
	 * @return the gov agency code of this registration
	 */
	@AutoEscape
	public String getGovAgencyCode();

	/**
	 * Sets the gov agency code of this registration.
	 *
	 * @param govAgencyCode the gov agency code of this registration
	 */
	public void setGovAgencyCode(String govAgencyCode);

	/**
	 * Returns the gov agency name of this registration.
	 *
	 * @return the gov agency name of this registration
	 */
	@AutoEscape
	public String getGovAgencyName();

	/**
	 * Sets the gov agency name of this registration.
	 *
	 * @param govAgencyName the gov agency name of this registration
	 */
	public void setGovAgencyName(String govAgencyName);

	/**
	 * Returns the registration state of this registration.
	 *
	 * @return the registration state of this registration
	 */
	public int getRegistrationState();

	/**
	 * Sets the registration state of this registration.
	 *
	 * @param registrationState the registration state of this registration
	 */
	public void setRegistrationState(int registrationState);

	/**
	 * Returns the registration class of this registration.
	 *
	 * @return the registration class of this registration
	 */
	@AutoEscape
	public String getRegistrationClass();

	/**
	 * Sets the registration class of this registration.
	 *
	 * @param registrationClass the registration class of this registration
	 */
	public void setRegistrationClass(String registrationClass);

	/**
	 * Returns the submitting of this registration.
	 *
	 * @return the submitting of this registration
	 */
	public boolean getSubmitting();

	/**
	 * Returns <code>true</code> if this registration is submitting.
	 *
	 * @return <code>true</code> if this registration is submitting; <code>false</code> otherwise
	 */
	public boolean isSubmitting();

	/**
	 * Sets whether this registration is submitting.
	 *
	 * @param submitting the submitting of this registration
	 */
	public void setSubmitting(boolean submitting);

	/**
	 * Returns the representative enterprise of this registration.
	 *
	 * @return the representative enterprise of this registration
	 */
	@AutoEscape
	public String getRepresentativeEnterprise();

	/**
	 * Sets the representative enterprise of this registration.
	 *
	 * @param representativeEnterprise the representative enterprise of this registration
	 */
	public void setRepresentativeEnterprise(String representativeEnterprise);

	/**
	 * Returns the remarks of this registration.
	 *
	 * @return the remarks of this registration
	 */
	@AutoEscape
	public String getRemarks();

	/**
	 * Sets the remarks of this registration.
	 *
	 * @param remarks the remarks of this registration
	 */
	public void setRemarks(String remarks);

	/**
	 * Returns the markasdeleted of this registration.
	 *
	 * @return the markasdeleted of this registration
	 */
	public int getMarkasdeleted();

	/**
	 * Sets the markasdeleted of this registration.
	 *
	 * @param markasdeleted the markasdeleted of this registration
	 */
	public void setMarkasdeleted(int markasdeleted);

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
	public int compareTo(Registration registration);

	@Override
	public int hashCode();

	@Override
	public CacheModel<Registration> toCacheModel();

	@Override
	public Registration toEscapedModel();

	@Override
	public Registration toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}