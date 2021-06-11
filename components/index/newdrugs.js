Vue.component('newdrugs', {
	template:
	`<div class="newessayBody">
		<div class="modelLabelBox">
			<div class="modelLabel">新药发布</div>
			<div class="modelMore">查看全部</div>
		</div>
		<div class="essayBox">
			<div class="essayItem" v-for="(item,index) in drugList" :key="index">
				<div class="essayImg"><img :src="item.contextImg | imgStr" /></div>
				<div class="essayInfo">
					<div class="essayTitle">{{item.titileStr}}</div>
					<div class="essayRemark">{{item.createTime}}</div>
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
			// drugList:[
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/3.png'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/4.png'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png'},
			// ]
		};
	},
	computed:{
		drugList:function(){
			return this.data
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
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