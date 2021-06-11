Vue.component('essayrelated', {
	template:
	`<div class="essayRelatedBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">相关文章</div>
		</div>
		<div class="essayRelatedBox">
			<div class="essayRelatedItem" v-for="(item,index) in essayRelatedList" :key="index">
				<div class="essayRelatedHead">
					<img :src="item.img" />
				</div>
				<div class="essayRelatedInfo">{{item.title}}</div>
			</div>
		</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			essayRelatedList:[
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h1.png'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h2.png'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h3.png'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h4.png'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h1.png'},
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