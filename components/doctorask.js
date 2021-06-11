Vue.component('doctorask', {
	template:
	`<div class="doctoraskBody modalBody" v-show="show">
		<div class="doctoraskBox modalBox">
			<div class="modalClose" @click="closeDialog">×</div>
			<div class="modalTitle">填写提问内容</div>
			<div class="doctoraskCont">
				<el-input type="textarea" v-model="text" rows="13" resize="none"></el-input>
			</div>
			<div class="doctoraskSubmit">提交</div>
		</div>
	</div>`,
	props: {
		doctorasklist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			show: false,
			text: ''
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