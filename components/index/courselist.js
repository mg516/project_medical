Vue.component('courselist', {
	template:
	`<div class="courselistBody">
		<div class="courselistBox">
			<div class="courselistItem2" v-for="(item,index) in list" :key="index">
				<div class="courselistImg"><img :src="item.contextImg|imgStr" /></div>
				<div class="courselistInfo">
					<div class="courselistTitle">{{item.titileStr}}</div>
					<div class="courselistAuthor">
						<div>{{item.updateTime}}</div>
						<div class="courseBar" @click="toMessageCourseDetail(item)">立即学习</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		list:{
			type:Array,
			default: ()=>[]
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			courselist:[
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-20',author:'MedSci原创'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png',time:'2020-09-20',author:'MedSci原创'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/3.png',time:'2020-09-20',author:'MedSci原创'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/4.png',time:'2020-09-20',author:'MedSci原创'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/1.png',time:'2020-09-20',author:'MedSci原创'},
				{title:'苑东生物「格隆溴铵注射液」即将第2家获批',remark:'国际学术水平血管病学交流盛会',img:'../img/index/2.png',time:'2020-09-20',author:'MedSci原创'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toMessageCourseDetail(data){
			location.href = `./messageCourseDetail.html?titleId=${data.titleId}`
		}
	},
    mounted() {

	}
});