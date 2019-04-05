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

package com.fds.vr.business.service.persistence;

import aQute.bnd.annotation.ProviderType;

/**
 * @author LamTV
 * @generated
 */
@ProviderType
public interface DeliverableFinder {
	public java.util.List<com.fds.vr.business.model.Deliverable> findDeliverableByState(
		java.lang.String strDeliverableCode, java.lang.String state);

	public java.util.List<com.fds.vr.business.model.Deliverable> findDeliverableByModifiedDate(
		java.lang.String syncDate, java.lang.String deliverableType,
		long deliverableState);

	public com.fds.vr.business.model.DossierFile findFileTemplateNo(long id,
		java.lang.String fileTemplateNo);

	public java.util.List<com.fds.vr.business.model.Deliverable> findDeliverableByDateAndState(
		java.lang.String syncDate, long deliverableState);
}