Vue.component('drugstoremap', {
	template:
	`<div class="drugstoremapBody">
		<div class="drugstoremapLabel">
			当前位置深圳
			<div class="drugstoremapBar">更换地址</div>
		</div>
		<div class="drugstoremapBox" id="container"></div>
	</div>`,
	props: {
		drugstoremaplist:{
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
		var map = new BMapGL.Map('container'); // 创建Map实例
		map.centerAndZoom('深圳市', 12); // 初始化地图,设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
	}
});