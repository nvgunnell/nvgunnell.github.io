      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.295, lng: -111.7},
          zoom: 14
        });

                var contentMVHS = '<div id="content">'+
               '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Mountain View High School</h1>'+
                '<div id="bodyContent">'+
                  '<p>M.V.H.S. MVHS the best! Home of the bruins. Located on Center St. in Orem, this is where I went to high school. I took a geology class that led me to choose that as my major.</p>'+
                '<img src="band.jpg" height="150px" id="band">'+
                '</div>'+
                '</div>';

                var contentPM = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Papa Murphys</h1>'+
                '<div id="bodyContent">'+
                '<p>I started working at Papa Murphys my sophomore year in high school and worked there until I moved to Logan for school.</p>'+
                '<img src="pm.jpg" height="150px" id="pm">'+
                '</div>'+
                '</div>';

                var contentLJHS = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Lakeridge Junior High School</h1>'+
                '<div id="bodyContent">'+
                '<p>I went to Lakeridge Jr. High School.</p>'+
                '<img src="lakeridge.jpg" height="150px" id="lakeridge">'+
                '</div>'+
                '</div>';

                var contentVin = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">Vineyard Elementary</h1>'+
                '<div id="bodyContent">'+
                '<p>I attended Vineyard Elementary. The school was only at this location while I was in 6th grade. Previously, it was located about 2 blocks away from my church building, right across the street from UVSC. The college bought my elementary school building and the new one was built in Vineyard.</p>'+
                '<img src="vineyard.jpg" height="150px" id="vineyard">'+
                '</div>'+
                '</div>';

                var contentChurch = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">My Church</h1>'+
                '<div id="bodyContent">'+
                '<p>This was my church building growing up.</p>'+
                '<img src="bb.jpg" height="150px" id="bb">'+
                '</div>'+
                '</div>';

                var contentHouse = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">My House</h1>'+
                '<div id="bodyContent">'+
                '<p>This is the house I grew up in. We moved here when I was 3 years old.</p>'+
                '<img src="Young.jpg" height="150px" id="home">'+
                '</div>'+
                '</div>';

      var MVHSlatlong = {lat: 40.295603, lng: -111.711145};
      var marker1 = new google.maps.Marker({
        position: MVHSlatlong,
        map: map,
        title:"Mountain View High School"
        });
          var MVinfowindow = new google.maps.InfoWindow({
            content: contentMVHS,
          });
          marker1.addListener('click', function() {
            MVinfowindow.open(map, marker1);
          });

      var PMlatlong = {lat: 40.297586, lng: -111.700476};
      var marker2 = new google.maps.Marker({
        position: PMlatlong,
        map: map,
        title:"Papa Murphy's"
        });
          var PMinfowindow = new google.maps.InfoWindow({
            content: contentPM,
          });
          marker2.addListener('click', function() {
            PMinfowindow.open(map, marker2);
          });

      var Vlatlong = {lat: 40.289223, lng: -111.737455};
      var marker3 = new google.maps.Marker({
        position: Vlatlong,
        map: map,
        title:"Vineyard Elementary"
        });
          var Vinfowindow = new google.maps.InfoWindow({
            content: contentVin,
          });
          marker3.addListener('click', function() {
            Vinfowindow.open(map, marker3);
          });

      var LJHSlatlong = {lat: 40.279940, lng: -111.704112};
      var marker4 = new google.maps.Marker({
        position: LJHSlatlong,
        map: map,
        title:"Lakeridge Jr. High"
        });
          var Linfowindow = new google.maps.InfoWindow({
            content: contentLJHS,
          });
          marker4.addListener('click', function() {
            Linfowindow.open(map, marker4);
          });

      var Churchlatlong = {lat: 40.285835, lng: -111.721751};
      var marker5 = new google.maps.Marker({
        position: Churchlatlong,
        map: map,
        title:"My Church"
        });
          var CHinfowindow = new google.maps.InfoWindow({
            content: contentChurch,
          });
          marker5.addListener('click', function() {
            CHinfowindow.open(map, marker5);
          });


      var Houselatlong = {lat: 40.289272, lng: -111.719670};
      var marker6 = new google.maps.Marker({
        position: Houselatlong,
        map: map,
        title:"My House"
        });
          var Hinfowindow = new google.maps.InfoWindow({
            content: contentHouse,
          });
          marker6.addListener('click', function() {
            Hinfowindow.open(map, marker6);
          });
      }
