Vue.component('doctormark', {
	template:
	`<div class="doctormarkBody modalBody" v-show="show">
		<div class="doctormarkBox modalBox">
			<div class="modalClose" @click="closeDialog">×</div>
			<div class="modalTitle">填写提问内容</div>
			<div class="doctormarkCont">
				<div class="rateBox">
					<div class="rateLabel">打分：{{score*2}} 分</div>
					<el-rate v-model="score" :colors="colors"></el-rate>
				</div>
				<el-input type="textarea" v-model="text" rows="10" resize="none"></el-input>
			</div>
			<div class="doctormarkSubmit">提交</div>
		</div>
	</div>`,
	props: {
		doctormarklist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			show: false,
			text: '',
			score: 0,
			colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
		};
	},
	methods: {
		closeDialog(){
			this.show = false
		}
	},
    mounted() {

	}
});