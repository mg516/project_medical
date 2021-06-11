Vue.component('recomdoctor', {
	template:
	`<div class="recomDoctorBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">医生推荐</div>
		</div>
		<div class="recomDoctorBox">
			<div class="recomDoctorItem" v-for="(item,index) in recomDoctorList" :key="index" @click="toHospitalHouseDetail(item)">
				<div class="recomDoctorHead">
					<img :src="item.pictureStr | httpStr" />
					<div class="recomDoctorScore">{{item.searchValue || 0}}分</div>
				</div>
				<div class="recomDoctorInfo">
					<div class="recomDoctorMsg">
						<span class="recomDoctorName">{{item.doctorName}}</span>
						<span class="recomDoctorType">{{item.type}}</span>
					</div>
					<div class="recomDoctorDept">{{item.officeStr}}</div>
					<div class="recomDoctorHospital">{{item.hospitalName}}</div>
				</div>
			</div>
		</div>
		<div class="readMore" @click="toMore">查看更多</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			recomDoctorList:[]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		getDoctorList(){
			const param = {
				isRecommend: '0',
				beginNo:1,
				endNo:10
			}
			postSearchDoctor(param).then(res => {
				this.recomDoctorList = res.data.data.success
			})
		},
		toMore(){
			location.href = `./doctorHouse.html`
		},
		toHospitalHouseDetail(data){
			location.href = `./doctorHouseDetail.html?id=${data.doctorId}`
		}
	},
    mounted() {
		this.getDoctorList()
	}
});