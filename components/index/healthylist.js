Vue.component('healthylist', {
	template:
	`<div class="newessayBody">
		<div class="essayBox" v-if="list.length>0">
			<div class="essayItem2" v-for="(item,index) in list" :key="index" @click="toMessageDetail(item)">
				<div class="essayImg"><img :src="item.contextImg|imgStr" /></div>
				<div class="essayInfo">
					<div class="essayTitle">{{item.titileStr}}</div>
					<div class="essayRemark">{{item.catalogName}}</div>
					<div class="essayAuthor">
						<div>{{item.createTime}}</div>
						<div>{{item.author}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="essayBox" v-else>
			<div class="noData">暂无数据</div>
		</div>
	</div>`,
	props: {
		list: {
			type: Object,
			default: () => []
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			// list:[
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-20',author:'MedSci原创'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png',time:'2020-09-20',author:'MedSci原创'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/3.png',time:'2020-09-20',author:'MedSci原创'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/4.png',time:'2020-09-20',author:'MedSci原创'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-20',author:'MedSci原创'},
			// 	{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png',time:'2020-09-20',author:'MedSci原创'},
			// ]
		};
	},
	methods: {
		toMessageDetail(data){
			location.href = `./newsMessageDetail?titleId=${data.titleId}`
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});