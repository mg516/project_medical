Vue.component('newdrugside', {
	template:
	`<div class="newdrugsideBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="recomProductBox">
			<div class="recomProductItem" v-for="(item,index) in recomProductList" :key="index">
				<div class="recomProductHead">
					<img :src="item.img" />
				</div>
				<div class="recomProductInfo">
					<div class="recomProductName" :title="item.name">{{item.name}}</div>
					<div class="recomProductRemark" :title="item.remark">{{item.remark}}</div>
				</div>
			</div>
		</div>
		<div class="readMore">查看更多</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '新药发布'
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