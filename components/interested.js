Vue.component('interested', {
	template:
	`<div class="interestedBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">可能感兴趣的</div>
		</div>
		<div class="interestedBox">
			<div class="interestedItem" v-for="(item,index) in interestedList" :key="index">
				<div class="interestedHead">
					<img :src="item.img" />
				</div>
				<div class="interestedInfo">{{item.title}}</div>
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
			interestedList:[
				{title:'那个医院好',img:'../img/index/h1.png'},
				{title:'那个医院好',img:'../img/index/h2.png'},
				{title:'那个医院好',img:'../img/index/h3.png'},
				{title:'那个医院好',img:'../img/index/h4.png'},
				{title:'那个医院好',img:'../img/index/h1.png'},
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