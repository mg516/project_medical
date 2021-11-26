Vue.component('recomproduct', {
	template:
	`<div class="recomProductBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">产品推荐</div>
		</div>
		<div class="recomProductBox">
			<div class="recomProductItem" v-for="(item,index) in recomProductList" :key="index" @click="toProduceDetail(item)">
				<div class="recomProductHead">
					<img :src="item.pictureStr | httpStr" />
				</div>
				<div class="recomProductInfo">
					<div class="recomProductName" :title="item.productName">{{item.productName}}</div>
					<div class="recomProductRemark" :title="item.catalogName">{{item.catalogName}}</div>
				</div>
			</div>
		</div>
		<div class="readMore" @click="toMore">查看更多</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			recomProductList:[
				// {name:'999感冒灵999感冒灵999感冒灵',remark:'这里是药品介绍',img:'../img/index/y1.png'},
				// {name:'999感冒灵',remark:'这里是药品介绍这里是药品介绍这里是药品介绍',img:'../img/index/y2.png'},
				// {name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y3.png'},
				// {name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y4.png'},
				// {name:'999感冒灵',remark:'这里是药品介绍',img:'../img/index/y5.png'},
			]
		};
	},
	methods: {
		// 获取产品列表
		getProduceList(){
			const param = {
				isRecommend: '0',
				beginNo:1,
				endNo: 10
			}
			postProductList(param).then(res => {
				this.recomProductList = res.data.data && res.data.data.success
			})
		},
		toMore(){
			location.href = `./medicineHouse.html`
		},
		toProduceDetail(data){
			location.href = `./medicineDetail.html?id=${data.productId}&name=${data.productName}&catalogName=${data.catalogName}`
		}
	},
    mounted() {
		this.getProduceList()
	}
});