Vue.component('topicitem', {
	template:
	`<div class="topicBody">
		<div class="topicLeft">
			<div class="topicUserImg" @click="toUserInfo">
				<img :src="topicdata.userImg" />
			</div>
		</div>
		<div class="topicRight">
			<div class="topicUserInfo">
				<div class="topicUserName">{{topicdata.username}}</div>
				<div class="topicUserTime">{{topicdata.time}}前</div>
			</div>
			<div class="topicTitle">{{topicdata.title}}</div>
			<div class="topicContent">{{topicdata.content}}</div>
			<div class="topicImg">
				<img v-for="(item,index) in topicdata.img" :key="index" :src="topicdata.userImg" />
			</div>
			<div class="topicInteractive">
				<div class="topicStar">{{topicdata.star}}点赞</div>
				<div class="topicReply">{{topicdata.reply}}回复</div>
			</div>
		</div>
	</div>`,
	props: {
		topicdata:{
			type: Object,
			default: {
				username:'',
				time:'',
				userImg:'',
				title:'',
				content:'',
				star:0,
				reply:0,
				img:[]
			}
		}
	},
	data() {
		return {
			interestedList:[
				{title:'那个医院好',img:'../img/index/h1.png'},
				{title:'那个医院好',img:'../img/index/h2.png'},
				{title:'那个医院好',img:'../img/index/h3.png'},
				{title:'那个医院好',img:'../img/index/h4.png'},
				{title:'那个医院好',img:'../img/index/h1.png'},
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		toUserInfo(){
			location.href = './userCenterPerson.html'
		}
	},
    mounted() {

	}
});