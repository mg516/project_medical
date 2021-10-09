Vue.component('coursevideorelated', {
	template:
	`<div class="essayvideoBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="essayvideoBox">
			<div class="essayvideoItem" v-for="(item,index) in courseList" :key="index" @click="toEssayDetailVideo(item)">
				<div class="essayvideoCover">
					<img :src="item.contextImg | httpStr" />
					<div class="essayvideoPlay">
						<img src="../img/index/playicon.png" />
					</div>
				</div>
				<div class="essayvideoInfo">{{item.titileStr}}</div>
			</div>
		</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '课程列表'
		}
	},
	data() {
		return {
			courseList:[]
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		toEssayDetailVideo(data) {
			location.href = `./messageCourseDetail.html?titleId=${data.titleId}`
		},
		getCourseType(){
			postModelListByName('课程').then(res => {
				if(res.data && res.data.msg === "success"){
					let courseList = []
					res.data.data.forEach(async item => {
						const param = {
							catalogName:item.catalogName,
							catalogId: item.catalogId
						}
						const res = await this.getCourseList(param)
						if(res.data.data){
							courseList = courseList.concat(res.data.data.slice(1,10-courseList.length))
						}
						this.courseList = courseList
					})
				}
			})
		},
		getCourseList(param){
			return postTitleListByCatalogId(param)
		}
	},
    mounted() {
		this.getCourseType()
	}
});