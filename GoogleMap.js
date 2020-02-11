      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.295, lng: -111.7},
          zoom: 14
        });
      var MVHSlatlong = {lat: 40.295603, lng: -111.711145};
      var marker = new google.maps.Marker({
        position: MVHSlatlong,
        map: map,
        title:"Mountain View High School"
        });

      var PMlatlong = {lat: 40.297586, lng: -111.700476};
      var marker = new google.maps.Marker({
        position: PMlatlong,
        map: map,
        title:"Papa Murphy's"
        });

      var Vlatlong = {lat: 40.289223, lng: -111.737455};
      var marker1 = new google.maps.Marker({
        position: Vlatlong,
        map: map,
        title:"Vineyard Elementary"
        });

      var LJHSlatlong = {lat: 40.279940, lng: -111.704112};
      var marker1 = new google.maps.Marker({
        position: LJHSlatlong,
        map: map,
        title:"Lakeridge Jr. High"
        });

      var Churchlatlong = {lat: 40.285835, lng: -111.721751};
      var marker1 = new google.maps.Marker({
        position: Churchlatlong,
        map: map,
        title:"My Church"
        });

      var Houselatlong = {lat: 40.289272, lng: -111.719670};
      var marker1 = new google.maps.Marker({
        position: Houselatlong,
        map: map,
        title:"My House"
        });
      }
