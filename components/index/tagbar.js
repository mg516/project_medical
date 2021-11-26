Vue.component('tagbar', {
	template:
	`<div class="tagbarBody">
		<el-popover
			v-if="list.length>12"
			class="readAll"
			placement="bottom"
			width="200"
			trigger="click">
			<div class="menuNavBox">
				<div class="menuNavItem" @click="toPage('./essayList.html?catalogId='+item.catalogId+'&catalogName='+item.catalogName)"
					:index="'1-'+item.catalogId"
					v-for="(item,index) in list"
					:key="index"
				>{{item.catalogName}}</div>
			</div>
			<div slot="reference">查看全部</div>
		</el-popover>
		<div class="tagbarItem" v-for="(item,index) in tagbarList" :key="'level1-'+index">
			<span @click="toEssayList(iitem)" :title="item.link" v-for="(iitem,iindex) in item" :key="'level2-'+iindex">{{iitem.catalogName}}</span>
		</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			list: [],
			tagbarList:[
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}],
				// [{catalogName:'心血管',link:''},{catalogName:'心血管',link:''},{catalogName:'心血管',link:''}]
			]
		};
	},
	methods: {
		// readAllEssay(){
		// 	location.href = './essayList.html?catalogId=all&catalogName=全部'
		// },
		toPage(path){
			location.href = path
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toEssayList(item){
			location.href = './essayList.html?catalogId='+item.catalogId+'&catalogName='+item.catalogName
		},
		getTagbarList(){
			postModelListByName('学术').then(res => {
				if(res.data && res.data.msg === "success"){
					let list = res.data.data
					this.list = list
					this.tagbarList = [list.slice(0,3),list.slice(3,6),list.slice(6,9),list.slice(9,12)]
				}
			})
		}
	},
    mounted() {
		this.getTagbarList()
	}
});