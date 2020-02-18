var mymap = L.map('mapid').setView([40.295, -111.7], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibnZndW5uZWxsIiwiYSI6ImNrNnM4NnVyNzAxbGYzZXBibXA1NnZtb2cifQ.tzoW7hq0QOZmpTTAQNpoJw'
}).addTo(mymap);


