
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
    center: [15, 27],
    zoom: 3,
    layers: [normal],
    zoomControl: true,  //地图缩放组件
    measureControl: true,
    layersControl: true,
    doubleClickZoom: false
})

L.control.layers(baseLayers, overlayLayers).addTo(map); //图层控件

map.setMinZoom(2);
// map.setMaxZoom(18);


// $('.leaflet-bottom').css('display', 'none')

//点击地图进行打点
var mypop = L.popup();
var marker = L.marker([0,0]);
var lng = 0;
var lat = 0;
map.on('click', function (e) {
    lat = e.latlng.lat //纬度
    lng = e.latlng.lng //经度
    
    // 弹窗文字
    var content = e.latlng.toString();
    console.log(content);
    // 标记
    map.removeLayer(marker);
    marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
        .bindPopup(content)
        .openPopup();
});
