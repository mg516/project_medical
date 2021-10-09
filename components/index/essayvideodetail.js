Vue.component('essayvideodetail', {
	template:
	`<div class="essayvideodetailBody">
		<div class="essayvideoTitle">{{data.titileStr}}</div>
		<div class="essayvideoRemark">
			<div class="essayvideoTime">{{data.createTime}}</div>
		</div>
		<div class="essayvideoContent" v-if="data.contextVidio">
			<video :src="data.contextVidio|httpStr" controls="controls" :poster="data.contextImg | httpStr">
				your browser does not support the video tag
			</video>
		</div>
		<div class="essayvideoContent" v-html="data.contextStr"></div>
	</div>`,
	props: {
		data: {
			type: Object
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			title:'肺炎区别',
			time: '2020-09-08 14:24',
			content: '血清尿酸（SUA）与心血管疾病风险之间的关联已明确。但是，SUA水平对静脉血栓栓塞（VTE）复发风险的影响尚未明确。近日，血栓和凝血疾病权威杂志Journal of Thrombosis and Haemostasis上发表了一篇研究文章，该研究旨在调查SUA水平与VTE复发风险之间的关联。研究人员对280例既往发生VTE且已完成口服抗凝的患者进行了单中心前瞻性研究，旨在评估入院时SUA水平与VTE复发风险的关系（平均随访71.1±29.2个月）。根据基线时SUA三分位数的分布对患者进行分层（三分位数临界值：I≤4.37 mg/dl，II≤4.38-5.54 mg/dl，III≥5.55 mg/dl）。在随访期间发生了50次VTE复发事件，Kaplan-Meyer生存分析表明，SUA水平处于较低三分位的受试者VTE复发的风险显著较低（p=0.003）。SUA处于第二和第三分位数的患者之间未见明显差异。多元Cox回归分析显示，与SUA≤4.37的受试者相比，SUA三分位数较高的患者VTE复发风险增加了约3倍（HR为3.04，95％CI为1.15-8.05，p=0.025） 。此外，研究人员观察到，SUA每增加一个单位（mg/dl），经调整后的VTE复发风险就增加30％（HR为1.30，95％CI为1.01-1.22，p=0.040）。由此可见，独立于传统危险因素，SUA水平升高与VTE复发风险增加相关。',
			essayLabels:['Pembrolizumab','静脉血栓栓塞'],
			video:'../video/movie.ogv'
		}
	},
	methods: {
		
	},
    mounted() {

	}
});