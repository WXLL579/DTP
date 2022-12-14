
// var geoMapLayer = L.tileLayer(
//     // 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}', 
//     // "http://t4.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=233ee39bbf6bac9638233e74f507f8f7",
//     "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=233ee39bbf6bac9638233e74f507f8f7",
//     // "https://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=233ee39bbf6bac9638233e74f507f8f7",
//     {
//         maxZoom: 17,
//         tileSize: 256,
//         minZoom: 1
//     });

// var geoMapLayer= L.tileLayer.chinaProvider('Geoq.Normal.Warm', {  
//         maxZoom: 18,  
//         minZoom: 5  
//     });  

// var markLayer=L.tileLayer(
//     "https://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=233ee39bbf6bac9638233e74f507f8f7",
//     {
//         maxZoom: 17,
//         tileSize: 256,
//         minZoom: 1
//     });


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
    "?????????????????????": normal,
    "?????????????????????": image,
    "Geoq????????????": geoq
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
var latlngs = [[51.505,-0.09],[52,-1],[51,-0.05],[51.3,-0.06]];
var path = L.polyline(latlngs,{
    dashArray:'15,15',
    dashSpeed:-30
}).addTo(map);

L.control.layers(baseLayers, overlayLayers).addTo(map); //????????????

//????????????????????????
var overlay = new L.echartsLayer3(map, echarts);
var chartsContainer = overlay.getEchartsContainer();
var myChart = overlay.initECharts(chartsContainer);

// var geoCoordMap = {
//     '??????': [121.4648, 31.2891],
//     '??????': [113.8953, 22.901],
//     '??????': [118.7073, 37.5513],
//     '??????': [113.4229, 22.478],
//     '??????': [111.4783, 36.1615],
//     '??????': [118.3118, 35.2936],
//     '??????': [124.541, 40.4242],
//     '??????': [119.5642, 28.1854],
//     '????????????': [87.9236, 43.5883],
//     '??????': [112.8955, 23.1097],
//     '??????': [115.0488, 39.0948],
//     '??????': [103.5901, 36.3043],
//     '??????': [110.3467, 41.4899],
//     '??????': [116.4551, 40.2539],
//     '??????': [109.314, 21.6211],
//     '??????': [118.8062, 31.9208],
//     '??????': [108.479, 23.1152],
//     '??????': [116.0046, 28.6633],
//     '??????': [121.1023, 32.1625],
//     '??????': [118.1689, 24.6478],
//     '??????': [121.1353, 28.6688],
//     '??????': [117.29, 32.0581],
//     '????????????': [111.4124, 40.4901],
//     '??????': [108.4131, 34.8706],
//     '?????????': [127.9688, 45.368],
//     '??????': [118.4766, 39.6826],
//     '??????': [120.9155, 30.6354],
//     '??????': [113.7854, 39.8035],
//     '??????': [122.2229, 39.4409],
//     '??????': [117.4219, 39.4189],
//     '??????': [112.3352, 37.9413],
//     '??????': [121.9482, 37.1393],
//     '??????': [121.5967, 29.6466],
//     '??????': [107.1826, 34.3433],
//     '??????': [118.5535, 33.7775],
//     '??????': [119.4543, 31.5582],
//     '??????': [113.5107, 23.2196],
//     '??????': [116.521, 39.0509],
//     '??????': [109.1052, 36.4252],
//     '?????????': [115.1477, 40.8527],
//     '??????': [117.5208, 34.3268],
//     '??????': [116.6858, 37.2107],
//     '??????': [114.6204, 23.1647],
//     '??????': [103.9526, 30.7617],
//     '??????': [119.4653, 32.8162],
//     '??????': [117.5757, 41.4075],
//     '??????': [91.1865, 30.1465],
//     '??????': [120.3442, 31.5527],
//     '??????': [119.2786, 35.5023],
//     '??????': [102.9199, 25.4663],
//     '??????': [119.5313, 29.8773],
//     '??????': [117.323, 34.8926],
//     '??????': [109.3799, 24.9774],
//     '??????': [113.5327, 27.0319],
//     '??????': [114.3896, 30.6628],
//     '??????': [117.1692, 23.3405],
//     '??????': [112.6318, 22.1484],
//     '??????': [123.1238, 42.1216],
//     '??????': [116.8286, 38.2104],
//     '??????': [114.917, 23.9722],
//     '??????': [118.3228, 25.1147],
//     '??????': [117.0264, 36.0516],
//     '??????': [120.0586, 32.5525],
//     '??????': [117.1582, 36.8701],
//     '??????': [116.8286, 35.3375],
//     '??????': [110.3893, 19.8516],
//     '??????': [118.0371, 36.6064],
//     '??????': [118.927, 33.4039],
//     '??????': [114.5435, 22.5439],
//     '??????': [112.9175, 24.3292],
//     '??????': [120.498, 27.8119],
//     '??????': [109.7864, 35.0299],
//     '??????': [119.8608, 30.7782],
//     '??????': [112.5439, 27.7075],
//     '??????': [117.8174, 37.4963],
//     '??????': [119.0918, 36.524],
//     '??????': [120.7397, 37.5128],
//     '??????': [101.9312, 23.8898],
//     '??????': [113.7305, 22.1155],
//     '??????': [120.2234, 33.5577],
//     '??????': [121.9482, 41.0449],
//     '?????????': [114.4995, 38.1006],
//     '??????': [119.4543, 25.9222],
//     '?????????': [119.2126, 40.0232],
//     '??????': [120.564, 29.7565],
//     '??????': [115.9167, 36.4032],
//     '??????': [112.1265, 23.5822],
//     '??????': [122.2559, 30.2234],
//     '??????': [120.6519, 31.3989],
//     '??????': [117.6526, 36.2714],
//     '??????': [115.6201, 35.2057],
//     '??????': [122.4316, 40.4297],
//     '?????????': [120.1575, 40.578],
//     '??????': [115.8838, 37.7161],
//     '??????': [118.6853, 28.8666],
//     '??????': [101.4038, 36.8207],
//     '??????': [109.1162, 34.2004],
//     '??????': [106.6992, 26.7682],
//     '?????????': [119.1248, 34.552],
//     '??????': [114.8071, 37.2821],
//     '??????': [114.4775, 36.535],
//     '??????': [113.4668, 34.6234],
//     '????????????': [108.9734, 39.2487],
//     '??????': [107.7539, 30.1904],
//     '??????': [120.0037, 29.1028],
//     '??????': [109.0393, 35.1947],
//     '??????': [106.3586, 38.1775],
//     '??????': [119.4763, 31.9702],
//     '??????': [125.8154, 44.2584],
//     '??????': [113.0823, 28.2568],
//     '??????': [112.8625, 36.4746],
//     '??????': [113.4778, 38.0951],
//     '??????': [120.4651, 36.3373],
//     '??????': [113.7964, 24.7028]
// };
// var BJData = [
//     [{ name: '??????' }, { name: '??????', value: 95 }],
//     [{ name: '??????' }, { name: '??????', value: 90 }],
//     [{ name: '??????' }, { name: '??????', value: 80 }],
//     [{ name: '??????' }, { name: '??????', value: 70 }],
//     [{ name: '??????' }, { name: '??????', value: 60 }],
//     [{ name: '??????' }, { name: '??????', value: 50 }],
//     [{ name: '??????' }, { name: '??????', value: 40 }],
//     [{ name: '??????' }, { name: '??????', value: 30 }],
//     [{ name: '??????' }, { name: '??????', value: 20 }],
//     [{ name: '??????' }, { name: '??????', value: 10 }]
//         ];

//         var SHData = [
//     [{ name: '??????' }, { name: '??????', value: 95 }],
//     [{ name: '??????' }, { name: '??????', value: 90 }],
//     [{ name: '??????' }, { name: '??????', value: 80 }],
//     [{ name: '??????' }, { name: '??????', value: 70 }],
//     [{ name: '??????' }, { name: '??????', value: 60 }],
//     [{ name: '??????' }, { name: '??????', value: 50 }],
//     [{ name: '??????' }, { name: '??????', value: 40 }],
//     [{ name: '??????' }, { name: '??????', value: 30 }],
//     [{ name: '??????' }, { name: '??????', value: 20 }],
//     [{ name: '??????' }, { name: '??????', value: 10 }]
//         ];

//         var GZData = [
//     [{ name: '??????' }, { name: '??????', value: 95 }],
//     [{ name: '??????' }, { name: '??????', value: 90 }],
//     [{ name: '??????' }, { name: '??????', value: 80 }],
//     [{ name: '??????' }, { name: '??????', value: 70 }],
//     [{ name: '??????' }, { name: '??????', value: 60 }],
//     [{ name: '??????' }, { name: '??????', value: 50 }],
//     [{ name: '??????' }, { name: '??????', value: 40 }],
//     [{ name: '??????' }, { name: '??????', value: 30 }],
//     [{ name: '??????' }, { name: '??????', value: 20 }],
//     [{ name: '??????' }, { name: '??????', value: 10 }]
//         ];

// var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
// var convertData = function (data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//         var dataItem = data[i];
//         var fromCoord = geoCoordMap[dataItem[0].name];
//         var toCoord = geoCoordMap[dataItem[1].name];
//         if (fromCoord && toCoord) {
//             res.push([{
//                 coord: fromCoord
//             }, {
//                 coord: toCoord
//             }]);
//         }
//     }
//     return res;
// };

// var color = ['#a6c84c', '#ffa022', '#46bee9'];
//  var series = [];
//             [['??????', BJData], ['??????', SHData], ['??????', GZData]].forEach(function (item, i) {
//                 series.push({
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
//             });
 
//             var option = {
//                 title: {
//                     text: '??????????????????',
//                     left: 'center',
//                     textStyle: {
//                         color: '#fff'
//                     }
//                 },
//                 tooltip: {
//                     trigger: 'item'
//                 },
//                 legend: {
//                     orient: 'vertical',
//                     top: 'bottom',
//                     left: 'right',
//                     data: ['?????? Top10', '?????? Top10', '?????? Top10'],
//                     textStyle: {
//                         color: '#fff'
//                     },
//                     selectedMode: 'single'
//                 },
//                 geo: {
//                     map: '',
//                     label: {
//                         emphasis: {
//                             show: false
//                         }
//                     },
//                     roam: true,
//                     itemStyle: {
//                         normal: {
//                             areaColor: '#323c48',
//                             borderColor: '#404a59'
//                         },
//                         emphasis: {
//                             areaColor: '#2a333d'
//                         }
//                     }
//                 },
//                 series: series
//             };
//             // ???????????????????????????????????????????????????
//             overlay.setOption(option);

//
var greenIcon = L.icon({
    iconUrl: './img/car.png', 
    shadowUrl: './img/car.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var geoCoordMap = {
    '??????': [121.4648, 31.2891],
    '??????': [113.8953, 22.901],
    '??????': [118.7073, 37.5513],
    '??????': [113.4229, 22.478],
    '??????': [111.4783, 36.1615],
    '??????': [118.3118, 35.2936],
    '??????': [124.541, 40.4242],
    '??????': [119.5642, 28.1854],
    '????????????': [87.9236, 43.5883],
    '??????': [112.8955, 23.1097],
    '??????': [115.0488, 39.0948],
    '??????': [103.5901, 36.3043],
    '??????': [110.3467, 41.4899],
    '??????': [116.4551, 40.2539],
    '??????': [109.314, 21.6211],
    '??????': [118.8062, 31.9208],
    '??????': [108.479, 23.1152],
    '??????': [116.0046, 28.6633],
    '??????': [121.1023, 32.1625],
    '??????': [118.1689, 24.6478],
    '??????': [121.1353, 28.6688],
    '??????': [117.29, 32.0581],
    '????????????': [111.4124, 40.4901],
    '??????': [108.4131, 34.8706],
    '?????????': [127.9688, 45.368],
    '??????': [118.4766, 39.6826],
    '??????': [120.9155, 30.6354],
    '??????': [113.7854, 39.8035],
    '??????': [122.2229, 39.4409],
    '??????': [117.4219, 39.4189],
    '??????': [112.3352, 37.9413],
    '??????': [121.9482, 37.1393],
    '??????': [121.5967, 29.6466],
    '??????': [107.1826, 34.3433],
    '??????': [118.5535, 33.7775],
    '??????': [119.4543, 31.5582],
    '??????': [113.5107, 23.2196],
    '??????': [116.521, 39.0509],
    '??????': [109.1052, 36.4252],
    '?????????': [115.1477, 40.8527],
    '??????': [117.5208, 34.3268],
    '??????': [116.6858, 37.2107],
    '??????': [114.6204, 23.1647],
    '??????': [103.9526, 30.7617],
    '??????': [119.4653, 32.8162],
    '??????': [117.5757, 41.4075],
    '??????': [91.1865, 30.1465],
    '??????': [120.3442, 31.5527],
    '??????': [119.2786, 35.5023],
    '??????': [102.9199, 25.4663],
    '??????': [119.5313, 29.8773],
    '??????': [117.323, 34.8926],
    '??????': [109.3799, 24.9774],
    '??????': [113.5327, 27.0319],
    '??????': [114.3896, 30.6628],
    '??????': [117.1692, 23.3405],
    '??????': [112.6318, 22.1484],
    '??????': [123.1238, 42.1216],
    '??????': [116.8286, 38.2104],
    '??????': [114.917, 23.9722],
    '??????': [118.3228, 25.1147],
    '??????': [117.0264, 36.0516],
    '??????': [120.0586, 32.5525],
    '??????': [117.1582, 36.8701],
    '??????': [116.8286, 35.3375],
    '??????': [110.3893, 19.8516],
    '??????': [118.0371, 36.6064],
    '??????': [118.927, 33.4039],
    '??????': [114.5435, 22.5439],
    '??????': [112.9175, 24.3292],
    '??????': [120.498, 27.8119],
    '??????': [109.7864, 35.0299],
    '??????': [119.8608, 30.7782],
    '??????': [112.5439, 27.7075],
    '??????': [117.8174, 37.4963],
    '??????': [119.0918, 36.524],
    '??????': [120.7397, 37.5128],
    '??????': [101.9312, 23.8898],
    '??????': [113.7305, 22.1155],
    '??????': [120.2234, 33.5577],
    '??????': [121.9482, 41.0449],
    '?????????': [114.4995, 38.1006],
    '??????': [119.4543, 25.9222],
    '?????????': [119.2126, 40.0232],
    '??????': [120.564, 29.7565],
    '??????': [115.9167, 36.4032],
    '??????': [112.1265, 23.5822],
    '??????': [122.2559, 30.2234],
    '??????': [120.6519, 31.3989],
    '??????': [117.6526, 36.2714],
    '??????': [115.6201, 35.2057],
    '??????': [122.4316, 40.4297],
    '?????????': [120.1575, 40.578],
    '??????': [115.8838, 37.7161],
    '??????': [118.6853, 28.8666],
    '??????': [101.4038, 36.8207],
    '??????': [109.1162, 34.2004],
    '??????': [106.6992, 26.7682],
    '?????????': [119.1248, 34.552],
    '??????': [114.8071, 37.2821],
    '??????': [114.4775, 36.535],
    '??????': [113.4668, 34.6234],
    '????????????': [108.9734, 39.2487],
    '??????': [107.7539, 30.1904],
    '??????': [120.0037, 29.1028],
    '??????': [109.0393, 35.1947],
    '??????': [106.3586, 38.1775],
    '??????': [119.4763, 31.9702],
    '??????': [125.8154, 44.2584],
    '??????': [113.0823, 28.2568],
    '??????': [112.8625, 36.4746],
    '??????': [113.4778, 38.0951],
    '??????': [120.4651, 36.3373],
    '??????': [113.7964, 24.7028]
};

var BJData = [
    [{name: '??????'}, {name: '??????', value: 95}],
    // [{name: '??????'}, {name: '??????', value: 90}],
    // [{name: '??????'}, {name: '??????', value: 80}],
    // [{name: '??????'}, {name: '??????', value: 70}],
    // [{name: '??????'}, {name: '??????', value: 60}],
    // [{name: '??????'}, {name: '??????', value: 50}],
    // [{name: '??????'}, {name: '??????', value: 40}],
    // [{name: '??????'}, {name: '??????', value: 30}],
    // [{name: '??????'}, {name: '??????', value: 20}],
    // [{name: '??????'}, {name: '??????', value: 10}]
];

var SHData = [
    [{name: '??????'}, {name: '??????', value: 95}],
    [{name: '??????'}, {name: '??????', value: 90}],
    [{name: '??????'}, {name: '??????', value: 80}],
    [{name: '??????'}, {name: '??????', value: 70}],
    [{name: '??????'}, {name: '??????', value: 60}],
    [{name: '??????'}, {name: '??????', value: 50}],
    [{name: '??????'}, {name: '??????', value: 40}],
    [{name: '??????'}, {name: '??????', value: 30}],
    [{name: '??????'}, {name: '??????', value: 20}],
    [{name: '??????'}, {name: '??????', value: 10}]
];

var GZData = [
    [{name: '??????'}, {name: '??????', value: 95}],
    [{name: '??????'}, {name: '??????', value: 90}],
    [{name: '??????'}, {name: '??????', value: 80}],
    [{name: '??????'}, {name: '??????', value: 70}],
    [{name: '??????'}, {name: '??????', value: 60}],
    [{name: '??????'}, {name: '??????', value: 50}],
    [{name: '??????'}, {name: '??????', value: 40}],
    [{name: '??????'}, {name: '??????', value: 30}],
    [{name: '??????'}, {name: '??????', value: 20}],
    [{name: '??????'}, {name: '??????', value: 10}]
];

var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};
// var diqiuzhan = L.icon({
//     iconUrl: 'images/diqiuzhan.png',
//     iconSize: 30,
//     iconAnchor: [15, 15],
// });

// var huailai_diqiuzhan_weizhi = [40.39, 115.09];
// var beijing_diqiuzhan_weizhi = [40.05, 116.28];
// var dujiangyan_diqiuzhan_weizhi = [31.0, 103.62];
// var kashi_diqiuzhan_weizhi = [39.5, 76.0];
// var huailai_diqiuzhan_marker = L.marker(huailai_diqiuzhan_weizhi, {
//     icon: diqiuzhan
// }).addTo(map);
// var beijing_diqiuzhan_marker = L.marker(beijing_diqiuzhan_weizhi, {
//     icon: diqiuzhan
// }).addTo(map);
// var dujiangyan_diqiuzhan_marker = L.marker(dujiangyan_diqiuzhan_weizhi, {
//     icon: diqiuzhan
// }).addTo(map);
// var kashi_diqiuzhan_marker = L.marker(kashi_diqiuzhan_weizhi, {
//     icon: diqiuzhan
// }).addTo(map);
// var weixing = L.icon({
//     iconUrl: 'images/weixing.png',
//     iconSize: 30,
//     iconAnchor: [15, 15]
// });

// var weixing_weizhi_1 = [50, 110.5];

// var weixing_marker_1 = L.marker(weixing_weizhi_1, {
//     icon: weixing
// }).addTo(map);

// var qidian_icon = L.icon({
//     iconUrl: 'images/qidian.png',
//     iconSize: 20,
//     iconAnchor: [10, 10]
// });

// var zhongdian_icon = L.icon({
//     iconUrl: 'images/zhongdian.png',
//     iconSize: 20,
//     iconAnchor: [10, 10]
// });

// var planeIcon = L.icon({
//     iconSize: [37, 26],
//     iconAnchor: [19, 13],
//     iconUrl: './images/plane.png'
// })
/////////////////////////////////////////////

// var marker_json = {
//     "diqiuzhan": {
//         "huailai":{
//             "icon":diqiuzhan,
//             "weizhi":huailai_diqiuzhan_weizhi,
//             "marker":huailai_diqiuzhan_marker,
//         },
//         "beijing":{
//             "icon":diqiuzhan,
//             "weizhi":beijing_diqiuzhan_weizhi,
//             "marker":beijing_diqiuzhan_marker,
//         },
    
//         "dujiangyan":{
//             "icon":diqiuzhan,
//             "weizhi":dujiangyan_diqiuzhan_weizhi,
//             "marker":dujiangyan_diqiuzhan_marker,
//         },
        
//         "kashi":{
//             "icon":diqiuzhan,
//             "weizhi":kashi_diqiuzhan_weizhi,
//             "marker":kashi_diqiuzhan_marker,
//         },
//     },
//     "weixing": {
//         "weixing_1":{
//             "icon":weixing,
//             "weizhi":weixing_weizhi_1,
//             "marker":weixing_marker_1
//         }
//     },
    // "zhongduan1": {
    //     "leida_1":{
    //         "icon":leida1,
    //         "upspeed":340,
    //         "downspeed":340,
    //         'marker_status':false
    //     },
    // },
    // "zhongduan2": {
    //     "leida_2":{
    //         "icon":leida2,
    //         "upspeed":80,
    //         "downspeed":10,
    //         'marker_status':false

    //     },
    //     "leida_3":{
    //         "icon":leida3,
    //         "upspeed":10,
    //         "downspeed":50,
    //         'marker_status':false

    //     },
    //     "leida_4":{
    //         "icon":leida4,
    //         "upspeed":20,
    //         "downspeed":30,
    //         'marker_status':false

    //     },
    //     "leida_5":{
    //         "icon":leida5,
    //         "upspeed":40,
    //         "downspeed":50,
    //         'marker_status':false

    //     },
    //     "leida_6":{
    //         "icon":leida6,
    //         "upspeed":60,
    //         "downspeed":70,
    //         'marker_status':false

    //     }
    // }
// };


//????????????(??????????????????)
var color = ['red', '#ffa022', '#46bee9'];
var series = [];
[['??????', BJData], ['??????', SHData], ['??????', GZData]].forEach(function (item, i) {
    series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
});

option = {
//        backgroundColor: '#404a59',
    title: {
        text: 'Leaflet??????Echarts3???????????????',
        subtext: 'Develop By WanderGIS',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['?????? Top10', '?????? Top10', '?????? Top10'],
        textStyle: {
            color: '#fff'
        },
        selectedMode: 'single'
    },
    geo: {
        map: '',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};
// ???????????????????????????????????????????????????
overlay.setOption(option);

// map.setMaxZoom(18);


// $('.leaflet-bottom').css('display', 'none')