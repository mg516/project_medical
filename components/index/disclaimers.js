Vue.component('disclaimers', {
	template:
	`<div class="disclaimersBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">免责声明</div>
		</div>
		<div class="disclaimersBox">
			<div class="disclaimersText">{{disclaimersText}}</div>
		</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			disclaimersText:'XX有限公司对医疗器械网上刊登之所有信息不声明或保证其内容之正确性或可靠性；您于此接受并承认信赖任何信息所生之风险应自行承担。XX有限公司，有权但无此义务，改善或更正所刊登信息任何部分之错误或疏失。'
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