Vue.component('companyside', {
	template:
	`<div class="companysideBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="companysideBox">
			<div class="companysideItem">所在地区：中国/浙江</div>
			<div class="companysideItem">所属行业：药品</div>
			<div class="companysideItem">公司类型：生产企业</div>
			<div class="companysideItem">联系地址：浙江省宁波市北仑区戚家山街道金鸡路102巷16号</div>
			<div class="companysideItem">邮政编码：</div>
			<div class="companysideItem">联 系 人：蒋部长</div>
			<div class="companysideItem">联系电话：0574-86221824</div>
			<div class="companysideItem">联系传真：</div>
			<div class="companysideItem">手　　机：15010988867</div>
			<div class="companysideItem">电子邮件：15010988867@163.com</div>
		</div>
		<div class="companysideZXBar">咨询</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '地奥集团'
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