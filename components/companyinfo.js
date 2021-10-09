Vue.component('companyinfo', {
	template:
	`<div class="companyInfoBody">
		<div class="companyInfoHeader">
			<div class="companyName">{{data.enterpriseName}}</div>
			<div class="companyInfoCont">{{data.infoStr}}</div>
			<div class="companyInfoImg"><img :src="data.pictureStr|httpStr" /></div>
		</div>
		<div class="companyInfoExplain">
			<div class="companyInfoETitle">
				主要产品
				<span class="companyInfoMore" @click="toTab2">查看全部</span>
			</div>
			<div class="companyInfoEProdBox">
				<div class="companyInfoEProdItem" v-for="(item,index) in productList">
					<img :src="item.pictureStr|httpStr" />
					<div class="companyInfoEProdName">{{item.productName}}</div>
				</div>
			</div>
		</div>
		<div class="companyInfoExplain">
			<div class="companyInfoETitle">联系方式</div>
			<div class="companyInfoEItem">公司名称：{{data.enterpriseName}}</div>
			<div class="companyInfoEItem">联 系 人：{{data.contractStr}}</div>
			<div class="companyInfoEItem">联系电话：{{data.telStr}}</div>
			<div class="companyInfoEItem">电子邮件：{{data.emailStr}}</div>
			<div class="companyInfoEItem">公司网址：{{data.hrefStr}}</div>
			<div class="companyInfoEItem">单位地址：{{data.addressStr}}</div>
		</div>
	</div>`,
	props: {
		data :{
			type:Object,
			default:()=>{}
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			productList:[]
		};
	},
	methods: {
		getProductList(){
			const param = {
				enterpriseId: getUrlParam('id'),
				beginNo:1,
				endNo: 5
			}
			postEnterpriseProductList(param).then(res => {
				if(res.data.data){
					this.productList = res.data.data.success
				}
			})
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toTab2(){
			const id = getUrlParam('id')
			const name = getUrlParam('name')
			const enter = getUrlParam('enter')
			const tab = 1
			location.href = `${getUrl()}?id=${id}&name=${name}&enter=${enter}&tab=${tab}`
		}
	},
    mounted() {
		this.getProductList()
	}
});