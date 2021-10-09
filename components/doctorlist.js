Vue.component('doctorlist', {
	template:
	`<div class="doctorlistBody">
		<div class="doctorlistLabel">共 <span class="doctorNum">{{list.count}}</span> 个医生</div>
		<div class="doctorlistBox">
			<template v-if="doctorlist.length>0">
				<div class="doctorItem" @click="toDoctorHouseDetail(item)" v-for="(item,index) in doctorlist" :key="index">
					<div class="doctorImg"><img :src="item.pictureStr|httpStr" /></div>
					<div class="doctorInfo">
						<div class="doctorName">
							<div class="doctorNameText">{{item.doctorName}}</div>
							<div class="doctorType">{{item.positionStr}}</div>
						</div>
						<div class="doctorHospital">
							<div class="doctorhospitalText">{{item.hospitalName}}</div>
							<div class="doctorDept">{{item.officeStr}}</div>
						</div>
						<div class="doctorRemark" :title="item.goodStr">{{item.goodStr}}</div>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="noData">暂无数据</div>
			</template>
			<div class="readMore" v-if="list.count>doctorlist.length && false">查看更多</div>
		</div>
	</div>`,
	props: {
		list: {
			type: Object,
			default: () => {
				success: []
			}
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	watch: {
		list(val){
			if(val && val.success){
				this.doctorlist = JSON.parse(JSON.stringify(val.success))
			}
		}
	},
	data() {
		return {
			doctorlist: [
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',remark:'消化内科多发病和常见病的诊治，消化内镜的检查和内镜治疗消化内科多发病和常见病的诊治，消化内镜',img:'../img/index/d1.png'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',remark:'消化内科多发病和常见病的诊治，消化内镜的检查和内镜治疗消化内科多发病和常见病的诊治，消化内镜',img:'../img/index/d2.png'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',remark:'消化内科多发病和常见病的诊治，消化内镜的检查和内镜治疗消化内科多发病和常见病的诊治，消化内镜',img:'../img/index/d3.png'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',remark:'消化内科多发病和常见病的诊治，消化内镜的检查和内镜治疗消化内科多发病和常见病的诊治，消化内镜',img:'../img/index/d4.png'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',remark:'消化内科多发病和常见病的诊治，消化内镜的检查和内镜治疗消化内科多发病和常见病的诊治，消化内镜',img:'../img/index/d1.png'},
			]
		};
	},
	methods: {
		toDoctorHouseDetail(data){
			location.href = `./doctorHouseDetail.html?id=${data.doctorId}`
		},
		// getDoctorList(){
		// 	const param = {
		// 		beginNo:1,
		// 		endNo:20
		// 	}
		// 	postSearchDoctor(param).then(res => {
		// 		this.doctorlist = res.data.data
		// 	})
		// }
	},
    mounted() {
		// this.getDoctorList()
	}
});