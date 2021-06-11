Vue.component('companylicense', {
	template:
	`<div class="companylicenseBody">
		<div class="companylicenseExplain">
			<div class="companylicenseETitle">证件名称：企业专利认证证书</div>
			<div class="companylicenseEItem">
				<div class="companylicenseEITitle">证件图片：</div>
				<div class="companylicenseEIImg">
					<img :src="companylicense.img" />
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
			companylicense:{
				name:'地奥集团成都药业股份有限公司',
				img:'../img/zhuanli.png',
			}
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toTab2(){
			location.href = `${getUrl()}?tab=1`
		}
	},
	mounted() {

	}
});