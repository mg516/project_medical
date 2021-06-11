Vue.component('hospitalranking', {
	template:
	`<div class="hRankingBody">
		<div class="hRankingTh hRankingTr">
			<div class="hRankTd">综合排名</div>
			<div class="hRankTd">医院名称</div>
			<div class="hRankTd">专科声誉</div>
			<div class="hRankTd">科研学术</div>
			<div class="hRankTd">综合得分</div>
		</div>
		<div class="hRankingTr" v-for="(item,index) in rankingList" :key="index">
			<div class="hRankTd">{{index + 1}}</div>
			<div class="hRankTd colorBlue">{{item.name}}</div>
			<div class="hRankTd">{{item.score1}}</div>
			<div class="hRankTd">{{item.score2}}</div>
			<div class="hRankTd">{{item.score3}}</div>
		</div>
	</div>`,
	props: {
		breadcrumblist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			rankingList: [
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
				{name:'深圳市瀚蓝中医院',score1:'99.00',score2:'99.00',score3:'99.00'},
			]
		};
	},
	methods: {
		
	},
    mounted() {

	}
});