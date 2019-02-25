let map
let markers = new Map()
let arr=[];

function initMap() {
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude: lat, longitude: lng } = pos.coords
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 17
    })
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    });
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    navigator.geolocation.getCurrentPosition((pos)=>{
      var markerHome = new google.maps.Marker({
        position:{lat:pos.coords.latitude,lng:pos.coords.longitude},
        map:map,
        icon:image
      })
      arr.push(markerHome);
    });
  }, err => {
    console.error(err)
  })
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
    origin: pointA,
    destination: pointB,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const socket = io('/')

  socket.on('locationsUpdate', locations => {
      console.log(locations);
      markers.forEach((marker, id) => {
      marker.setMap(null)
      markers.delete(id)
    })
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    locations.forEach(([id, position]) => {
      if (position.lat && position.lng) {
          marker = new google.maps.Marker({
          position:position,
          map:map,
          icon:image
        })
        markers.set(id, marker)
      }
    })
    calculateAndDisplayRoute(directionsService, directionsDisplay, marker.position, arr[0].position);
  })

  setInterval(() => {
    socket.emit('requestLocations','abc@abc.com')
  }, 2000)
})
