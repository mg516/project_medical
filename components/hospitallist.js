Vue.component('hospitallist', {
	template:
	`<div class="hospitallistBody">
		<div class="hospitallistLabel">共 <span class="doctorNum">{{list.count}}</span> 个医院</div>
		<div class="hospitallistBox">
			<div class="doctorItem" @click="toHospitalHouseDetail(item)" v-for="(item,index) in hospitallist" :key="index">
				<div class="doctorImg"><img :src="item.pictureStr|httpStr" /></div>
				<div class="doctorInfo">
					<div class="doctorName">
						<div class="doctorNameText">{{item.hospitalName}}</div>
						<div class="doctorType">{{item.gradeStr}}</div>
					</div>
					<div class="doctorTel">电话：{{item.telStr}}</div>
					<div class="doctorAddress">地址：{{item.addressStr}}</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		list: {
			type: Object,
			default: () => {
				success: []
			}
		}
		// hospitallist: {
		// 	type: Object,
		// 	default: () => {}
		// }
	},
	watch: {
		list(val){
			if(val && val.success){
				this.hospitallist = JSON.parse(JSON.stringify(val.success))
			}
		}
	},
	data() {
		return {
			hospitallist: [
				// {name:'深圳市瀚蓝中医院',type:'特等医院',tel:'23849249',address:'花都区龙珠路1-17号2楼',img:'../img/index/h1.png'},
				// {name:'深圳市瀚蓝中医院',type:'特等医院',tel:'23849249',address:'花都区龙珠路1-17号2楼',img:'../img/index/h2.png'},
				// {name:'深圳市瀚蓝中医院',type:'特等医院',tel:'23849249',address:'花都区龙珠路1-17号2楼',img:'../img/index/h3.png'},
				// {name:'深圳市瀚蓝中医院',type:'特等医院',tel:'23849249',address:'花都区龙珠路1-17号2楼',img:'../img/index/h4.png'},
				// {name:'深圳市瀚蓝中医院',type:'特等医院',tel:'23849249',address:'花都区龙珠路1-17号2楼',img:'../img/index/h1.png'},
			]
		};
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	methods: {
		toHospitalHouseDetail(data){
			location.href = `./hospitalHouseDetail.html?hospitalId=${data.hospitalId}`
		}
	},
    mounted() {
		
	}
});