Vue.component('newdrugside', {
	template:
	`<div class="newdrugsideBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="recomProductBox">
			<div class="recomProductItem" v-for="(item,index) in drugList" :key="index" @click="toDrugDetail(item)">
				<div class="recomProductHead">
					<img :src="item.contextImg | imgStr" />
				</div>
				<div class="recomProductInfo">
					<div class="recomProductName" :title="item.titileStr">{{item.titileStr}}</div>
					<div class="recomProductRemark" :title="item.remark">{{item.remark}}</div>
				</div>
			</div>
		</div>
		<div class="readMore" @click="toMore">查看更多</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '新药发布'
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			drugType: [],
			drugList: []
		};
	},
	methods: {
		toMore(){
			location.href = `./newMedicineHouse.html`
		},
		toDrugDetail(data) {
			location.href = `./newMedicineHouseDetail.html?titleId=${data.titleId}`
		},
		getDrugDetail(){
			let drugList = []
			this.drugType.forEach(async item => {
				const param= {
					catalogName: item.catalogName
				}
				const res = await postTitleListByCatalogId(param)
				if(res.data.data){
					drugList = drugList.concat(res.data.data.slice(0,10-drugList.length))
				}
				this.drugList = drugList
			});
		},
		getDrugType(){
			postModelListByName('新药发布').then(res => {
				this.drugType = res.data.data
				this.getDrugDetail()
			})
		}
	},
	mounted() {
		this.getDrugType()
	}
});