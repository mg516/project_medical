Vue.component('companyside', {
	template:
	`<div class="companysideBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{data.enterpriseName}}</div>
		</div>
		<div class="companysideBox">
			<div class="companysideItem">所在地区：{{data.provinceStr}}/{{data.cityStr}}</div>
			<div class="companysideItem" v-if="false">所属行业：药品</div>
			<div class="companysideItem" v-if="false">公司类型：生产企业</div>
			<div class="companysideItem">联系地址：{{data.addressStr}}</div>
			<div class="companysideItem" v-if="false">邮政编码：</div>
			<div class="companysideItem">联 系 人：{{data.contractStr}}</div>
			<div class="companysideItem">联系电话：{{data.telStr}}</div>
			<div class="companysideItem" v-if="false">联系传真：</div>
			<div class="companysideItem">手　　机：{{data.mobileStr}}</div>
			<div class="companysideItem">电子邮件：{{data.emailStr}}</div>
		</div>
		<div class="companysideZXBar" v-if="false">咨询</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '地奥集团'
		},
		data :{
			type:Object,
			default:()=>{}
		}
	},
	data() {
		return {
			recomProductList:[
				{name:'999感冒灵999感冒灵999感冒灵',remark:'这里是药品介绍',img:'../img/index/y1.png'},
				{name:'999感冒灵',remark:'这里是药品介绍这里是药品介绍这里是药品介绍',img:'../img/index/y2.png'},
				{name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y3.png'},
				{name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y4.png'},
				{name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y5.png'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted() {

	}
});