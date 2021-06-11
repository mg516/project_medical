Vue.component('assesshospital', {
	template:
	`<div class="assesshospitalBody">
		<div class="assesshospitalTabs">
			<div
				class="ahTabItem"
				:class="{'active':activeIndex === index}"
				v-for="(item,index) in hospitalTypes"
				:key="index"
				@click="checkType(index)">
				{{item.name}}
			</div>
			<div class="readMoreText" @click="toAssessHospital">查看更多</div>
		</div>
		<div class="assesshospitalBox">
			<div class="assesshospitalItem" v-for="(item,index) in assesshospitalList" :key="index" @click="toHospitalDetail(item)">
				<div class="assesshospitalImg"><img :src="item.pictureStr | httpStr" /></div>
				<div class="assesshospitalInfo">
					<div class="assesshospitalName" :title="item.hospitalName">
						<div class="assesshospitalNameText" :title="item.hospitalName">{{item.hospitalName}}</div>
						<div class="assesshospitalLevel" :title="item.gradeStr">{{item.gradeStr}}</div>
					</div>
					<div class="assesshospitalContact" v-html="item.telStr"></div>
					<div class="assesshospitalAddress" :title="item.addressStr">地址：{{item.addressStr}}</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			activeIndex: 0,
			hospitalTypes: [
				{name:'三级甲等',id:'1'},
				{name:'二级甲等',id:'2'},
				{name:'一级甲等',id:'3'},
				{name:'社区卫生服务中心',id:'4'},
			],
			assesshospitalList:[
				// {level:'三甲医院',name:'八一儿童医院八一儿童医院八一儿童医院八一儿童医院',address:'北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh1.png'},
				// {level:'三甲医院',name:'八一儿童医院',address:'北京市东城区朝内北小街2号北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh2.png'},
				// {level:'三甲医院',name:'八一儿童医院',address:'北京市东城区朝内北小街2号北京市东城区朝内北小街2号北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh3.png'},
				// {level:'三甲医院',name:'八一儿童医院',address:'北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh1.png'},
				// {level:'三甲医院',name:'八一儿童医院',address:'北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh2.png'},
				// {level:'三甲医院',name:'八一儿童医院',address:'北京市东城区朝内北小街2号',remark:'北京协和医院是集医疗、教学、科研于一体的大型三级甲等综合医院，是北京协和医学院的临床学院、中国医学科学院的临床医学研究所，是卫生部指定的全国疑难重症诊治指导中心之一，也是最早承担干部保健和外宾医疗的医院之一。',img:'../img/index/hh3.png'},
			]
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
			this.getHospitalList()
		},
		toAssessHospital(){
			location.href = './assessHospitalIndex.html'
		},
		async getHospitalType(){
			const res = await postDictByType('yiliao_grade')
			this.hospitalTypes = res.data.data.map(item => {
				return {
					name: item.dictLabel,
					id: item.dictValue
				}
			}).slice(0,6)
		},
		getHospitalList(){
			const param = {
				beginNo:1,
				endNo:20,
				gradeStr:this.hospitalTypes[this.activeIndex].name
			}
			postSearchHospital(param).then(res => {
				this.assesshospitalList = res.data.data.success
			})
		},
		toHospitalDetail(data){
			location.href = `./hospitalHouseDetail.html?hospitalId=${data.hospitalId}`
		}
	},
	async mounted(){
		await this.getHospitalType()
		this.getHospitalList()
	}
});