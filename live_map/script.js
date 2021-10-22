mapboxgl.accessToken = 'pk.eyJ1IjoiamF5YW50a3UyMzQiLCJhIjoiY2t1enU4MmNoMHNzZzJxcGIza3F1YzFwMyJ9.qqrkkJrCH2FXDSoeN5CX-Q';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})

function successLocation(){

    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(){
 setupMap([20.59, 78.96]);
}

function setupMap(center){
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center:center,
  zoom:13
});
map.addControl(
  new MapboxDirections({
  accessToken: mapboxgl.accessToken
  }),
  'top-left'
  );
}