Vue.component('nearmeeting', {
	template:
	`<div class="nearmeetingBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="nearmeetingBox">
			<div class="nearmeetingItem" v-for="(item,index) in meetinglist" :key="index">· {{item.name}}</div>
		</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '地奥集团'
		}
	},
	data() {
		return {
			meetinglist:[
				{name:'男性、老年人或白血病患者更易得重症新'},
				{name:'NEJM：帕尼单抗相关的睫毛伸长-病例报道'},
				{name:'男性、老年人或白血病患者更易得重症新'},
				{name:'NEJM：帕尼单抗相关的睫毛伸长-病例报道'},
				{name:'男性、老年人或白血病患者更易得重症新男性、老年人或白血病患者更易得重症新'},
				{name:'男性、老年人或白血病患者更易得重症新'},
				{name:'NEJM：帕尼单抗相关的睫毛伸长-病例报道'},
				{name:'男性、老年人或白血病患者更易得重症新'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted() {

	}
});