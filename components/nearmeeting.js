Vue.component('nearmeeting', {
	template:
	`<div class="nearmeetingBody">
		<div class="sideModelLabelBox">
			<div class="modelLabel">{{title}}</div>
		</div>
		<div class="nearmeetingBox">
			<div class="nearmeetingItem" v-for="(item,index) in meetinglist" :key="index" @click="toMeetinfDetail(item)">· {{item.titileStr}}</div>
		</div>
	</div>`,
	props: {
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			meetinglist:[]
		};
	},
	methods: {
		toMeetinfDetail(data) {
			location.href = `./messageMeetingDetail.html?titleId=${data.titleId}`
		},
		getMeeting(){
			postTitleListByCatalogId().then(res => {
				if(res.data && res.data.msg === "success"){
					const meetinglist = []
					res.data.data.map(item => {
						if(item.yiliaoModel === '会议'){
							if(meetinglist.length<10) meetinglist.push(item)
						}
					})
					this.meetinglist = meetinglist
				}
			})
		}
	},
	mounted() {
		this.getMeeting()
	}
});