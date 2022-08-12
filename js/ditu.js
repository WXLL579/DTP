// var map = L.map('map');
//     var baseLayers = {
//         "高德地图": L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
//             subdomains: "1234"
//         }),
//         '高德影像': L.layerGroup([L.tileLayer('http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
//             subdomains: "1234"
//         }), L.tileLayer('http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}', {
//             subdomains: "1234"
//         })]),
//         "立体地图": L.tileLayer('https://a.tiles.mapbox.com/v3/examples.c7d2024a/{z}/{x}/{y}.png', {
//             attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
//             key: 'BC9A493B41014CAABB98F0471D759707',
//             styleId: 22677
//         }),
//         "Foursquare": L.tileLayer('https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png', {
//             attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
//             key: 'BC9A493B41014CAABB98F0471D759707',
//             styleId: 22677
//         }),
//         'GeoQ灰色底图': L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(map)
//     };
//     L.tileLayer('https://a.tiles.mapbox.com/v3/foursquare.map-0y1jh28j/{z}/{x}/{y}.png', {
//         attribution: 'Map &copy; Pacific Rim Coordination Center (PRCC).  Certain data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
//         key: 'BC9A493B41014CAABB98F0471D759707',
//         styleId: 22677
//     });
//     var layercontrol = L.control.layers(baseLayers,{}, {
//         position: "topleft"
//     }).addTo(map);
var imgm = L.tileLayer(
    "//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=63235749c4ba1f4c5546d3c6dadb45a2"
    , {
        maxZoom: 18,
        minZoom: 1,
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    }),
    imga = L.tileLayer(
        "//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk=63235749c4ba1f4c5546d3c6dadb45a2"
        , {
            maxZoom: 18,
            minZoom: 1,
            subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

        }),
    normalm = L.tileLayer(
        "//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=63235749c4ba1f4c5546d3c6dadb45a2"
        , {
            maxZoom: 18,
            minZoom: 1,
            subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

        }),
    normala = L.tileLayer(
        "//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=63235749c4ba1f4c5546d3c6dadb45a2"
        // 233ee39bbf6bac9638233e74f507f8f7
        , {
            maxZoom: 18,
            minZoom: 1,
            subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],

        });
Geoq = L.tileLayer(
    'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
    , {
        maxZoom: 16,
        minZoom: 1,
        subdomains: [],

    })

var normal = L.layerGroup([normalm, normala]),
    image = L.layerGroup([imgm, imga]),
    geoq = L.layerGroup([Geoq])

var baseLayers = {
    "天地图矢量地图": normal,
    "天地图影像地图": image,
    "Geoq蓝色地图": geoq
}


var overlayLayers = {
}


var map = L.map("map", {
    center: [35, 105.4],
    zoom: 3,
    layers: [normal],
    zoomControl: true,
    measureControl: true,
    layersControl: true,
    doubleClickZoom: false
})

L.control.layers(baseLayers, overlayLayers).addTo(map); //图层控件
var marker = L.marker([30, 109.05]).addTo(map); 
var polygon = L.polygon([
    [30, 109.05],
    [37, 121],
    [36.5, 122],
    [36.5, 150]
],{
    color: 'red',
    fillColor: 'red',
//   fillOpacity: 1
}).addTo(map);
map.setView(L.latLng(37.550339, 104.114129), 4);
var overlay = new L.echartsLayer3(map, echarts);
var chartsContainer = overlay.getEchartsContainer();
var myChart = overlay.initECharts(chartsContainer);
    // var latlang = [
    //     [[17.385044, 78.486671], [16.506174, 80.648015], [17.686816, 83.218482],[37.550339, 104.114129]],
    //     [[13.082680, 80.270718], [12.971599, 77.594563],[15.828126, 78.037279]]
    //  ];
    //  var multiPolyLineOptions = {color:'red'};
    // // Creating multi polylines
    // var multipolyline = L.multiPolyline(latlang , multiPolyLineOptions);
    // multipolyline.addTo(map);

//     var geoCoordMap = {
//         '上海': [121.4648, 31.2891],
//         '东莞': [113.8953, 22.901],
//         '东营': [118.7073, 37.5513],
//         '中山': [113.4229, 22.478],
//         '临汾': [111.4783, 36.1615],
//         '临沂': [118.3118, 35.2936],
//         '丹东': [124.541, 40.4242],
//         '丽水': [119.5642, 28.1854],
//         '乌鲁木齐': [87.9236, 43.5883],
//         '佛山': [112.8955, 23.1097],
//         '保定': [115.0488, 39.0948],
//         '兰州': [103.5901, 36.3043],
//         '包头': [110.3467, 41.4899],
//         '北京': [116.4551, 40.2539],
//         '北海': [109.314, 21.6211],
//         '南京': [118.8062, 31.9208],
//         '南宁': [108.479, 23.1152],
//         '南昌': [116.0046, 28.6633],
//         '南通': [121.1023, 32.1625],
//         '厦门': [118.1689, 24.6478],
//         '台州': [121.1353, 28.6688],
//         '合肥': [117.29, 32.0581],
//         '呼和浩特': [111.4124, 40.4901],
//         '咸阳': [108.4131, 34.8706],
//         '哈尔滨': [127.9688, 45.368],
//         '唐山': [118.4766, 39.6826],
//         '嘉兴': [120.9155, 30.6354],
//         '大同': [113.7854, 39.8035],
//         '大连': [122.2229, 39.4409],
//         '天津': [117.4219, 39.4189],
//         '太原': [112.3352, 37.9413],
//         '威海': [121.9482, 37.1393],
//         '宁波': [121.5967, 29.6466],
//         '宝鸡': [107.1826, 34.3433],
//         '宿迁': [118.5535, 33.7775],
//         '常州': [119.4543, 31.5582],
//         '广州': [113.5107, 23.2196],
//         '廊坊': [116.521, 39.0509],
//         '延安': [109.1052, 36.4252],
//         '张家口': [115.1477, 40.8527],
//         '徐州': [117.5208, 34.3268],
//         '德州': [116.6858, 37.2107],
//         '惠州': [114.6204, 23.1647],
//         '成都': [103.9526, 30.7617],
//         '扬州': [119.4653, 32.8162],
//         '承德': [117.5757, 41.4075],
//         '拉萨': [91.1865, 30.1465],
//         '无锡': [120.3442, 31.5527],
//         '日照': [119.2786, 35.5023],
//         '昆明': [102.9199, 25.4663],
//         '杭州': [119.5313, 29.8773],
//         '枣庄': [117.323, 34.8926],
//         '柳州': [109.3799, 24.9774],
//         '株洲': [113.5327, 27.0319],
//         '武汉': [114.3896, 30.6628],
//         '汕头': [117.1692, 23.3405],
//         '江门': [112.6318, 22.1484],
//         '沈阳': [123.1238, 42.1216],
//         '沧州': [116.8286, 38.2104],
//         '河源': [114.917, 23.9722],
//         '泉州': [118.3228, 25.1147],
//         '泰安': [117.0264, 36.0516],
//         '泰州': [120.0586, 32.5525],
//         '济南': [117.1582, 36.8701],
//         '济宁': [116.8286, 35.3375],
//         '海口': [110.3893, 19.8516],
//         '淄博': [118.0371, 36.6064],
//         '淮安': [118.927, 33.4039],
//         '深圳': [114.5435, 22.5439],
//         '清远': [112.9175, 24.3292],
//         '温州': [120.498, 27.8119],
//         '渭南': [109.7864, 35.0299],
//         '湖州': [119.8608, 30.7782],
//         '湘潭': [112.5439, 27.7075],
//         '滨州': [117.8174, 37.4963],
//         '潍坊': [119.0918, 36.524],
//         '烟台': [120.7397, 37.5128],
//         '玉溪': [101.9312, 23.8898],
//         '珠海': [113.7305, 22.1155],
//         '盐城': [120.2234, 33.5577],
//         '盘锦': [121.9482, 41.0449],
//         '石家庄': [114.4995, 38.1006],
//         '福州': [119.4543, 25.9222],
//         '秦皇岛': [119.2126, 40.0232],
//         '绍兴': [120.564, 29.7565],
//         '聊城': [115.9167, 36.4032],
//         '肇庆': [112.1265, 23.5822],
//         '舟山': [122.2559, 30.2234],
//         '苏州': [120.6519, 31.3989],
//         '莱芜': [117.6526, 36.2714],
//         '菏泽': [115.6201, 35.2057],
//         '营口': [122.4316, 40.4297],
//         '葫芦岛': [120.1575, 40.578],
//         '衡水': [115.8838, 37.7161],
//         '衢州': [118.6853, 28.8666],
//         '西宁': [101.4038, 36.8207],
//         '西安': [109.1162, 34.2004],
//         '贵阳': [106.6992, 26.7682],
//         '连云港': [119.1248, 34.552],
//         '邢台': [114.8071, 37.2821],
//         '邯郸': [114.4775, 36.535],
//         '郑州': [113.4668, 34.6234],
//         '鄂尔多斯': [108.9734, 39.2487],
//         '重庆': [107.7539, 30.1904],
//         '金华': [120.0037, 29.1028],
//         '铜川': [109.0393, 35.1947],
//         '银川': [106.3586, 38.1775],
//         '镇江': [119.4763, 31.9702],
//         '长春': [125.8154, 44.2584],
//         '长沙': [113.0823, 28.2568],
//         '长治': [112.8625, 36.4746],
//         '阳泉': [113.4778, 38.0951],
//         '青岛': [120.4651, 36.3373],
//         '韶关': [113.7964, 24.7028]
//     };
 
//     var BJData = [
//         [{name: '北京'}, {name: '上海', value: 95}],
//         // [{name: '北京'}, {name: '广州', value: 90}],
//         // [{name: '北京'}, {name: '大连', value: 80}],
//         // [{name: '北京'}, {name: '南宁', value: 70}],
//         // [{name: '北京'}, {name: '南昌', value: 60}],
//         // [{name: '北京'}, {name: '拉萨', value: 50}],
//         // [{name: '北京'}, {name: '长春', value: 40}],
//         // [{name: '北京'}, {name: '包头', value: 30}],
//         // [{name: '北京'}, {name: '重庆', value: 20}],
//         // [{name: '北京'}, {name: '常州', value: 10}]
//     ];
 
//     var SHData = [
//         [{name: '上海'}, {name: '包头', value: 95}],
//         [{name: '上海'}, {name: '昆明', value: 90}],
//         [{name: '上海'}, {name: '广州', value: 80}],
//         [{name: '上海'}, {name: '郑州', value: 70}],
//         [{name: '上海'}, {name: '长春', value: 60}],
//         [{name: '上海'}, {name: '重庆', value: 50}],
//         [{name: '上海'}, {name: '长沙', value: 40}],
//         [{name: '上海'}, {name: '北京', value: 30}],
//         [{name: '上海'}, {name: '丹东', value: 20}],
//         [{name: '上海'}, {name: '大连', value: 10}]
//     ];
 
//     var GZData = [
//         [{name: '广州'}, {name: '福州', value: 95}],
//         [{name: '广州'}, {name: '太原', value: 90}],
//         [{name: '广州'}, {name: '长春', value: 80}],
//         [{name: '广州'}, {name: '重庆', value: 70}],
//         [{name: '广州'}, {name: '西安', value: 60}],
//         [{name: '广州'}, {name: '成都', value: 50}],
//         [{name: '广州'}, {name: '常州', value: 40}],
//         [{name: '广州'}, {name: '北京', value: 30}],
//         [{name: '广州'}, {name: '北海', value: 20}],
//         [{name: '广州'}, {name: '海口', value: 10}]
//     ];
 
//     var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
 
//     var convertData = function (data) {
//         var res = [];
//         for (var i = 0; i < data.length; i++) {
//             var dataItem = data[i];
//             var fromCoord = geoCoordMap[dataItem[0].name];
//             var toCoord = geoCoordMap[dataItem[1].name];
//             if (fromCoord && toCoord) {
//                 res.push([{
//                     coord: fromCoord
//                 }, {
//                     coord: toCoord
//                 }]);
//             }
//         }
//         return res;
//     };
//     // var diqiuzhan = L.icon({
//     //     iconUrl: 'images/diqiuzhan.png',
//     //     iconSize: 30,
//     //     iconAnchor: [15, 15],
//     // });
    
//     // var huailai_diqiuzhan_weizhi = [40.39, 115.09];
//     // var beijing_diqiuzhan_weizhi = [40.05, 116.28];
//     // var dujiangyan_diqiuzhan_weizhi = [31.0, 103.62];
//     // var kashi_diqiuzhan_weizhi = [39.5, 76.0];
//     // var huailai_diqiuzhan_marker = L.marker(huailai_diqiuzhan_weizhi, {
//     //     icon: diqiuzhan
//     // }).addTo(map);
//     // var beijing_diqiuzhan_marker = L.marker(beijing_diqiuzhan_weizhi, {
//     //     icon: diqiuzhan
//     // }).addTo(map);
//     // var dujiangyan_diqiuzhan_marker = L.marker(dujiangyan_diqiuzhan_weizhi, {
//     //     icon: diqiuzhan
//     // }).addTo(map);
//     // var kashi_diqiuzhan_marker = L.marker(kashi_diqiuzhan_weizhi, {
//     //     icon: diqiuzhan
//     // }).addTo(map);
//     // var weixing = L.icon({
//     //     iconUrl: 'images/weixing.png',
//     //     iconSize: 30,
//     //     iconAnchor: [15, 15]
//     // });
    
//     // var weixing_weizhi_1 = [50, 110.5];
    
//     // var weixing_marker_1 = L.marker(weixing_weizhi_1, {
//     //     icon: weixing
//     // }).addTo(map);
    
//     // var qidian_icon = L.icon({
//     //     iconUrl: 'images/qidian.png',
//     //     iconSize: 20,
//     //     iconAnchor: [10, 10]
//     // });
    
//     // var zhongdian_icon = L.icon({
//     //     iconUrl: 'images/zhongdian.png',
//     //     iconSize: 20,
//     //     iconAnchor: [10, 10]
//     // });
    
//     // var planeIcon = L.icon({
//     //     iconSize: [37, 26],
//     //     iconAnchor: [19, 13],
//     //     iconUrl: './images/plane.png'
//     // })
//     /////////////////////////////////////////////
    
//     // var marker_json = {
//     //     "diqiuzhan": {
//     //         "huailai":{
//     //             "icon":diqiuzhan,
//     //             "weizhi":huailai_diqiuzhan_weizhi,
//     //             "marker":huailai_diqiuzhan_marker,
//     //         },
//     //         "beijing":{
//     //             "icon":diqiuzhan,
//     //             "weizhi":beijing_diqiuzhan_weizhi,
//     //             "marker":beijing_diqiuzhan_marker,
//     //         },
        
//     //         "dujiangyan":{
//     //             "icon":diqiuzhan,
//     //             "weizhi":dujiangyan_diqiuzhan_weizhi,
//     //             "marker":dujiangyan_diqiuzhan_marker,
//     //         },
            
//     //         "kashi":{
//     //             "icon":diqiuzhan,
//     //             "weizhi":kashi_diqiuzhan_weizhi,
//     //             "marker":kashi_diqiuzhan_marker,
//     //         },
//     //     },
//     //     "weixing": {
//     //         "weixing_1":{
//     //             "icon":weixing,
//     //             "weizhi":weixing_weizhi_1,
//     //             "marker":weixing_marker_1
//     //         }
//     //     },
//         // "zhongduan1": {
//         //     "leida_1":{
//         //         "icon":leida1,
//         //         "upspeed":340,
//         //         "downspeed":340,
//         //         'marker_status':false
//         //     },
//         // },
//         // "zhongduan2": {
//         //     "leida_2":{
//         //         "icon":leida2,
//         //         "upspeed":80,
//         //         "downspeed":10,
//         //         'marker_status':false
    
//         //     },
//         //     "leida_3":{
//         //         "icon":leida3,
//         //         "upspeed":10,
//         //         "downspeed":50,
//         //         'marker_status':false
    
//         //     },
//         //     "leida_4":{
//         //         "icon":leida4,
//         //         "upspeed":20,
//         //         "downspeed":30,
//         //         'marker_status':false
    
//         //     },
//         //     "leida_5":{
//         //         "icon":leida5,
//         //         "upspeed":40,
//         //         "downspeed":50,
//         //         'marker_status':false
    
//         //     },
//         //     "leida_6":{
//         //         "icon":leida6,
//         //         "upspeed":60,
//         //         "downspeed":70,
//         //         'marker_status':false
    
//         //     }
//         // }
//     // };

    
//     //线的颜色(字体颜色也是)
//     var color = ['red', '#ffa022', '#46bee9'];
//     var series = [];
//     [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
//         series.push({
//                     name: item[0] + ' Top10',
//                     type: 'lines',
//                     zlevel: 1,
//                     effect: {
//                         show: true,
//                         period: 6,
//                         trailLength: 0.7,
//                         color: '#fff',
//                         symbolSize: 3
//                     },
//                     lineStyle: {
//                         normal: {
//                             color: color[i],
//                             width: 0,
//                             curveness: 0.2
//                         }
//                     },
//                     data: convertData(item[1])
//                 },
//                 {
//                     name: item[0] + ' Top10',
//                     type: 'lines',
//                     zlevel: 2,
//                     effect: {
//                         show: true,
//                         period: 6,
//                         trailLength: 0,
//                         symbol: planePath,
//                         symbolSize: 15
//                     },
//                     lineStyle: {
//                         normal: {
//                             color: color[i],
//                             width: 1,
//                             opacity: 0.4,
//                             curveness: 0.2
//                         }
//                     },
//                     data: convertData(item[1])
//                 },
//                 {
//                     name: item[0] + ' Top10',
//                     type: 'effectScatter',
//                     coordinateSystem: 'geo',
//                     zlevel: 2,
//                     rippleEffect: {
//                         brushType: 'stroke'
//                     },
//                     label: {
//                         normal: {
//                             show: true,
//                             position: 'right',
//                             formatter: '{b}'
//                         }
//                     },
//                     symbolSize: function (val) {
//                         return val[2] / 8;
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: color[i]
//                         }
//                     },
//                     data: item[1].map(function (dataItem) {
//                         return {
//                             name: dataItem[1].name,
//                             value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
//                         };
//                     })
//                 });
//     });
 
//     option = {
// //        backgroundColor: '#404a59',
//         title: {
//             text: 'Leaflet扩展Echarts3之模拟迁徙',
//             subtext: 'Develop By WanderGIS',
//             left: 'center',
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         tooltip: {
//             trigger: 'item'
//         },
//         legend: {
//             orient: 'vertical',
//             top: 'bottom',
//             left: 'right',
//             data: ['北京 Top10', '上海 Top10', '广州 Top10'],
//             textStyle: {
//                 color: '#fff'
//             },
//             selectedMode: 'single'
//         },
//         geo: {
//             map: '',
//             label: {
//                 emphasis: {
//                     show: false
//                 }
//             },
//             roam: true,
//             itemStyle: {
//                 normal: {
//                     areaColor: '#323c48',
//                     borderColor: '#404a59'
//                 },
//                 emphasis: {
//                     areaColor: '#2a333d'
//                 }
//             }
//         },
//         series: series
//     };
//     // 使用刚指定的配置项和数据显示图表。
//     overlay.setOption(option);