Vue.component('recommenddoctor', {
	template:
	`<div class="recommendDoctorBody">
		<div class="modelLabelBox">
			<div class="modelLabel">推荐医生</div>
			<div class="readMoreText">查看更多</div>
		</div>
		<div class="recommendDoctorBox">
			<div class="recommendDoctorItem" v-for="(item,index) in data" :key="index" @click="toDoctorDetail(item)">
				<div class="recommendDoctorImg"><img :src="item.pictureStr | imgStr" /></div>
				<div class="recommendDoctorName">{{item.doctorName}}</div>
				<div class="recommendDoctorType">{{item.positionStr}}</div>
				<div class="recommendDoctorDept">{{item.hospitalName}} {{item.officeStr}}</div>
				<div class="recommendDoctorInfo">{{item.goodStr}}</div>
				<div class="recommendDoctorContact">
					<div class="recommendDoctorScore">推荐度：{{item.gradeNumber || 0}}</div>
					<div class="recommendDoctorContactBar" v-if="false">咨询</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data:{
			type: Array,
			default: () => []
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			recommendDoctorList:[
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toDoctorDetail(item){
			location.href = `./assessDoctorDetail.html?doctorId=${item.doctorId}`
		},
	},
    mounted() {

	}
});