
<#include "init.ftl">

<input type="hidden" id="employeeTitle" name="employeeTitle" value="${(employee.title)!}">
<input type="hidden" id="employeeFullName" name="employeeFullName" value="${(employee.fullName)!}">

<div class="application theme--light">
  	<object id="plugin0" type="application/x-cryptolib05plugin" width="0" height="0"></object>
	<div id="dossierViewJX" style="width: 100%;"> 
    </div>	
</div>

<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function (event) {
		var stateWindow = "${(stateWindow)!}";
		var dossierId = '${(dossierId)!}';
		var dossierPartNo = "${(dossierPartNo)!}";
		var emailAddress = '${(user.emailAddress)!}';
		var agencies = '${(agencies)!}';
		var isAdminUser = '${(isAdminUser)!}';
		var work = '${(work)!}';

		console.log('isAdminUser++++++++++', isAdminUser);
		
		funLoadVue(stateWindow, dossierId, dossierPartNo, emailAddress, agencies, isAdminUser, work);
	});
	history.pushState(null, document.title, location.href);
	window.addEventListener('popstate', function (event) {
		history.pushState(null, document.title, location.href);
	});
</script>

<style>
.datatable__actions {
  float: left !important;
}

#tableThongKe>table>tbody>tr>td:hover {
    background-color: #71cc2d;
}

#tableThongKe>table>thead>tr>th.column.text-xs-center {
    background-color: #f3ecec;
}

i.material-icons.icon.input-group__prepend-icon {
    padding-top: 15px;
}

.list__tile__action.list__tile__action--select-multi {
    float: left;
    margin-top: -3px;
}
div.multiselect_maxheight>div.input-group__input {
	max-height: 50px;
}

.tabs:not(.tabs--grow):not(.tabs--mobile) .tabs__item {
    padding: 0px 10px !important;
}

</style>
