Vue.component('finddoctor', {
	template:
	`<div class="findDoctorBody" v-loading="loading">
		<div class="modelLabelBox">
			<div class="modelLabel">按科室找医生：</div>
			<div class="doctorTypeBox">
				<div
					class="doctorTypeItem"
					v-for="(item,index) in doctorType"
					:key="index"
					:class="{'active':activeIndex === index}"
					@click="checkType(index)"
				>{{item.name}}</div>
			</div>
		</div>
		<div class="finddoctorTitleLine"></div>
		<div class="findDoctorBox" v-if="findDoctorList.length>0 && !loading">
			<div class="findDoctorItem" v-for="(item,index) in findDoctorList" :key="index" @click="toDoctorDetail(item)">
				<div class="findDoctorImg"><img :src="item.pictureStr | httpStr" /></div>
				<div class="findDoctorName">{{item.doctorName}}</div>
				<div class="findDoctorType">{{item.positionStr}}</div>
				<div class="findDoctorDept">{{item.hospitalName}} {{item.officeStr}}</div>
				<div class="findDoctorInfo">{{item.goodStr}}</div>
				<div class="findDoctorContact">
					<div class="findDoctorScore">推荐度：{{item.searchValue}}</div>
					<div class="findDoctorContactBar" v-if="false">咨询</div>
				</div>
			</div>
		</div>
		<div class="noData" v-else>暂无数据</div>
	</div>`,
	props: {
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			activeIndex: -1,
			doctorType: [
				// {name:'内科',id:1},
				// {name:'外科',id:2},
				// {name:'妇产科',id:3},
				// {name:'皮肤科',id:4},
				// {name:'中医科',id:5},
				// {name:'儿科',id:6},
				// {name:'五官科',id:7},
			],
			findDoctorList:[
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
				// {name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png',remark:'擅长：布洛芬和对乙酰氨基酚是目前应用最普遍的退热药，但二者在同'},
			],
			loading: false
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		checkType(index) {
			this.activeIndex = index
			this.getDoctorList()
		},
		toDoctorDetail(item){
			location.href = `./assessDoctorDetail.html?doctorId=${item.doctorId}`
		},
		getDoctorPcatalog(){
			postDoctorPcatalog('科室').then(res => {
				this.doctorType = res.data.data.map(item=>{
					return {
						name: item.catalogName
					}
				})
			})
		},
		getDoctorList(){
			this.loading = true
			this.findDoctorList = []
			const param = {
				beginNo:1,
				endNo:20,
				isRecommend: 0
			}
			if(this.activeIndex>-1){
				param.officeStr = this.doctorType[this.activeIndex].name
			}
			postSearchDoctor(param).then(res => {
				this.findDoctorList = res.data.data.success
				this.loading = false
			}).catch(() => {
				this.loading = false
			})
		}
	},
	mounted(){
		this.getDoctorPcatalog()
		this.getDoctorList()
	}
});