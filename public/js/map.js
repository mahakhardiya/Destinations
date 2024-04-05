mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYWtoYXJkaXlhIiwiYSI6ImNsdWxoajZhNjBnNHUyaW9ndHV4YTQ1amkifQ.pGBGta2CuBuFSSU9clR2jA';
const map = new mapboxgl.Map({
    container: 'map',
    // You can add layers to the predetermined slots within the Standard style basemap.
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [77.2090, 28.6139], //starting pos [lon, lat]
    zoom: 9,
    // maxZoom: 6
});
