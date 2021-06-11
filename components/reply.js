Vue.component('reply', {
	template:
	`<div class="replyBody">
		<div class="replyInputBox">
			<div class="userImg"><img src="../img/userImg.png" /></div>
			<el-input :placeholder="placeholder"></el-input>
			<div class="replySubmit">发布</div>
		</div>
		<div class="replyBox">
			<div class="replyItemBox" v-for="(item,index) in replyList" :key="index">
				<div class="replyAvatar"><img :src="item.img" :alt="item.username"/></div>
				<div class="replyContent">
					<div class="userName">{{item.username}}</div>
					<div class="replyTime">{{item.time}}</div>
					<div class="replyText">{{item.content}}</div>
					<div class="replyHandleBox">
						<div class="replyHandleLeft" @click="handleReply(item)">回复</div>
						<div class="replyHandleRight">
							<div class="replyHandleBar">举报</div>
							<div class="replyHandleBar">删除</div>
						</div>
					</div>
					<div class="replyHandleLike">
						<span>{{item.like}}</span>
						<img v-if="item.ifLike" src="../img/like_yellow.png" />
						<img v-else src="../img/like_black.png" />
					</div>
					<div class="curReply">
						<div class="curReplyItem" v-for="(rItem,rIndex) in item.reply" :key="rIndex">
							<span class="replyAvatarLevel2">{{rItem.username}}</span>
							<span v-if="rItem.replied"> 回复 </span>
							<span v-if="rItem.replied" class="replyAvatarLevel2">{{rItem.replied}}</span>
							<span>:</span>
							<span>{{rItem.content}}</span>
							<div class="replyHandleBox">
								<div class="replyHandleLeft" @click="handleReply(rItem)">回复</div>
								<div class="replyHandleRight">
									<div class="replyHandleBar">举报</div>
									<div class="replyHandleBar">删除</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	props: {
		// activeName: String,
		// showUnit: Boolean,
		// userStationNum: String
	},
	data() {
		return {
			placeholder: '发表一下自己的一些观点或看法吧',
			replyList:[
				{
					id:'1',
					username:'锐锐锐锐爷',
					img:'../img/userImg.png',
					time:'2021-01-12 13:25:34',
					content: '老瓜最后一节给我看哭了！前7投1中，后7投5中。20+5+3+2+2防守大闸石锤了，爷青回啊',
					like:10,
					ifLike: true,
					reply:[
						{username:'我从未考虑湖人',replied:'夏夜的星光',content:'西卡连续两天错失绝杀西卡连续两天错失绝杀西卡连续两天错失绝杀西卡连续两天错失绝杀'},
						{username:'我从未考虑湖人',replied:'',content:'西卡连续两天错失绝杀'},
					]
				},
				{
					id:'2',
					username:'锐锐锐锐爷',
					img:'../img/userImg.png',
					time:'2021-01-12 13:25:34',
					content: '老瓜最后一节给我看哭了！前7投1中，后7投5中。20+5+3+2+2防守大闸石锤了，爷青回啊',
					like:10,
					ifLike: false,
					reply:[]
				},
			],
			activeIndex: 0,
		};
	},
	methods: {
		checkAddress(index) {
			this.activeIndex = index
		},
		toMedicineDetail(data){
			location.href = './medicineDetail.html'
		},
		handleReply(data){
			this.placeholder = `回复 @${data.username}`
		}
	},
    mounted() {

	}
});