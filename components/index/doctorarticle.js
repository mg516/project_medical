Vue.component('doctorarticle', {
	template:
	`<div class="doctorEssayBox" v-if="doctormsg">
		<div class="doctorEssayLabel">{{doctormsg.doctorName}}的科普文章</div>
		<div class="doctorEssayList">
			<div class="doctorEssayItem" @click="toArticleDetail(item)" v-for="(item,index) in doctorEssayList" :key="index">
				<div class="doctorEssayName">{{item.titileStr}}</div>
				<div class="doctorEssayTime">{{item.updateTime}}</div>
			</div>
		</div>
	</div>`,
	props: {
		doctormsg: {
			type: Object,
			default: ''
		}
	},
	data() {
		return {
			doctorEssayList: []
		};
	},
	watch: {
		doctormsg(val){
			if(val.doctorId){
				this.getDoctorArticle()
			}
		}
	},
	methods: {
		getDoctorArticle(){
			postDoctorArticle(this.doctormsg.doctorId).then(res => {
				this.doctorEssayList = res.data.data
			})
		},
		toArticleDetail(data){
			location.href = `./articleDoctorDetail.html?titleId=${data.titleId}`
		}
	},
});