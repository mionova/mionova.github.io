// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// my access token
mapboxgl.accessToken =
  'pk.eyJ1IjoiaW9ub3ZhIiwiYSI6ImNrdnE4YnpnN2FteTYydnBnZmxlbGg2N3cifQ.A6G8IoRUppHD3R82y1-05Q';

// map instance per mapbox documentation
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ionova/ckvufiuqj2w8y15qpcji4qqe7',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// add marker to the map per mapbox documentation
const marker = new mapboxgl.Marker({
    "color": "#645EFD"
  })
  .setLngLat([-71.092761, 42.357575])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;

function move() {
  // using function marker.setLngLat() to update the marker coordinates
  // using counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}