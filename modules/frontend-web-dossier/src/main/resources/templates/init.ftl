<#if (Request)??>
	<#assign aui = PortletJspTagLibs["/META-INF/liferay-aui.tld"] />
	<#assign liferay_portlet = PortletJspTagLibs["/META-INF/liferay-portlet-ext.tld"] />
	<#assign liferay_security = PortletJspTagLibs["/META-INF/liferay-security.tld"] />
	<#assign liferay_theme = PortletJspTagLibs["/META-INF/liferay-theme.tld"] />
	<#assign liferay_ui = PortletJspTagLibs["/META-INF/liferay-ui.tld"] />
	<#assign liferay_util = PortletJspTagLibs["/META-INF/liferay-util.tld"] />
	<#assign portlet = PortletJspTagLibs["/META-INF/liferay-portlet.tld"] />
	
	<@liferay_theme["defineObjects"] />
	
	<@portlet["defineObjects"] />

	<#assign portletNamespace = themeDisplay.getPortletDisplay().getNamespace() />

	<#assign groupId = themeDisplay.getScopeGroupId() />
	<#assign userId = themeDisplay.getUserId() />
	<#assign user = themeDisplay.getUser() />
	<#assign currentURL = themeDisplay.getURLCurrent() />
	<#assign request = themeDisplay.getRequest() />
	<#assign portalURL = (themeDisplay.getPortalURL())!>

	<#assign dossierId = (Request.dossierId)!>
	<#assign dossier = (Request.dossier)!>
	<#assign dossierPartNo = (Request.dossierPartNo)!>
	<#assign stateWindow = (Request.stateWindow)!>
	<#assign employee = (Request.employee)!>
	<#assign agencies = (Request.agencies)!>	
	<#assign work = (Request.work)!>
	<#assign isAdminUser = (Request.isAdminUser)!>
	
	<#assign RequestParameters = (Request.RequestParameters)!>
	
</#if>
<!-- <script src="/combo?browserId=other&amp;minifierType=&amp;themeId=opencpsvue_WAR_opencpsvuetheme&amp;languageId=en_US&amp;b=7002&amp;frontend_web_dossier_portlet_FrontendWebDossierPortlet:%2Fjs%2FFileSaver.js&amp;t=1547588712000" type="text/javascript"></script> -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/TableExport/5.2.0/js/tableexport.js' type="text/javascript"></script>
<script>
	define._amd = define.amd;
	define.amd = false;
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/printThis/1.12.3/printThis.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script>
	define.amd = define._amd;
</script>

<#include "layout/navigation.ftl">

<#include "layout/main_layout.ftl">

<#include "details/thong_tin_doanh_nghiep_table_design.ftl">

<#include "details/tra_cuu_hoso_table_design.ftl">

<#include "details/danh_sach_hoso_table_design.ftl">

<#include "details/document_in_list_design.ftl">

<#include "details/document_out_list_design.ftl">

<#include "details/history_processing_table_design.ftl">

<#include "details/popup_dossier_file.ftl">

<#include "details/popup_print_tracuu.ftl">

<#include "details/danh_sach_giay_phep_van_tai_quoc_te.ftl">

<#include "details/danh_sach_giay_phep_lien_van.ftl">

<#include "details/danh_sach_chap_thuan_khai_thac_tuyen_hanh_khach.ftl">

<#include "layout/thong_tin_xe.ftl">