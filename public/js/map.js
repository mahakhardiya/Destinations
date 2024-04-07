mapboxgl.accessToken = 'pk.eyJ1IjoibWFoYWtoYXJkaXlhIiwiYSI6ImNsdWxoajZhNjBnNHUyaW9ndHV4YTQ1amkifQ.pGBGta2CuBuFSSU9clR2jA';
const map = new mapboxgl.Map({
    container: 'map',
    // You can add layers to the predetermined slots within the Standard style basemap.
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, //starting pos [lon, lat]
    zoom: 9,
    // maxZoom: 6
});

const marker = new mapboxgl.Marker({color: "red" })
        .setLngLat( listing.geometry.coordinates) //Listing.geometry.coordinates
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML("<h5>Exact location provided</h5>"))
        .addTo(map);