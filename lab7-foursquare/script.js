// Create a foursquare map using an application framework
// is the entry point of our application
async function main() {
    // nested function
    // the init function, because is nested inside the main function
    // can only be called in the main function
    function init() {
        let map = initMap();
        window.addEventListener('DOMContentLoaded', function(){

        })
    }

    // create our map
    function initMap(){
        let singapore = [1.29, 103.85];
        let map = L.map('singapore-map');
        map.setView(singapore, 13);
    
        // setup tilelayer
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
        }).addTo(map);
    
        return map;
    }

    init();
}
main();
