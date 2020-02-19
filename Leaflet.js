var mymap = L.map('mapid').setView([40.295, -111.7], 13);

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

home.bindPopup('<h1 id="heading">My House</h1>'+
        "<p>This is the house I grew up in. We moved here when I was 3 years old.</p>"+
        '<img src="Young.jpg" id="home">'
        );
mvhs.bindPopup('<h1 id="heading">Mountain View High School</h1>'+
        "<p>M.V.H.S. MVHS the best! Home of the bruins. I graduated from Mountain View in 2011. During my senior year, I took a geology class that led me to choose that as my major.</p>"+
        '<img src="band.jpg" id="mvhs">'
        );
ljhs.bindPopup('<h1 id="heading">Lakeridge Junior High School</h1>'+
        "<p>I went to Lakeridge Jr. High School from 2005-2008. It is conveniently located just down the street from Krispy Kreme and sometimes after track practice we would go over and carb-load on doughnuts.</p>"+
        '<img src="lakeridge.jpg" id="ljhs">'
        );
vyard.bindPopup('<h1 id="heading">Vineyard Elementary</h1>'+
        "<p>I attended Vineyard Elementary. The school was only at this location while I was in 6th grade. Previously, it was located about 2 blocks away from my church building, right across the street from UVSC. The college bought my elementary school building and the new one was built in Vineyard.</p>"+
        '<img src="vineyard.jpg" id="vyard">'
        );
church.bindPopup('<h1 id="heading">My Church</h1>'+
        "<p>This was my church building growing up.</p>"+
        '<img src="bb.jpg" id="church">'
        );
pm.bindPopup('<h1 id="heading">Papa Murphys</h1>'+
        "<p>I started working at Papa Murphys my sophomore year in high school and worked there until I moved to Logan for school.</p>"+
        '<img src="pm.jpg" id="pm">'
        );

var hradius = L.circle([40.289251, -111.719683], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 1200,
}).addTo(mymap);

var hbound = L.polygon([
    [40.289153, -111.719533],
    [40.289378, -111.719533],
    [40.289378, -111.719968],
    [40.289153, -111.719968]
]).addTo(mymap);
