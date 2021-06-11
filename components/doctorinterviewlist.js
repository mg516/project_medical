Vue.component('doctorinterviewlist', {
	template:
	`<div class="recommendDoctorBody">
		<div class="recommendDoctorBox">
			<div @click="todoctorInterviewDetail(item)" class="recommendDoctorItem" v-for="(item,index) in recommendDoctorList" :key="index">
				<div class="recommendDoctorImg"><img :src="item.pictureStr|httpStr" /></div>
				<div class="recommendDoctorName">{{item.doctorName}}</div>
				<div class="recommendDoctorType">{{item.positionStr}}</div>
				<div class="recommendDoctorDept">{{item.hospitalName}} {{item.officeStr}}</div>
				<div class="recommendDoctorInfo">{{item.goodStr}}</div>
			</div>
		</div>
	</div>`,
	props: {
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			recommendDoctorList:[
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
			]
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		todoctorInterviewDetail(data){
			location.href = `./doctorInterviewDetail.html?id=${data.doctorId}`
		},
		getDoctorList(){
			const param = {
				beginNo:1,
				endNo:20
			}
			postSearchDoctor(param).then(res => {
				this.recommendDoctorList = res.data.data.success
			})
		}
	},
    mounted() {
		this.getDoctorList()
	}
});