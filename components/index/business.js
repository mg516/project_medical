Vue.component('business', {
	template:
	`<div class="businessBody">
		<div class="modelLabelBox">
			<div class="modelLabel">企业推荐</div>
			<div class="modelMore" @click="readAll">查看全部</div>
		</div>
		<div class="businessBox">
			<div class="businessItem" v-for="(item,index) in businessList" :key="index" @click="toDetail(item)">
				<div class="businessImg"><img :src="item.pictureStr | httpStr" /></div>
				<div class="businessInfo">
					<div class="businessTitle">{{item.enterpriseName}}</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			// businessList:[
			// 	{name:'上海川至生物技术',img:'../img/index/h1.png'},
			// 	{name:'上海川至生物技术',img:'../img/index/h2.png'},
			// 	{name:'上海川至生物技术',img:'../img/index/h3.png'},
			// 	{name:'上海川至生物技术',img:'../img/index/h4.png'},
			// 	{name:'上海川至生物技术',img:'../img/index/h5.png'}
			// ]
		};
	},
	computed:{
		businessList:function(){
			return this.data
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		readAll(){
			location.href = './companyHouse.html'
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toDetail(data){
			location.href = `./companyDetail.html?id=${data.enterpriseId}&name=${data.enterpriseName}&enter=index`
		}
	},
    mounted() {

	}
});