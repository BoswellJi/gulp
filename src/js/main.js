// var map=new Map('app',{maxZoom:1});

// 百度地图API功能
var map = new BMap.Map("app"); // 创建Map实例

// 设置地图中心点
// 初始化地图,设置中心点坐标和地图级别
// var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom('重庆', 11);

// 给地图添加控件
// map.addControl(new BMap.MapTypeControl({type:BMAP_MAPTYPE_CONTROL_MAP}));
// map.addControl(new BMap.PanoramaContro());

// 创建覆盖物，多边形
// var polygon = new BMap.Polygon([
//     new BMap.Point(116.387112, 39.920977),
//     new BMap.Point(116.385243, 39.913063),
//     new BMap.Point(116.394226, 39.917988),
//     new BMap.Point(116.401772, 39.921364),
//     new BMap.Point(116.41248, 39.927893)
// ], { strokeColor: "blue", strokeWeight: 2, strokeOpacity: 0.5 });
// map.addOverlay(polygon);

// 定位控件
var g = new BMap.GeolocationControl({ showAddressBar: true });
// 不支持html5的定位特性的，会有问题
// g.location();
// 定位信息
// var add=g.getAddressComponent(); 
// alert(add.streetNumber);
map.addControl(g);


// 地图的平移缩放控件
var n = new BMap.NavigationControl({ type: BMAP_NAVIGATION_CONTROL_LARGE });
console.log(n.getType());

map.addControl(n);

// 地图缩放控件
var o = new BMap.OverviewMapControl({ isOpen: true, anchor: BMAP_ANCHOR_TOP_RIGHT });
o.changeView();
map.addControl(o);

// 比例尺控件
var s = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT });
s.setUnit(BMAP_UNIT_IMPERIAL);
map.addControl(s);


// 给地图添加覆盖物
// var marker = new BMap.Marker(point, { offset: { width: 0, height: 0 }, title: '标题' });
// // marker.show();
// marker.openInfoWindow(new BMap.InfoWindow('jmz', { width: 210, height: 70, title: 'jmz' }));
// marker.setAnimation(BMAP_ANIMATION_BOUNCE);
// map.addOverlay(marker);

//添加线
var pointA = new BMap.Point(106.486654, 29.490295); // 创建点坐标A--大渡口区
var pointB = new BMap.Point(106.581515, 29.615467); // 创建点坐标B--江北区

var polyline = new BMap.Polyline([pointA, pointB], { strokeColor: "blue", strokeWeight: 1, strokeOpacity: 0.5, strokeStyle: 'dashed' }); //定义折线
map.addOverlay(polyline);





// 对地图的设置
// 是否可以鼠标滚轮进行放大缩小
// map.disableScrollWheelZoom();
// // 是否可以对地图进行拖拽
// map.disableDragging();
// map.setCurrentCity('北京');
// console.log(map.getBounds());
// setTimeout(function(){
//     map.panTo(new BMap.Point(117.404, 40.915),{noAnimation:false})
// },2000);



// // 给地图添加测距工具
// var myDis = new BMapLib.DistanceTool(map);
// // myDis.open();

// // 根据城市列表查找商圈
// var cityList = new BMapLib.CityList({
//     container: 'container',
//     map:map
// });


// cityList.getBusiness('中关村', function(json){
//     console.log('商圈');
//     console.log(json);
// });

// cityList.getSubAreaList(131, function(json){
//     console.log('城市列表');
//     console.log(json);
// });

// cityList.addEventListener('cityclick', function(e){
//     console.log(e);
// });


map.addEventListener('click', function(ev) {
    // alert(ev.point.lng+","+ev.point.lat);
    addMarker(ev.point.lng, ev.point.lat);
});


function addMarker(lng, lat) {
    var point = new BMap.Point(lng, lat);
    var marker = new BMap.Marker(point);
    var windowInfo = new BMap.InfoWindow('<div">jmz</div>', { width: 230, height: 300, title: '警告' });
    // marker.openInfoWindow(windowInfo);
    marker.addEventListener('click', function() {
        map.openInfoWindow(windowInfo, point);
    });
    map.addOverlay(marker);
}