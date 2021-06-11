Vue.component('medicinetool', {
	template:
	`<div class="medicinetoolBody">
		<div class="medicinetoolTitle">通用公式</div>
		<div class="medicinetoolBox">
			<div class="medicinetoolItem" v-for="(item,index) in tools" :key="index">
				<div class="toolName">{{item.name}}</div>
				<div class="toolNameEn">{{item.en}}</div>
			</div>

		</div>
	</div>`,
	props: {
		breadcrumblist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			tools: [
				{name: '年龄',en: 'Age'},
				{name: '贝叶斯定理灵敏度、特异性及概率',en: 'Bayesian Sensitivity, Specificity, Probabilities'},
				{name: '体质指数和体表面积',en: 'BMI and Body Surface Area (BSA)'},
				{name: '小儿气管插管的管道规则',en: 'Endotracheal Tube (ETT) Size for Pediatrics'},
				{name: '卒中预测工具-Ⅱ',en: 'Stroke Prognostic Instrument Ⅱ，SPI-Ⅱ'},
				{name: '抑郁自评量表',en: 'Self-Rating Depression Scale,SDS'},
				{name: '焦虑自评量表(SAS)',en: 'Self-Rating Anxiety Scale,SAS'},
				{name: '手机依赖量表',en: 'MPAI scale'},
			]
		};
	},
	methods: {
		
	},
    mounted() {

	}
});