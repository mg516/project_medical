Vue.component('breadcrumb', {
	template:
	`<div class="breadcrumbBody">
		<div class="breadcrumbLabel">当前位置：</div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item
				v-for="(item,index) in breadcrumblist"
				:key="index"
			>
				<a :href="item.link" v-if="item.link">{{item.name}}</a>
				<span v-else>{{item.name}}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>`,
	props: {
		breadcrumblist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		
	},
    mounted() {

	}
});