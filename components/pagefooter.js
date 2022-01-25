Vue.component('pagefooter', {
	template:
	`<div class="pagefooterBody">
		<div class="pagefooterBox">
			<div class="footerTop">
				<div class="footerTopL">
					<div class="footerLogo"></div>
				</div>
				<div class="footerTopR">
					<div class="footerWebMsg">
						<div class="msgItem" v-for="(item,index) in webMsgList" :key="index" @click="toWebLink(item.link)">
							<span class="msgLink">{{item.name}}</span>
							<span class="msgSpace" v-if="index < webMsgList.length - 1"> - </span>
						</div>
					</div>
					<div class="footMyCode"></div>
				</div>
			</div>
			<div class="line"></div>
			<div class="footerBottom">
				<div class="footerBottomL">
					<div class="webRecord"><a  class="bottom-line-item" target="_blank" class="bottom-line-item" href="https://beian.miit.gov.cn">粤ICP备2021032659号-1</a></div>
					<div class="webRecordNo">粤公网安备 44030502004134号</div>
				</div>
				<div class="footerBottomR">
					<span class="webLinkLabel">友情链接：</span>
					<span class="webLink">数字尾巴</span>
					<span class="webLink">易利科技</span>
					<span class="webLink">GEETEST 极验</span>
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
			webMsgList: [
				{name:'关于公司',link:'./relatedLinks.html'},
				{name:'网站简介',link:'./relatedLinks.html'},
				{name:'服务项目',link:'./relatedLinks.html'},
				{name:'使用帮助',link:'./relatedLinks.html'},
				{name:'意见反馈',link:'./relatedLinks.html'},
				{name:'法律声明',link:'./relatedLinks.html'},
				{name:'联系我们',link:'./relatedLinks.html'},
			]
		};
	},
	methods: {
		toWebLink(link){
			location.href = link
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});