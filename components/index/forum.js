Vue.component('forum', {
	template:
	`<div class="forumBody">
		<div class="modelLabelBox">
			<div class="modelLabel">论坛话题互动</div>
			<div class="modelMore">查看全部</div>
		</div>
		<div class="forumBox">
			<div class="forumBanner">
				<el-carousel trigger="click" @change="changeIndex" indicator-position="none" arrow="never">
					<el-carousel-item v-for="(item,index) in bannerList" :key="index">
						<img :src="item.img" />
					</el-carousel-item>
				</el-carousel>
				<div class="hospitalName">
					<span>{{bannerList[activeIndex].label}}</span>
					<span>{{activeIndex+1}}/{{bannerList.length}}</span>
				</div>
			</div>
			<div class="forumList">
				<div class="forumListLabel">热门互动</div>
				<div class="forumItem" v-for="(item,index) in hotList" :key="index">
					<div class="forumTitle">{{item.title}}</div>
					<div class="forumReplyNum">{{item.replyNum}}回复</div>
				</div>
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
			activeIndex:0,
			bannerList: [
				{img:'../img/index/hh1.png',label:'北京最好的医院1'},
				{img:'../img/index/hh2.png',label:'北京最好的医院2'},
				{img:'../img/index/hh3.png',label:'北京最好的医院3'},
			],
			hotList:[
				{title:'苑东生物「格隆溴铵注射液」即将第2将第2家获批',replyNum:'20'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',replyNum:'20'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',replyNum:'20'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',replyNum:'20'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',replyNum:'20'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',replyNum:'20'},
			]
		};
	},
	methods: {
		changeIndex(index) {
			this.activeIndex = index
		}
	},
    mounted() {

	}
});