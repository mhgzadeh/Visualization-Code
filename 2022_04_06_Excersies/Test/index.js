let map
let stuttgart1 = [48.81, 9.16]
let stuttgart2 = [48.82, 9.16]

const initMap = () => {

    map = L.map('map').setView(stuttgart1, 15);

    let osm = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        minZoom: 2,
        maxZoom: 20
    });

    let carto = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        minZoom: 2,
        maxZoom: 20
    });

    let esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        minZoom: 2,
        maxZoom: 18
    });

    googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });


    googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });


    googleSatellite = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 22,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });


    googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    map.addLayer(googleSatellite);


    const markerBuider = (coordinate, title) => L.marker(
        coordinate,
        {
            title: title
        }
    )


    const addPointToMap = (coordinate) => {
        marker = markerBuider(coordinate, "Mohammad's second point");
        marker.addTo(map);

        marker.bindPopup(
            '<canvas id="myChart"></canvas><br>Mohammad'
        );
    }

    let beachFlagIcon = L.icon({
        iconUrl: '../images/beachflag.png',
        iconSize: [30, 30],
        iconAnchor: [0, 32],
        popupAnchor: [0, -42]
    });

    addPointToMap(stuttgart2)

    let marker1 = L.marker(
        stuttgart1,
        {
            title: 'mein neuer Marker',
            icon: beachFlagIcon
        }
    )
    marker1.addTo(map)
    marker1.bindPopup('<canvas id="myChart"></canvas><br>Mohammad').openPopup();

    let popup = L.popup();

    function onMapClick(e) {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {}
        };

        popup
            .setLatLng(e.latlng)
            .setContent('<canvas onload="config" id="myChart"></canvas>')
            .openOn(map);

        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
    }

    map.on('click', onMapClick);

    console.log(marker1.options.title);
    console.log(marker1._latlng.lat);

    // console.log(marker1);
}



