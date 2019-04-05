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

package com.fds.vr.business.service;

import aQute.bnd.annotation.ProviderType;

import com.liferay.portal.kernel.service.ServiceWrapper;

/**
 * Provides a wrapper for {@link VRCOPProductTypeLocalService}.
 *
 * @author LamTV
 * @see VRCOPProductTypeLocalService
 * @generated
 */
@ProviderType
public class VRCOPProductTypeLocalServiceWrapper
	implements VRCOPProductTypeLocalService,
		ServiceWrapper<VRCOPProductTypeLocalService> {
	public VRCOPProductTypeLocalServiceWrapper(
		VRCOPProductTypeLocalService vrcopProductTypeLocalService) {
		_vrcopProductTypeLocalService = vrcopProductTypeLocalService;
	}

	/**
	* Adds the vrcop product type to the database. Also notifies the appropriate model listeners.
	*
	* @param vrcopProductType the vrcop product type
	* @return the vrcop product type that was added
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType addVRCOPProductType(
		com.fds.vr.business.model.VRCOPProductType vrcopProductType) {
		return _vrcopProductTypeLocalService.addVRCOPProductType(vrcopProductType);
	}

	/**
	* Creates a new vrcop product type with the primary key. Does not add the vrcop product type to the database.
	*
	* @param id the primary key for the new vrcop product type
	* @return the new vrcop product type
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType createVRCOPProductType(
		long id) {
		return _vrcopProductTypeLocalService.createVRCOPProductType(id);
	}

	/**
	* Deletes the vrcop product type from the database. Also notifies the appropriate model listeners.
	*
	* @param vrcopProductType the vrcop product type
	* @return the vrcop product type that was removed
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType deleteVRCOPProductType(
		com.fds.vr.business.model.VRCOPProductType vrcopProductType) {
		return _vrcopProductTypeLocalService.deleteVRCOPProductType(vrcopProductType);
	}

	/**
	* Deletes the vrcop product type with the primary key from the database. Also notifies the appropriate model listeners.
	*
	* @param id the primary key of the vrcop product type
	* @return the vrcop product type that was removed
	* @throws PortalException if a vrcop product type with the primary key could not be found
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType deleteVRCOPProductType(
		long id) throws com.liferay.portal.kernel.exception.PortalException {
		return _vrcopProductTypeLocalService.deleteVRCOPProductType(id);
	}

	@Override
	public com.fds.vr.business.model.VRCOPProductType fetchVRCOPProductType(
		long id) {
		return _vrcopProductTypeLocalService.fetchVRCOPProductType(id);
	}

	/**
	* Returns the vrcop product type with the primary key.
	*
	* @param id the primary key of the vrcop product type
	* @return the vrcop product type
	* @throws PortalException if a vrcop product type with the primary key could not be found
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType getVRCOPProductType(
		long id) throws com.liferay.portal.kernel.exception.PortalException {
		return _vrcopProductTypeLocalService.getVRCOPProductType(id);
	}

	/**
	* Updates the vrcop product type in the database or adds it if it does not yet exist. Also notifies the appropriate model listeners.
	*
	* @param vrcopProductType the vrcop product type
	* @return the vrcop product type that was updated
	*/
	@Override
	public com.fds.vr.business.model.VRCOPProductType updateVRCOPProductType(
		com.fds.vr.business.model.VRCOPProductType vrcopProductType) {
		return _vrcopProductTypeLocalService.updateVRCOPProductType(vrcopProductType);
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.ActionableDynamicQuery getActionableDynamicQuery() {
		return _vrcopProductTypeLocalService.getActionableDynamicQuery();
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery() {
		return _vrcopProductTypeLocalService.dynamicQuery();
	}

	@Override
	public com.liferay.portal.kernel.dao.orm.IndexableActionableDynamicQuery getIndexableActionableDynamicQuery() {
		return _vrcopProductTypeLocalService.getIndexableActionableDynamicQuery();
	}

	/**
	* @throws PortalException
	*/
	@Override
	public com.liferay.portal.kernel.model.PersistedModel deletePersistedModel(
		com.liferay.portal.kernel.model.PersistedModel persistedModel)
		throws com.liferay.portal.kernel.exception.PortalException {
		return _vrcopProductTypeLocalService.deletePersistedModel(persistedModel);
	}

	@Override
	public com.liferay.portal.kernel.model.PersistedModel getPersistedModel(
		java.io.Serializable primaryKeyObj)
		throws com.liferay.portal.kernel.exception.PortalException {
		return _vrcopProductTypeLocalService.getPersistedModel(primaryKeyObj);
	}

	/**
	* Returns the number of vrcop product types.
	*
	* @return the number of vrcop product types
	*/
	@Override
	public int getVRCOPProductTypesCount() {
		return _vrcopProductTypeLocalService.getVRCOPProductTypesCount();
	}

	/**
	* Returns the OSGi service identifier.
	*
	* @return the OSGi service identifier
	*/
	@Override
	public java.lang.String getOSGiServiceIdentifier() {
		return _vrcopProductTypeLocalService.getOSGiServiceIdentifier();
	}

	/**
	* Performs a dynamic query on the database and returns the matching rows.
	*
	* @param dynamicQuery the dynamic query
	* @return the matching rows
	*/
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery) {
		return _vrcopProductTypeLocalService.dynamicQuery(dynamicQuery);
	}

	/**
	* Performs a dynamic query on the database and returns a range of the matching rows.
	*
	* <p>
	* Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.fds.vr.business.model.impl.VRCOPProductTypeModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	* </p>
	*
	* @param dynamicQuery the dynamic query
	* @param start the lower bound of the range of model instances
	* @param end the upper bound of the range of model instances (not inclusive)
	* @return the range of matching rows
	*/
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery, int start,
		int end) {
		return _vrcopProductTypeLocalService.dynamicQuery(dynamicQuery, start,
			end);
	}

	/**
	* Performs a dynamic query on the database and returns an ordered range of the matching rows.
	*
	* <p>
	* Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.fds.vr.business.model.impl.VRCOPProductTypeModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	* </p>
	*
	* @param dynamicQuery the dynamic query
	* @param start the lower bound of the range of model instances
	* @param end the upper bound of the range of model instances (not inclusive)
	* @param orderByComparator the comparator to order the results by (optionally <code>null</code>)
	* @return the ordered range of matching rows
	*/
	@Override
	public <T> java.util.List<T> dynamicQuery(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery, int start,
		int end,
		com.liferay.portal.kernel.util.OrderByComparator<T> orderByComparator) {
		return _vrcopProductTypeLocalService.dynamicQuery(dynamicQuery, start,
			end, orderByComparator);
	}

	/**
	* Returns a range of all the vrcop product types.
	*
	* <p>
	* Useful when paginating results. Returns a maximum of <code>end - start</code> instances. <code>start</code> and <code>end</code> are not primary keys, they are indexes in the result set. Thus, <code>0</code> refers to the first result in the set. Setting both <code>start</code> and <code>end</code> to {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS} will return the full result set. If <code>orderByComparator</code> is specified, then the query will include the given ORDER BY logic. If <code>orderByComparator</code> is absent and pagination is required (<code>start</code> and <code>end</code> are not {@link com.liferay.portal.kernel.dao.orm.QueryUtil#ALL_POS}), then the query will include the default ORDER BY logic from {@link com.fds.vr.business.model.impl.VRCOPProductTypeModelImpl}. If both <code>orderByComparator</code> and pagination are absent, for performance reasons, the query will not have an ORDER BY clause and the returned result set will be sorted on by the primary key in an ascending order.
	* </p>
	*
	* @param start the lower bound of the range of vrcop product types
	* @param end the upper bound of the range of vrcop product types (not inclusive)
	* @return the range of vrcop product types
	*/
	@Override
	public java.util.List<com.fds.vr.business.model.VRCOPProductType> getVRCOPProductTypes(
		int start, int end) {
		return _vrcopProductTypeLocalService.getVRCOPProductTypes(start, end);
	}

	/**
	* Returns the number of rows matching the dynamic query.
	*
	* @param dynamicQuery the dynamic query
	* @return the number of rows matching the dynamic query
	*/
	@Override
	public long dynamicQueryCount(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery) {
		return _vrcopProductTypeLocalService.dynamicQueryCount(dynamicQuery);
	}

	/**
	* Returns the number of rows matching the dynamic query.
	*
	* @param dynamicQuery the dynamic query
	* @param projection the projection to apply to the query
	* @return the number of rows matching the dynamic query
	*/
	@Override
	public long dynamicQueryCount(
		com.liferay.portal.kernel.dao.orm.DynamicQuery dynamicQuery,
		com.liferay.portal.kernel.dao.orm.Projection projection) {
		return _vrcopProductTypeLocalService.dynamicQueryCount(dynamicQuery,
			projection);
	}

	@Override
	public VRCOPProductTypeLocalService getWrappedService() {
		return _vrcopProductTypeLocalService;
	}

	@Override
	public void setWrappedService(
		VRCOPProductTypeLocalService vrcopProductTypeLocalService) {
		_vrcopProductTypeLocalService = vrcopProductTypeLocalService;
	}

	private VRCOPProductTypeLocalService _vrcopProductTypeLocalService;
}