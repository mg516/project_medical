Vue.component('newsdrugwarn', {
	template:
	`<div class="newsdrugwarnBody">
		<div class="newsdrugwarnLabelBox">
			<div class="modelLabel">药品警示新闻</div>
			<div class="readMoreText" v-if="false">查看全部</div>
		</div>
		<div class="newsdrugwarnBox">
			<div class="newsdrugwarnItem" v-for="(item,index) in list" :key="index" @click="toDetail(item)">
				<div class="newsdrugwarnTitle" :title="item.titileStr">{{item.titileStr}}</div>
				<div class="newsdrugwarnTime">{{item.createTime}}</div>
			</div>
		</div>
	</div>`,
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			newsList:[
				{id:'1',title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',time:'2020-09-12'},
				{id:'2',title:'苑东生物「格隆溴铵注射液」即将第2家获批',time:'2020-09-12'},
				{id:'3',title:'苑东生物「格隆溴铵注射液」即将第2家获批',time:'2020-09-12'},
				{id:'4',title:'苑东生物「格隆溴铵注射液」即将第2家获批',time:'2020-09-12'},
				{id:'5',title:'苑东生物「格隆溴铵注射液」即将第2家获批',time:'2020-09-12'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toDetail(data){
			location.href = `./assessDrugWarnNews.html?id=${data.titleId}`
		}
	},
    mounted() {

	}
});