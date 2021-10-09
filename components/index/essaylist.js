Vue.component('essaylist', {
	template:
	`<div class="essaylistBody">
		<div class="modelLabelBox">
			<div class="modelLabel">{{name}} 所有学术文章：</div>
		</div>
		<div class="essayItemBox" v-if="essayList.length>0">
			<div class="essayItem" v-for="(item,index) in essayList" :key="index" @click="toEssayDetail(item)">
				<div class="essayItemImg" v-if="item.contextImg"><img :src="item.contextImg | imgStr" /></div>
				<div class="essayItemInfo">
					<div class="essayItemTitle">{{item.titileStr}}</div>
					<div class="essayItemRemark">{{item.remark}}</div>
					<div class="essayItemBottom">
						<div class="essayItemTime">{{item.createTime}}</div>
						<div class="essayItemAuthor">{{item.catalogName}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="essayItemBox" v-else>
			<div class="noData">暂无数据</div>
		</div>
		<div class="readMore" v-if="false">查看更多</div>
	</div>`,
	props: {
		name: {
			type: String,
			default: ''
		},
		id: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			keyword: '心血管',
			essayList:[
				// {type:'artical',title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-12',author:'MedSci原创'},
				// {type:'artical',title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png',time:'2020-09-12',author:'MedSci原创'},
				// {type:'video',title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-12',author:'MedSci原创'},
				// {type:'video',title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/3.png',time:'2020-09-12',author:'MedSci原创'},
			],
		};
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	watch: {
		id(val){
			if(val){
				this.getEssayList()
			}
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toEssayDetail(data){
			const catalogName = data.catalogName
			const catalogId = data.catalogId
			const titleId = data.titleId
			location.href =  `./essayDetail.html?catalogId=${catalogId}&catalogName=${catalogName}&titleId=${titleId}`
		},
		getEssayList(){
			let param = {
				catalogId: getUrlParam('catalogId'),
				catalogName: decodeURI(getUrlParam('catalogName'))
			}
			if(param.catalogId === 'all'){
				param = ''
			}
			postTitleListByCatalogId(param).then(res => {
				if(res.data && res.data.msg === "success"){
					this.essayList = res.data.data
				}
			})
		}
	},
    mounted() {
		
	}
});