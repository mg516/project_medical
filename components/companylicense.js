Vue.component('companylicense', {
	template:
	`<div class="companylicenseBody">
		<div class="companylicenseExplain">
			<div class="companylicenseETitle" v-if="false">证件名称：企业专利认证证书</div>
			<div class="companylicenseEItem">
				<div class="companylicenseEITitle">证件图片：</div>
				<div class="companylicenseEIImg">
					<img :src="data.qyzzStr|httpStr" />
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data :{
			type:Object,
			default:()=>{}
		}
	},
	data() {
		return {
			
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		
	},
	mounted() {

	}
});