Vue.component('companytroduce', {
	template:
	`<div class="companytroduceBody">
		<div class="companytroduceHeader">
			<div class="companyHLabel">{{drugdata.name}}</div>
			<div class="companyLabelBox">
				<div class="companyLabelItem" v-for="(lItem,lIndex) in drugdata.label" :key="lIndex">
					<div class="companyLabelText">{{lItem}}</div>
					<div class="companyLabelLine" v-if="drugdata.label.length - 1 > lIndex">|</div>
				</div>
				<div class="companyLabelMore" @click="toCompanyTypeDetail(drugdata.name)">更多>></div>
			</div>
		</div>
		<div class="companytroduceContent">
			<div class="companyAddress" v-show="false">
				<div class="companyAddressItem" v-for="(aItem,aIndex) in drugdata.addressList" :key="aIndex">
					<div class="companyAddressItemText">{{aItem}}</div>
					<div class="companyAddressItemLine" v-if="drugdata.addressList.length - 1 > aIndex">|</div>
				</div>
				<div class="companyAddressMore">更多>></div>
			</div>
			<template v-if="drugdata.companyList && drugdata.companyList.length>0">
				<div class="companyData">
					<div class="companyDataItem" v-for="(dnItem,dnIndex) in drugdata.companyList" :key="dnIndex" @click="tocompanyDetail(dnItem)">
						<span class="companyDataName">{{dnItem.enterpriseName}}</span>
						<span class="companyDataContent" v-if="false">主要产品：{{dnItem.catalogName}}</span>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="noData">暂无相关企业</div>
			</template>
		</div>
	</div>`,
	props: {
		drugdata:{
			type: Object,
			default: () => {
				return {
					showDrug: [],
					companyList: []
				}
			}
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		toCompanyTypeDetail(name){
			location.href = `./companyTypeDetail.html?catalogName=${name}`
		},
		tocompanyDetail(data){
			location.href = `./companyDetail.html?id=${data.enterpriseId}&name=${data.enterpriseName}&catalogName=${this.drugdata.name}`
		}
	},
    mounted() {

	}
});