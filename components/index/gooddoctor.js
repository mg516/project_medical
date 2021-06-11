Vue.component('gooddoctor', {
	template:
	`<div class="doctorBody">
		<div class="modelLabelBox">
			<div class="modelLabel">好医生</div>
			<div class="modelMore" @click="readAll">查看全部</div>
		</div>
		<div class="doctorBox">
			<div class="doctorItem" v-for="(item,index) in doctorList" :key="index" @click="toDetail(item)">
				<div class="doctorImg"><img :src="item.pictureStr | imgStr" /></div>
				<div class="doctorName">{{item.doctorName}}</div>
				<div class="doctorType">{{item.positionStr}}</div>
				<div class="doctorDept">{{item.sexStr}} {{item.department}}</div>
				<div class="doctorContact">
					<div class="doctorScore">推荐度：{{item.gradeNumber || 0}}</div>
					<div class="doctorContactBar">咨询</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		data: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			// doctorList:[
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png'},
			// 	{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png'},
			// ]
		};
	},
	computed:{
		doctorList:function(){
			return this.data
		}
	},
	filters: {
		imgStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		readAll(){
			location.href = './doctorHouse.html'
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toDetail(data){
			location.href = `./doctorHouseDetail.html?id=${data.doctorId}&name=${data.doctorName}&enter=index`
		}
	},
    mounted() {

	}
});