Vue.component('doctorinterview', {
	template:
	`<div class="essaydetailBody">
		<div class="essayTitle">人物专访：{{data.hospitalName}}{{data.catalogName}}{{data.doctorName}}</div>
		<div class="essayRemark">
			<div class="essayTime">46分钟前</div>
			<div class="essayAuthor">mader</div>
		</div>
		<div class="essayContent" v-html="data.infosStr"></div>
		<div class="essayLabels">
			<div class="essayLabelItem" v-for="(item,index) in essayLabels" :key="index">{{item}}</div>
		</div>
	</div>`,
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			title:'',
			content: '',
			essayLabels:['Pembrolizumab','静脉血栓栓塞']
		}
	},
	methods: {
		
	},
    mounted() {

	}
});