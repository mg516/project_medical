Vue.component('companymedicinelist', {
	template:
	`<div class="companymedicinelistBody">
		<div class="companymedicinelistBox">
			<div class="companymeItem" v-for="(item,index) in medicinelist" :key="index">
				<div class="companymeImg">
					<img :src="item.pictureStr|httpStr" />
				</div>
				<div class="companymeInfo">
					<div class="companymeName" :title="item.name">
						<div class="companymeNameText" :title="item.productName" @click="toMedicineDetail(item)">{{item.productName}}</div>
						<div class="companymeAskBar">询问</div>
					</div>
					<div class="companymeMsg">
						<div class="companymemItem">批准文号：{{item.docNo}}</div>
						<div class="companymemItem">主要规格：{{item.type}}</div>
					</div>
					<div class="companymeCompany">
						<div class="companymeCompanyName">产品相关：</div>
						<div class="companymeLabelItem" v-for="(labelItem,labelIndex) in item.labels" :key="labelIndex">{{labelItem}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data :{
			type:Object,
			default:()=>{}
		}
	},
	data() {
		return {
			medicinelist:[
				{id:'1',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:['招商区域：全国']},
				{id:'2',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:['招商区域：全国','招商区域：全国']},
				{id:'3',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
				{id:'4',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
				{id:'5',name:'复方醋酸地塞米',img:'../img/index/hh1.png',docNo:'国药准字H51022634',type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',labels:[]},
			],
			activeIndex: 0,
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		checkAddress(index) {
			this.activeIndex = index
		},
		toMedicineDetail(data){
			location.href = './medicineDetail.html'
		},
		getList(){
			const param = {
				enterpriseId: getUrlParam('id'),
				beginNo:1,
				endNo: 10
			}
			postEnterpriseProductList(param).then(res => {
				if(res.data.data){
					this.medicinelist = res.data.data.success
				}
			})
		}
	},
    mounted() {
		this.getList()
	}
});