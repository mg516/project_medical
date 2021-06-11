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
				<div class="companyInfoEProdItem" v-for="(item,index) in data.prod">
					<img :src="item.img" />
					<div class="companyInfoEProdName">{{item.name}}</div>
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
			companyInfo:{
				name:'地奥集团成都药业股份有限公司',
				img:'../img/index/h1.png',
				msg:'血清尿酸（SUA）与心血管疾病风险之间的关联已明确。但是，SUA水平对静脉血栓栓塞（VTE）复发风险的影响尚未明确。近日，血栓和凝血疾病权威杂志Journal of Thrombosis and Haemostasis上发表了一篇研究文章，该研究旨在调查SUA水平与VTE复发风险之间的关联。血清尿酸（SUA）与心血管疾病风险之间的关联已明确。但是，SUA水平对静脉血栓栓塞（VTE）复发风险的影响尚未明确。近日，血栓和凝血疾病权威杂志Journal of Thrombosis and Haemostasis上发表了一篇研究文章，该研究旨在调查SUA水平与VTE复发风险之间的关联。',
				proRelate:['招商信息','供应信息','批准信息','价格信息'],
				prod: [
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
					{img:'../img/index/h1.png',name:'复方醋酸地塞米'},
				],

			}
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toTab2(){
			location.href = `${getUrl()}?tab=1`
		}
	},
    mounted() {

	}
});