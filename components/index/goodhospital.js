Vue.component('goodhospital', {
	template:
	`<div class="hospitalBody">
		<div class="modelLabelBox">
			<div class="modelLabel">推荐的医院</div>
			<div class="modelMore" @click="readAll">查看全部</div>
		</div>
		<div class="hospitalBox">
			<div class="hospitalItem" v-for="(item,index) in hospitalList" :key="index" @click="toDetail(item)">
				<div class="hospitalImg"><img :src="item.administrativeStr | httpStr" /></div>
				<div class="hospitalName" :title="item.hospitalName">{{item.hospitalName}}</div>
				<div class="hospitalAddress" :title="item.addressStr">地址：{{item.addressStr}}</div>
				<div class="hospitalContact">
					<div class="hospitalScore">推荐度：{{item.gradeNumber || 0}}</div>
					<div class="hospitalContactBar" v-if="false">咨询</div>
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
			// hospitalList:[
			// 	{name:'八一儿童医院八一儿童医院八一儿童医院',address:'北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh1.png'},
			// 	{name:'八一儿童医院',address:'北京市东城区朝内北小街2号北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh2.png'},
			// 	{name:'八一儿童医院',address:'北京市东城区朝内北小街2号北京市东城区朝内北小街2号北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh3.png'},
			// 	{name:'八一儿童医院',address:'北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh1.png'},
			// 	{name:'八一儿童医院',address:'北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh2.png'},
			// 	{name:'八一儿童医院',address:'北京市东城区朝内北小街2号',score:'8.0',img:'../img/index/hh3.png'},
			// ]
		};
	},
	methods: {
		readAll(){
			location.href = './hospitalHouse.html'
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toDetail(data){
			location.href = `./hospitalHouseDetail.html?hospitalId=${data.hospitalId}&name=${data.hospitalName}&enter=index`
		}
	},
	computed:{
		hospitalList:function(){
			return this.data
		}
	},
	filters: {
		httpStr(link) {
			return 'https://images.weserv.nl/?url=' + link;
		}
	},
    mounted() {

	}
});