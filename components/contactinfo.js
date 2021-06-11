Vue.component('contactinfo', {
	template:
	`<div class="contactinfoBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">联系方式</div>
		</div>
		<div class="contactinfoBox">
			<div class="contactinfoItem">所在地区：{{data.cityStr}}/{{data.areaStr}}</div>
			<div class="contactinfoItem">所属行业：药品</div>
			<div class="contactinfoItem">公司类型：{{data.managementStyle}}</div>
			<div class="contactinfoItem">联系地址：{{data.addressStr}}</div>
			<div class="contactinfoItem">邮政编码：</div>
			<div class="contactinfoItem">联 系 人：蒋部长</div>
			<div class="contactinfoItem">联系电话：0574-86221824</div>
			<div class="contactinfoItem">联系传真：</div>
			<div class="contactinfoItem" v-html="data.telStr"></div>
			<div class="contactinfoItem">电子邮件：{{data.emailStr}}</div>
		</div>
		<slot><slot>
	</div>`,
	props: {
		data: {
			type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			contactinfoList:[
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d2.png'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d3.png'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d4.png'},
				{name:'Susan Johnson',type:'主治医生',hospital:'上海市华山医院',department:'神经内科',score:'8.0',img:'../img/index/d1.png'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});