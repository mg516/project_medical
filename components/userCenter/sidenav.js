Vue.component('sidenav', {
	template:
	`<div class="centerSidenav">
		<div
			class="navItem"
			:class="{'active':index === activeindex}"
			v-for="(item,index) in menulist"
			:key="index"
			@click="toLink(item.link,index)"
		>{{item.name}}</div>
	</div>`,
	props: {
		menulist:{
			type: Array,
			default: () => [],
			required: true
		},
		activeindex:{
			type: Number,
			default: 0,
			required: true
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		toLink(path,index) {
			if(path){
				location.href = path
			}else{
				this.$emit('checktab',index)
			}
		}
	},
    mounted() {

	}
});