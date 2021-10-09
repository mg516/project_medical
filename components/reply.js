Vue.component('reply', {
	template:
	`<div class="replyBody">
		<div class="replyHandleBtn" @click="handleReply(null)">评论 ({{replyList.length}})</div>
		<div class="replyInputBox" v-if="userDetailInfo">
			<div class="userImg"><img :src="userDetailInfo.pictureStr|httpStr" /></div>
			<el-input :placeholder="placeholder" v-model="replyContent"></el-input>
			<div class="replySubmit" @click="submitReply">发布</div>
		</div>
		<div class="replyBox">
			<div class="replyItemBox" v-for="(item,index) in replyList" :key="index">
				<div class="replyAvatar"><img :src="item.fromImg|httpStr" :alt="item.fromName"/></div>
				<div class="replyContent">
					<div class="userName">{{item.fromName}}</div>
					<div class="replyTime">{{item.updateTime}}</div>
					<div class="replyText">{{item.content}}</div>
					<div class="replyHandleBox">
						<div class="replyHandleLeft" @click="handleReply(item)">回复</div>
						<div class="replyHandleRight" v-if="false">
							<div class="replyHandleBar">举报</div>
							<div class="replyHandleBar">删除</div>
						</div>
					</div>
					<div class="replyHandleLike" @click="editReply(item)">
						<span>{{item.likeNum}}</span>
						<img v-if="item.likeNum" src="../img/like_yellow.png" />
						<img v-else src="../img/like_black.png" />
					</div>
					<div class="curReply" v-if="item.reply && item.reply.length>0">
						<div class="curReplyItem" v-for="(rItem,rIndex) in item.reply" :key="rIndex">
							<span class="replyAvatarLevel2">{{rItem.fromName}}</span>
							<span v-if="rItem.toName"> 回复 </span>
							<span v-if="rItem.toName" class="replyAvatarLevel2">{{rItem.toName}}</span>
							<span>:</span>
							<span>{{rItem.content}}</span>
							<div class="replyHandleBox">
								<div class="replyHandleLeft" @click="handleReply(rItem)">回复</div>
								<div class="replyHandleRight" v-if="false">
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
		titleid: {
			type: String
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			userDetailInfo: UserDetailInfo,
			placeholder: '发表一下自己的一些观点或看法吧',
			replyContent: '',
			replyedObj: '', // 被评论对象
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
	watch: {
		titleid(val){
			if(val){
				this.getCommentList()
			}
		}
	},
	methods: {
		editReply(data){
			let param = JSON.parse(JSON.stringify(data))
			delete param.reply
			param.likeNum++
			postUpdateLikeNum(param).then(res => {
				if(res.data.code === 0){
					this.getCommentList()
				}
			})
		},
		// 提交评论、回复
		submitReply(){
			if(!this.replyContent.trim()){
				this.$message.error({
					message: '请填写评论或回复内容'
				})
				this.replyContent = ''
				return
			}
			if(!this.replyedObj){
				const param = {
					content: this.replyContent,
					fromId: this.userDetailInfo.userId,
					fromImg: this.userDetailInfo.pictureStr,
					fromName: this.userDetailInfo.nickStr,
					likeNum: 0,
					ownerId: '', //被评论者的id
					titleId: this.titleid
				}
				postAddCommentsInfo(param).then(res => {
					if(res.data.code === 0){
						this.getCommentList()
						this.replyContent = ''
					}else{
						this.$message.error({
							message: res.data.msg
						})
					}
				})
			}else{
				const param = {
					content: this.replyContent,
					commentId: this.replyedObj.commentId || this.replyedObj.id,
					toId: this.replyedObj.fromId,
					toImg: this.replyedObj.fromImg,
					toName: this.replyedObj.fromName,
					fromId: this.userDetailInfo.userId,
					fromImg: this.userDetailInfo.pictureStr,
					fromName: this.userDetailInfo.nickStr,
					createTime: formatDate(new Date()),
					updateTime: formatDate(new Date()),
				}
				postAddCommentsReply(param).then(async res => {
					if(res.data.code === 0){
						this.getCommentByCommentId(param.commentId)
						this.replyContent = ''
					}else{
						this.$message.error({
							message: res.data.msg
						})
					}
				})
			}
		},
		getCommentByCommentId(id){
			const param = {
				commentId: id
			}
			postCommentsByCommentId(param).then(res => {
				this.replyList.forEach((item,index) => {
					if(String(item.id) === String(id)){
						// item.reply = res.data.data
						this.$set(this.replyList[index],'reply',res.data.data)
					}
				})
			})
		},
		// 查询评论
		getCommentList(){
			const param = {
				titleId: this.titleid 
			}
			postCommentsByTitleId(param).then(res => {
				// this.replyList = this.replyList.concat(res.data.data)
				this.replyList = res.data.data
				this.replyList.forEach(item => {
					this.getCommentByCommentId(item.id)
				})
			})
		},
		handleReply(data){
			if(!this.userDetailInfo){
				this.$message.error({
					message: '请登录之后评论'
				})
				return
			}
			if(data){
				this.placeholder = `回复 @${data.fromName}`
				this.replyedObj = data
			}else{
				this.placeholder = ''
				this.replyedObj = null
			}
		}
	},
    mounted() {
		
	}
});