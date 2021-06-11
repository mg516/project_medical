Vue.component('banner', {
	template:
	`<div class="bannerBody">
		<el-carousel :interval="5000" trigger="click">
			<el-carousel-item v-for="(item,index) in bannerList" :key="index">
				<img :src="item.imgUrl" @click="toDetail(item)" />
			</el-carousel-item>
		</el-carousel>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			bannerList: []
		};
	},
	methods: {
		toDetail(data){
			window.open(data.httpStr)
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		getBanner(){
			postAdvertisementList().then(res => {
				if(res.data.msg === "success"){
					res.data.data.map(item => {
						item.imgUrl = baseUrl + item.pictureStr
					})
					this.bannerList = res.data.data.filter(item => item.isAble==="Y")
				}
			})
		}
	},
    mounted() {
		this.getBanner()
	}
});