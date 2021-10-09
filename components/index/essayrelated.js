Vue.component('essayrelated', {
	template:
	`<div class="essayRelatedBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">相关文章</div>
		</div>
		<div class="essayRelatedBox">
			<div class="essayRelatedItem" v-for="(item,index) in essayRelatedList" :key="index">
				<div class="essayRelatedHead">
					<img :src="item.contextImg|httpStr" />
				</div>
				<div class="essayRelatedInfo" :title="item.titileStr">{{item.titileStr}}</div>
			</div>
		</div>
	</div>`,
	props: {
		modelName: {
			type: String,
			default: ''
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			essayRelatedList:[]
		};
	},
	watch:{
		// modelName(val){
		// 	if(val){
		// 		this.getList()
		// 	}
		// }
	},
	methods: {
		getList(key, keyPath) {
			postTitleListByCatalogId().then(res => {
				if(res.data && res.data.msg === "success"){
					const essayRelatedList = []
					res.data.data.map(item => {
						if(item.yiliaoModel === '新闻'){
							if(essayRelatedList.length<10) essayRelatedList.push(item)
						}
					})
					this.essayRelatedList = essayRelatedList
				}
			})
		}
	},
    mounted() {
		this.getList()
	}
});