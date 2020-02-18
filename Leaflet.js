var mymap = L.map('mapid').setView([40.295, -111.7], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnZndW5uZWxsIiwiYSI6ImNrNnM4NnVyNzAxbGYzZXBibXA1NnZtb2cifQ.tzoW7hq0QOZmpTTAQNpoJw'
}).addTo(mymap);

var home = L.marker([40.289251, -111.719683]).addTo(mymap);
var mvhs = L.marker([40.295786, -111.711096]).addTo(mymap);
var ljhs = L.marker([40.280057, -111.704197]).addTo(mymap);
var vyard = L.marker([40.289213, -111.737545]).addTo(mymap);
var church = L.marker([40.286016, -111.721776]).addTo(mymap);
var pm = L.marker([40.297572, -111.700481]).addTo(mymap);

var hradius = L.circle([40.289251, -111.719683], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1600
}).addTo(mymap);

var hbound = L.polygon([
    [40.289153, -111.719533],
    [40.289378, -111.719533],
    [40.289378, -111.719968],
    [40.289153, -111.719968]
]).addTo(mymap);
