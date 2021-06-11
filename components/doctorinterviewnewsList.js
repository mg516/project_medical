Vue.component('doctorinterviewnewslist', {
	template:
	`<div class="recommendDoctorBody">
		<div class="recommendDoctorBox">
			<div @click="todoctorInterviewNewsDetail(item)" class="recommendDoctorItem" v-for="(item,index) in recommendDoctorList" :key="index">
				<div class="recommendDoctorImg"><img :src="item.contextImg|httpStr" /></div>
				<div class="recommendDoctorName">{{item.contextStr9}}</div>
				<div class="recommendDoctorType">{{item.contextStr7}}</div>
				<div class="recommendDoctorDept">{{item.contextStr8}}</div>
				<div class="recommendDoctorInfo">{{item.contextStr6}}</div>
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
		todoctorInterviewNewsDetail(data){
			location.href = `./doctorInterviewNewsDetail.html?id=${data.titleId}`
		},
		getDoctorList(){
			const param= {
				catalogName: '人物访谈'
			}
			postTitleListByCatalogId(param).then(res=> {
				if(res.data.data){
					this.recommendDoctorList = res.data.data
				}
			})
		}
	},
    mounted() {
		this.getDoctorList()
	}
});