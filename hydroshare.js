var mymap = L.map('mymap').setView([39.827602, -98.580291], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnZndW5uZWxsIiwiYSI6ImNrNnM4NnVyNzAxbGYzZXBibXA1NnZtb2cifQ.tzoW7hq0QOZmpTTAQNpoJw'
}).addTo(mymap);

//var wmsLayer = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-2e6a220b699544f18b58aa9904743cae/wms?', wmsOptions).addTo(mymap);

var states = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-2e6a220b699544f18b58aa9904743cae/wms?', {
    layers: 'Visited_States',
    format: 'image/png',
    transparent: true,
}).addTo(mymap);

var places = L.tileLayer.wms('https://geoserver.hydroshare.org/geoserver/HS-2e6a220b699544f18b58aa9904743cae/wms?', {
    layers: 'Locations',
    format: 'image/png',
    transparent: true,
}).addTo(mymap);

