Vue.component('companylist', {
	template:
	`<div class="companylistBody">
		<div class="companylistTital">企业列表</div>
		<div class="companylistBox">
			<div class="companyItem" v-for="(item,index) in list" :key="index">
				<div class="companyImg">
					<img :src="item.pictureStr|httpStr" />
				</div>
				<div class="companyInfo">
					<div class="companyName" :title="item.enterpriseName">
						<div class="companyNameText" :title="item.enterpriseName" @click="tocompanyDetail(item)">{{item.enterpriseName}}</div>
						<div class="companyAskBar">询问</div>
					</div>
					<div class="companyMsg">{{item.addressStr}}</div>
					<div class="companyProduct" @click="tocompanyDetail(item)">查看该公司的产品列表</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		list:{
			type:Array,
			default:()=>[]
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			companyList:[
				{id:'1',name:'地奥集团成都药业股份有限公司',img:'../img/index/hh1.png',content:'东信医药集团成立于1998年，是一家以医药产业为支柱，集科、工、贸于一体，从事研发、生产、流通、进',labels:['招商区域：全国']},
				{id:'2',name:'地奥集团成都药业股份有限公司',img:'../img/index/hh1.png',content:'东信医药集团成立于1998年，是一家以医药产业为支柱，集科、工、贸于一体，从事研发、生产、流通、进',labels:['招商区域：全国','招商区域：全国']},
				{id:'3',name:'地奥集团成都药业股份有限公司',img:'../img/index/hh1.png',content:'东信医药集团成立于1998年，是一家以医药产业为支柱，集科、工、贸于一体，从事研发、生产、流通、进',labels:[]},
				{id:'4',name:'地奥集团成都药业股份有限公司',img:'../img/index/hh1.png',content:'东信医药集团成立于1998年，是一家以医药产业为支柱，集科、工、贸于一体，从事研发、生产、流通、进',labels:[]},
				{id:'5',name:'地奥集团成都药业股份有限公司',img:'../img/index/hh1.png',content:'东信医药集团成立于1998年，是一家以医药产业为支柱，集科、工、贸于一体，从事研发、生产、流通、进',labels:[]},
			],
			activeIndex: 0,
		};
	},
	methods: {
		checkAddress(index) {
			this.activeIndex = index
		},
		tocompanyDetail(data){
			location.href = `./companyDetail.html?id=${data.enterpriseId}&name=${data.enterpriseName}&catalogName=${decodeURI(getUrlParam('catalogName'))}`
		}
	},
    mounted() {

	}
});