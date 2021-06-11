Vue.component('drugstoremap', {
	template:
	`<div class="drugstoremapBody">
		<div class="drugstoremapLabel">
			<div class="row">
				<aside class="profile-nav col-lg-3">
					<section class="panel">
						<ul xsts-tab class="nav nav-pills nav-stacked" id="panel">
							<li class="active" @click="baiduMapBack()"><a><i class="icon-location-arrow"></i>当前位置</a></li>
							<li class="active" @click="baiduMapSearch()"><a><i class="icon-location-arrow"></i>附近的医院</a></li>
						</ul>
					</section>
				</aside>
				<aside class="profile-info col-lg-9 dictionaryMapContent">
					<div id="r-result">
						<input type="text" id="suggestId" class="form-control" placeholder="搜索您想要的位置">
					</div>
					<div id="searchResultPanel" style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"></div>
				</aside>
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
			this.MapObj.panTo(new BMap.Point(this.Point.lat,this.Point.lng));
			this.LocalObj.searchNearby('',this.Point,1000);
		},
		baiduMapSearch(){
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
			// 添加控件
			map.addControl(new BMap.NavigationControl());
			// 范围区域
			var circle = new BMap.Circle(point,1000,{fillColor:"#ccc", strokeWeight: 1 ,fillOpacity: 0.2, strokeOpacity: 0.2});
			map.addOverlay(circle);
			var local =  new BMap.LocalSearch(map, {renderOptions: {map: map, autoViewport: false}});
			this.LocalObj = local
			// 查询附近的医院
			this.baiduMapSearch()
			// 房源位置
			// var myIcon = new BMap.Icon("img/mappiont.png", new BMap.Size(30,37));
			// var marker = new BMap.Marker(point,{icon:myIcon});
			var marker = new BMap.Marker(point);
			map.addOverlay(marker);
			//  跳动标注
			marker.setAnimation(BMAP_ANIMATION_BOUNCE);
			
			// 输入框搜索
			function G(id) {
				return document.getElementById(id);
			}
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
				G("searchResultPanel").innerHTML = str;
			});
			var myValue;
			ac.addEventListener("onconfirm",function(e){
				var _value = e.item.value;
				myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
				G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
				setPlace();
			});
			function setPlace(){
				function myFun(results){
					// debugger
					that.removeOverlay()
					var pp = that.LocalObj.getResults().getPoi(0).point;
					map.centerAndZoom(pp, 18);
					// map.addOverlay(new BMap.Marker(pp));
					const point1 = new BMap.Point(pp.lat,pp.lng);
					that.Point = point1

					const marker1 = new BMap.Marker(point1);
					map.addOverlay(marker1);
					//  跳动标注
					marker1.setAnimation(BMAP_ANIMATION_BOUNCE);
				}
				var local = new BMap.LocalSearch(map,{
					onSearchComplete: myFun
				});
				local.search(myValue);
				that.LocalObj = local
			}
		},
		//获取GPS坐标 
		getPoint(){
			if (navigator.geolocation) { 
				navigator.geolocation.getCurrentPosition(this.showMap, this.handleError, { enableHighAccuracy: true, maximumAge: 1000 }); 
			} else { 
				alert("您的浏览器不支持使用HTML 5来获取地理位置服务"); 
			}
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
			this.loadMap([116.404, 39.915])
		},
		initMap(){
			this.getPoint()
		}
	},
    mounted() {
		this.initMap()
	}
});