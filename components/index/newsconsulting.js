Vue.component('newsconsulting', {
	template:
	`<div class="newessayBody">
		<div class="modelLabelBox">
			<div class="modelLabel">新闻资讯</div>
			<div class="modelMore">查看全部</div>
		</div>
		<div class="essayMsgBox">
			<div class="essayMsgItem" v-for="(item,index) in newsList" :key="index">
				<div class="essayMsg">{{item.titileStr}}</div>
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
			// newsList:[
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// ]
		};
	},
	computed:{
		newsList:function(){
			return this.data
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});