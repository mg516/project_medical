Vue.component('consultation', {
	template:
	`<div class="doctoraskBody modalBody" v-show="show">
		<div class="doctoraskBox modalBox">
			<div class="modalClose" @click="closeDialog">×</div>
			<div class="formBody">
				<div class="formItem">
					<div class="formLabel">联系人</div>
					<div class="formValue">
						<el-input v-model="form.contractStr"></el-input>
					</div>
				</div>
				<div class="formItem">
					<div class="formLabel">手机</div>
					<div class="formValue">
						<el-input v-model="form.mobileStr"></el-input>
					</div>
				</div>
				<div class="formItem">
					<div class="formLabel">咨询内容</div>
					<div class="formValue">
						<el-input v-model="form.contextStr" type="textarea" rows="13" resize="none"></el-input>
					</div>
				</div>
			</div>
			<div class="formHandle">
				<div class="formSubmit" @click="submit">完成</div>
			</div>
		</div>
	</div>`,
	props: {
		
	},
	data() {
		return {
			show: false,
			type: '',
			id: '',
			form:{
				bId: '',
				contextStr: '',
				contractStr: '',
				mobileStr: '',
				userType: '',
			}
		};
	},
	watch:{
		show(val){
			if(val){
				this.form.bId = this.id
				this.form.userType = this.type
			}
		}
	},
	methods: {
		closeDialog(){
			this.show = false
		},
		submit(){
			if(this.form.contractStr && this.form.mobileStr && this.form.contextStr){
				postAddConsult(this.form).then(res => {
					if(res.data.code === 0){
						this.$message.success('提交成功')
						this.closeDialog()
					}else{
						this.$message.error(res.data.msg)
					}
				})
			}else{
				this.$message.warning('信息填写不完整')
			}
		}
	},
    mounted() {
		
	}
});