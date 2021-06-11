Vue.component('recomhothospital', {
	template:
	`<div class="recomhothospitalBody">
		<div class="recomhothospitalTital">推荐医药企业</div>
		<div class="hospitalList">
			<div class="hospitalItem" v-for="(item,index) in hospitalList" :key="index">
				<div class="hospitalImg">
					<img :src="item.img" />
				</div>
				<div class="hospitalInfo">
					<div class="hospitalName" :title="item.name">{{item.name}}</div>
					<div class="hospitalRemark" :title="item.remark">{{item.remark}}</div>
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
	methods: {
		checkAddress(index) {
			this.activeIndex = index
		}
	},
    mounted() {

	}
});