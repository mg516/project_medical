Vue.component('selectaddress', {
	template:
	`<div class="selectaddressBody">
		<el-select v-model="districtLevelId1" placeholder="请选择省" @change="selectLevel1" v-if="option.level>0">
			<el-option
				v-for="item in districtLevel1"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="districtLevelId2" placeholder="请选择市" @change="selectLevel2" v-if="districtLevel2 && option.level>1">
			<el-option
				v-for="item in districtLevel2"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="districtLevelId3" placeholder="请选择区" v-if="districtLevel3 && option.level>2">
			<el-option
				v-for="item in districtLevel3"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	</div>`,
	model: {
		prop: 'addressObj', // 这里prop的值对应的是上面props选项中的一个字段，这个字段也是父组件v-model的值
		event: 'change' // $emit触发的事件
	},
	props: {
		option:{
			type: Object,
			default: {
				level: 3
			}
		},
		addressObj: {
			type: Object,
			default: {
				levelId1:'',
				levelStr1:'',
				levelId2:'',
				levelStr2:'',
				levelId3:'',
				levelStr3:''
			}
		}
	},
	watch:{
		districtLevelId1(val){
			const addressObj = JSON.parse(JSON.stringify(this.addressObj))
			if(val){
				addressObj.levelId1 = val
				addressObj.levelStr1 = this.districtLevelObj1[val]
			}else{
				addressObj.levelId1 = ''
				addressObj.levelStr1 = ''
			}
			this.$emit('change', addressObj)
		},
		districtLevelId2(val){
			const addressObj = JSON.parse(JSON.stringify(this.addressObj))
			if(val){
				addressObj.levelId2 = val
				addressObj.levelStr2 = this.districtLevelObj2[val]
			}else{
				addressObj.levelId2 = ''
				addressObj.levelStr2 = ''
			}
			this.$emit('change', addressObj)
		},
		districtLevelId3(val){
			const addressObj = JSON.parse(JSON.stringify(this.addressObj))
			if(val){
				addressObj.levelId3 = val
				addressObj.levelStr3 = this.districtLevelObj3[val]
			}else{
				addressObj.levelId3 = ''
				addressObj.levelStr3 = ''
			}
			this.$emit('change', addressObj)
		}
	},
	data() {
		return {
			districts:null,
			districtLevelObj1: null,
			districtLevelObj2: null,
			districtLevelObj3: null,
			districtLevelId1: '',
			districtLevelId2: '',
			districtLevelId3: '',
			districtLevel1: null,
			districtLevel2: null,
			districtLevel3: null,
		};
	},
	methods: {
		getDistricts(){
			getHttp('../json/districts.json').then(res => {
				this.districts = res.data
				if(this.addressObj.levelStr1){
					this.addressObj.levelId1 = findKeyByValue(res.data['100000'],this.addressObj.levelStr1)
					if(this.addressObj.levelId1 && this.addressObj.levelStr2){
						this.addressObj.levelId2 = findKeyByValue(res.data[this.addressObj.levelId1],this.addressObj.levelStr2)
						if(this.addressObj.levelId2 && this.addressObj.levelStr3){
							this.addressObj.levelId3 = findKeyByValue(res.data[this.addressObj.levelId2],this.addressObj.levelStr3)
						}
					}
				}
				if(this.addressObj.levelId1){
					this.selectLevel0('100000')
					this.selectLevel1(this.addressObj.levelId1)
					this.selectLevel2(this.addressObj.levelId2)
					this.districtLevelId1 = this.addressObj.levelId1
					this.districtLevelId2 = this.addressObj.levelId2
					this.districtLevelId3 = this.addressObj.levelId3
				}else{
					this.selectLevel0('100000')
				}
			}).catch(err => {
				this.districts = {}
			})
		},
		selectLevel0(val){
			const districtLevel1 = []
			const districtLevelObj1 = {}
			for(let key in this.districts[val]){
				districtLevel1.push({
					value: key,
					label: this.districts[val][key]
				})
				districtLevelObj1[key] = this.districts[val][key]
			}
			this.districtLevel1 = districtLevel1
			this.districtLevelObj1 = districtLevelObj1
		},
		selectLevel1(val){
			let districtLevel2 = []
			const districtLevelObj2 = {}
			for(let key in this.districts[val]){
				districtLevel2.push({
					value: key,
					label: this.districts[val][key]
				})
				districtLevelObj2[key] = this.districts[val][key]
			}
			this.districtLevel2 = districtLevel2
			this.districtLevelObj2 = districtLevelObj2
			this.districtLevel3 = null
			this.districtLevelId2 = ''
			this.districtLevelId3 = ''
		},
		selectLevel2(val){
			let districtLevel3 = []
			const districtLevelObj3 = {}
			for(let key in this.districts[val]){
				districtLevel3.push({
					value: key,
					label: this.districts[val][key]
				})
				districtLevelObj3[key] = this.districts[val][key]
			}
			this.districtLevel3 = districtLevel3
			this.districtLevelId3 = ''
			this.districtLevelObj3 = districtLevelObj3
		}
	},
    mounted() {
		this.getDistricts()
	}
});