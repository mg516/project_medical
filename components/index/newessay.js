Vue.component('newessay', {
	template:
	`<div class="newessayBody">
		<div class="modelLabelBox">
			<div class="modelLabel">最新学术文章</div>
			<div class="modelMore" @click="readAll">查看全部</div>
		</div>
		<div class="essayBox">
			<div class="essayItem" v-for="(item,index) in essayList1" :key="index" @click="toEssayDetail(item)">
				<div class="essayImg"><img :src="item.contextImg | imgStr" /></div>
				<div class="essayInfo">
					<div class="essayTitle">{{item.titileStr}}</div>
					<div class="essayRemark">{{item.remark}}</div>
				</div>
			</div>
		</div>
		<div class="essayMsgBox" v-show="false">
			<div class="essayMsgItem" v-for="(item,index) in essayList2" :key="index">
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
			// essayList1:[
			// 	{titileStr:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png'},
			// 	{titileStr:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png'},
			// 	{titileStr:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png'},
			// 	{titileStr:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/3.png'},
			// ],
			// essayList2:[
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批'},
			// ]
		};
	},
	computed:{
		essayList1:function(){
			return this.data
		},
		essayList2:function(){
			return this.data
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		readAll(){
			location.href = './essayList.html?catalogId=all&catalogName=全部'
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toEssayDetail(data){
			const titleId = data.titleId
			location.href =  `./essayDetail.html?titleId=${titleId}`
		}
	},
    mounted() {
		
	}
});