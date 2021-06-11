Vue.component('mywallet', {
	template:
	`<div class="mywalletBody">
		<div class="sideModelLabelBox2">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="mywalletBox">
			<div class="mywalletLabel">
				<div class="mywalletText">我的余额：</div>
				<div class="mywalletMoney">102.98 <span>元</span></div>
			</div>
			<div class="mywalletBar">提现</div>
		</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: '我的钱包'
		}
	},
	data() {
		return {
			
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