	<v-slide-x-transition>

		<div class="row-header flex-break" v-if="!detailPage">

			<div class="background-triangle-big"> <v-icon flat fab color="white" class="setting_action_all">settings</v-icon> {{hoso_title_table}}  <i style="text-transform: none;">(Tổng số: {{totalDSHS}} hồ sơ)</i> </div>

<#-- 			<div class="layout row wrap header_tools w-100-xs">

				<div class="flex w-100-xs" jx-bind="keywordsSearchDanhSachHoSo"></div>

				<v-btn v-if="navigationFilterview" v-on:click.native="navigationFilterview = !navigationFilterview" flat icon class="mr-4 hidden-sm-and-down"><v-icon>fullscreen</v-icon></v-btn>

				<v-btn v-if="!navigationFilterview" v-on:click.native="navigationFilterview = !navigationFilterview" flat icon class="mr-4 hidden-sm-and-down"><v-icon>fullscreen_exit</v-icon></v-btn>

			</div> -->

		</div>

	</v-slide-x-transition>

	<v-slide-x-transition>

		<div class="layout wrap" jx-bind="danhSachHoSoTable" v-if="!detailPage && !loadingDanhSachHoSoTable"></div>
		<div v-else-if="loadingDanhSachHoSoTable" class="text-xs-center" style="width: 100%; height: 500px;">
			<v-progress-circular indeterminate v-bind:size="100" color="purple"></v-progress-circular><br>
			<span>Đang tải dữ liệu</span>
		</div>
	</v-slide-x-transition>

