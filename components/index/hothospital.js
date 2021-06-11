Vue.component('hothospital', {
	template:
	`<div class="hothospitalBody">
		<div class="chooseAddress">选择热门地区</div>
		<div class="hotAddress">
			<div
				class="hotAddressItem"
				:class="[{'active':activeIndex===index}]"
				v-for="(item,index) in hotAddressList"
				:key="index"
				@click="checkAddress(index)"
			>{{item.address}}</div>
		</div>
		<div class="hospitalList">
			<div class="hospitalItem" v-for="(item,index) in hospitalList" :key="index" @click="toHospitalHouseDetail(item)">
				<div class="hospitalImg">
					<img :src="item.pictureStr | httpStr" />
				</div>
				<div class="hospitalInfo">
					<div class="hospitalName" :title="item.hospitalName">{{item.hospitalName}}</div>
					<div class="hospitalRemark" :title="item.addressStr">{{item.addressStr}}</div>
				</div>
			</div>
		</div>
		<div class="readMore" @click="toMore">查看更多</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			hotAddressList:[],
			hospitalList:[],
			activeIndex: 0,
		};
	},
	methods: {
		checkAddress(index) {
			if(this.activeIndex === index){
				this.activeIndex = -1
			}else{
				this.activeIndex = index
			}
			this.getHospitalList()
		},
		toMore(){
			location.href = `./hospitalHouse.html?tab=0`
		},
		initComp(){
			this.getCityList()
		},
		getCityList(){
			postDictByType('yiliao_hot_hospital_province').then(res => {
				this.hotAddressList = res.data.data.map(item => {
					return {
						address: item.dictValue
					}
				})
				this.getHospitalList()
			})
		},
		getHospitalList(){
			const param = {
				beginNo:1,
				endNo:5
			}
			if(this.activeIndex > -1){
				param.provinceName = this.hotAddressList[this.activeIndex].address
			}
			postSearchHospital(param).then(res => {
				this.hospitalList = res.data.data.success
			})
		},
		toHospitalHouseDetail(data){
			location.href = `./hospitalHouseDetail.html?hospitalId=${data.hospitalId}`
		}
	},
    mounted() {
		this.initComp()
	}
});