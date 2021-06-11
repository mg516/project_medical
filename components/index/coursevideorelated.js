Vue.component('coursevideorelated', {
	template:
	`<div class="essayvideoBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">课程列表</div>
		</div>
		<div class="essayvideoBox">
			<div class="essayvideoItem" v-for="(item,index) in essayvideoList" :key="index" @click="toEssayDetailVideo">
				<div class="essayvideoCover">
					<img :src="item.img" />
					<div class="essayvideoPlay">
						<img src="../img/index/playicon.png" />
					</div>
				</div>
				<div class="essayvideoInfo">{{item.title}}</div>
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
			essayvideoList:[
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h1.png',video:'../video/movie.ogv'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h2.png',video:'../video/movie.ogv'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h3.png',video:'../video/movie.ogv'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h4.png',video:'../video/movie.ogv'},
				{title:'JAHA：周围动脉疾病患者急性失代偿性心衰再入院分析',img:'../img/index/h1.png',video:'../video/movie.ogv'},
			]
		};
	},
	methods: {
		toEssayDetailVideo() {
			location.href = './essayDetailVideo.html'
		}
	},
    mounted() {

	}
});