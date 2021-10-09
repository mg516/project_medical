Vue.component('drugstoremap', {
	template:
	`<div class="drugstoremapBody">
		<div class="drugstoremapHandle">
			<div class="mapBtn" title="当前位置" @click="baiduMapBack()">当前位置</div>
			<div class="mapBtn" title="附近的医院" @click="baiduMapSearch()">附近的医院</div>
			<div class="mapInput">
				<div id="r-result">
					<input type="text" id="suggestId" class="form-control" placeholder="搜索您想要的位置">
				</div>
				<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
			</div>
		</div>
		<div class="drugstoremapBox" id="dictionaryMap"></div>
	</div>`,
	props: {
		drugstoremaplist:{
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			MapObj: null,
			Point: null,
			LocalObj: null
		};
	},
	watch: {
		Point(val,oldval){
			// console.log(val,oldval);
			// if(val && oldval && val.lat === oldval.lat && val.lng === oldval.lng){
			// 	return
			// }
			// this.baiduMapSearch()
		}
	},
	methods: {
		// 清除覆盖物
		removeOverlay() {
			this.MapObj.clearOverlays();
		},
		// 返回中心定位
		baiduMapBack(){
			// this.MapObj.reset();
			this.MapObj.panTo(new BMap.Point(this.Point.lng,this.Point.lat));
			this.LocalObj.searchNearby('',this.Point,1000);
			this.baiduMapSearch()
		},
		baiduMapSearch(){
			this.removeOverlay()
			// 范围区域
			this.markCenter(this.Point)
			var circle = new BMap.Circle(this.Point,1000,{fillColor:"#ccc", strokeWeight: 1 ,fillOpacity: 0.2, strokeOpacity: 0.2});
			this.MapObj.addOverlay(circle);

			var local =  new BMap.LocalSearch(this.MapObj, {
				renderOptions: {map: this.MapObj, autoViewport: false},
				onSearchComplete: (results) => {
					// this.MapObj.centerAndZoom(this.Point, 18);
					// setTimeout(() => {
					// 	this.MapObj.setZoom(17);
					// 	this.MapObj.setCenter(this.Point);
					// },1000)
				}
			});
			this.LocalObj = local
			// 公交,医院,超市,学校,餐厅,公园
			this.LocalObj.searchNearby('医院',this.Point,1000);
		},
		loadMap(point){
			const that = this
			// 初始配置
			var map = new BMap.Map("dictionaryMap"), pointAll = point,
			lat = parseFloat(pointAll[0]), lng = parseFloat(pointAll[1]), point = new BMap.Point(lat,lng);
			this.MapObj = map
			this.Point = point
			map.centerAndZoom(point, 15);

			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
			map.addControl(scaleCtrl);
			var zoomCtrl = new BMapGL.ZoomControl();  // 添加比例尺控件
			map.addControl(zoomCtrl);
			// 添加控件
			// map.addControl(new BMap.NavigationControl());

			// 查询附近的医院
			this.baiduMapSearch()

			this.markCenter(point)
			// //  跳动标注中心点
			// var marker = new BMap.Marker(point);
			// map.addOverlay(marker);
			// marker.setAnimation(BMAP_ANIMATION_BOUNCE);
			
			// 关键字搜索，下拉结果
			var ac = new BMap.Autocomplete({"input":"suggestId","location":map});
			ac.addEventListener("onhighlight",function(e){
				var str = "";
				var _value = e.fromitem.value;
				var value = "";
				if (e.fromitem.index > -1) {
					value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				}
				str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
				value = "";
				if (e.toitem.index > -1) {
					_value = e.toitem.value;
					value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				}
				str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
				document.getElementById("searchResultPanel").innerHTML = str;
			});
			var myValue;
			ac.addEventListener("onconfirm",function(e){
				var _value = e.item.value;
				myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				document.getElementById("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
				setPlace();
			});
			function setPlace(){
				function myFun(results){
					that.removeOverlay()
					var pp = that.LocalObj.getResults().getPoi(0).point;
					map.centerAndZoom(pp, 15);
					// map.addOverlay(new BMap.Marker(pp));
					const point1 = new BMap.Point(pp.lng,pp.lat);
					that.Point = point1

					that.markCenter(point1)
					// const marker1 = new BMap.Marker(point1);
					// map.addOverlay(marker1);
					// //  跳动标注
					// marker1.setAnimation(BMAP_ANIMATION_BOUNCE);
				}
				var local = new BMap.LocalSearch(map,{
					onSearchComplete: myFun
				});
				local.search(myValue);
				that.LocalObj = local
			}
		},
		markCenter(point){
			const marker = new BMap.Marker(point);
			this.MapObj.addOverlay(marker);
			//  跳动标注
			marker.setAnimation(BMAP_ANIMATION_BOUNCE);
		},
		//获取GPS坐标 
		getPoint(){
			const point = ls_get('pointObj')
			this.loadMap([point.lng, point.lat])
			// if (navigator.geolocation) {
			// 	navigator.geolocation.getCurrentPosition(this.showMap, this.handleError, { enableHighAccuracy: true, maximumAge: 1000 }); 
			// } else { 
			// 	alert("您的浏览器不支持使用HTML 5来获取地理位置服务"); 
			// }
		},
		showMap(value) {
			var longitude = value.coords.longitude;
			var latitude = value.coords.latitude;
			this.loadMap([longitude, latitude])
		},
		handleError(value) {
			switch (value.code) {
			case 1:
				this.$message.warning("位置服务被拒绝")
				break;
			case 2:
				this.$message.warning("暂时获取不到位置信息")
				break;
			case 3:
				this.$message.warning("获取信息超时")
				break;
			case 4:
				this.$message.warning("未知错误")
				break;
			}
			const point = ls_get('pointObj')
			this.loadMap([point.lng, point.lat])
			// this.loadMap([114.2113317377854,30.513731225442783])
		},
		initMap(){
			this.getPoint()
		}
	},
    mounted() {
		this.initMap()
		// getMapLocation().then(res => {
		// 	debugger
		// })

		// http://api.map.baidu.com/highacciploc/v1?qcip=220.181.38.113&qterm=pc&ak=请输入您的AK&coord=bd09ll

		// var map = new BMap.Map("dictionaryMap");
		// var point = new BMap.Point(116.331398,39.897445);
		// map.centerAndZoom(point,12);

		// var geolocation = new BMap.Geolocation();
		// // 开启SDK辅助定位
		// geolocation.enableSDKLocation();
		// geolocation.getCurrentPosition(function(r){
		// 	debugger
		// 	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		// 		var mk = new BMap.Marker(r.point);
		// 		map.addOverlay(mk);
		// 		map.panTo(r.point);
		// 		alert('您的位置：'+r.point.lng+','+r.point.lat);
		// 	}
		// 	else {
		// 		alert('failed'+this.getStatus());
		// 	}        
		// });
	}
});