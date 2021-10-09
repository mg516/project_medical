Vue.component('recomhothospital', {
	template:
	`<div class="recomhothospitalBody">
		<div class="recomhothospitalTital">推荐医药企业</div>
		<div class="hospitalList">
			<div class="hospitalItem" v-for="(item,index) in hospitalList" :key="index" @click="toDetail(item)">
				<div class="hospitalImg">
					<img :src="item.pictureStr|httpStr" />
				</div>
				<div class="hospitalInfo">
					<div class="hospitalName" :title="item.enterpriseName">{{item.enterpriseName}}</div>
					<div class="hospitalRemark" :title="item.addressStr">{{item.addressStr}}</div>
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
			hospitalList:[
				{name:'广东德吉医院广东德吉医院广东德吉医院',remark:'各层次人才引进',img:'../img/index/hh1.png'},
				{name:'广东德吉医院',remark:'各层次人才引进各层次人才引进各层次人才引进',img:'../img/index/hh2.png'},
				{name:'广东德吉医院',remark:'各层次人才引进',img:'../img/index/hh3.png'},
				{name:'广东德吉医院',remark:'各层次人才引进',img:'../img/index/hh1.png'},
				{name:'广东德吉医院',remark:'各层次人才引进',img:'../img/index/hh2.png'},
			],
			activeIndex: 0,
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		toDetail(data){
			location.href = `./companyDetailEasy.html?id=${data.enterpriseId}&name=${data.enterpriseName}&enter=index`
		},
		checkAddress(index) {
			this.activeIndex = index
		},
		getList(){
			let param = {
				isRecommend: 0,
				beginNo:1,
				endNo:5,
			}
			postEnterpriseList(param).then(res => {
			    this.hospitalList = res.data.data.success
			})
		}
	},
    mounted() {
		this.getList()
	}
});