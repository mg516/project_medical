Vue.component('medicineinfo', {
	template:
	`<div class="medicineInfoBody">
		<div class="medicineInfoHeader">
			<div class="medicineInfoImg"><img :src="data.pictureStr|httpStr" /></div>
			<div class="medicineInfoCont">
				<div class="medicineName">{{data.productName}}</div>
				<div class="medicineMsg">
					<div class="medicineMsgItem">批准文号：{{data.approvalNumber}}</div>
					<div class="medicineMsgItem">主要规格：{{data.spectStr}}</div>
				</div>
				<div class="medicineLabel" v-if="false">
					产品相关：
					<span v-for="(item,index) in data.proRelate" :key="index">{{item}}</span>
				</div>
			</div>
		</div>
		<div class="medicineInfoParam">
			<div class="medicineInfoPItem w60">产品名称：<span>{{data.productName}}</span></div>
			<div class="medicineInfoPItem w40">批准文号：<span>{{data.approvalNumber}}</span></div>
			<div class="medicineInfoPItem w60">产品分类：<span>{{data.catalogName}}</span></div>
			<div class="medicineInfoPItem w40">主要规格：<span>{{data.spectStr}}</span></div>
			<div class="medicineInfoPItem w60">英文名称：<span>无</span></div>
			<div class="medicineInfoPItem w40">包　　装：<span>{{data.packStr}}</span></div>
			<div class="medicineInfoPItem w100">用　　途：<span v-html="data.useesStr"></span></div>
		</div>
		<div class="medicineInfoExplain">
			<div class="medicineInfoEItem" v-html="data.descriptionStr"></div>
			<div class="medicineInfoETitle" v-if="false">产品说明</div>
			<div class="medicineInfoEItem" v-if="false">【名 称】：叶酸片</div>
			<div class="medicineInfoEItem" v-if="false">【成 份】：主要成份为叶酸。</div>
			<div class="medicineInfoEItem" v-if="false">【性 状】：本品为黄色或橙黄色片</div>
			<div class="medicineInfoEItem" v-if="false">【规 格】：每片0.4毫克</div>
			<div class="medicineInfoEItem" v-if="false">【作 用】：叶酸是一种水溶性B族维生素，最初从菠菜叶子中分离提取出来，为 机体细胞生长和繁殖的必需物质。</div>
			<div class="medicineInfoEItem" v-if="false">【适 应 症】：是妊娠期、哺乳期妇女的预防用药。妇女怀孕早期增补叶酸可降低 神经管畸形的发生。</div>
			<div class="medicineInfoEItem" v-if="false">【用 法】：妇女从怀孕前一个月至怀孕后三个月末增补叶酸预防神经管畸形的 效果最好，此时是胎儿中枢神经的发育时期。由于我国育龄妇女体 内叶酸水平普遍较低，而且妇女怀孕后体内叶酸水平将随孕期增加 而逐步降低，因此妇女从结婚时或计划怀孕时开始服用，直到孕后 三个月末比较合适，更早开始服用和延长服用时间对妇女本身也是 有益的。经产妇再次怀孕时，也应从孕前1-3个月开始服用，以预防 神经管畸形的 发生，有条件的孕妇可在整个孕期和哺乳期坚持服用 ，以利母体健康，胎儿及新生儿的成长发育。</div>
			<div class="medicineInfoEItem" v-if="false">【用 量】：预防用：每日1-2片，漏服不补。每天最大服用量不宜超过2片。成 人和儿童也可服用。剂量为每日1片。应严格控制每日的服用量，不 可使用市售大剂量“叶酸片”（每片含叶酸5毫克），以避免对孕妇 和胎儿产生不良作用。</div>
			<div class="medicineInfoEItem" v-if="false">【不良反应】：偶见不良反应，罕见过敏反应。</div>
		</div>
	</div>`,
	props: {
		data :{
			type:Object,
			default:()=>{}
		}
	},
	filters: {
		httpStr(link) {
			return baseUrl + link;
		}
	},
	data() {
		return {
			medicineInfo:{
				name:'复方醋酸地塞米',
				img:'../img/index/h1.png',
				docNo:'国药准字H51022634',
				type:'0.5g×100片/瓶×100瓶/件；0.5g×12片×2板/盒×500',
				proRelate:['招商信息','供应信息','批准信息','价格信息'],
				param: {},

			}
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	},
    mounted() {

	}
});