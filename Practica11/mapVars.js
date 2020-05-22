var mapElement = document.getElementById("map");
var styleMapType = null;
let map = null;
var properties = {
    center: { lat: 21.152639, lng: -101.711598 },
    zoom: 20,
    mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
    }
}

const loadStandarMap = () => {
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        },
    }
    var marker = new google.maps.Marker({
        position: properties.center,
        map: mapa
    });

    marker.addListener('click', function () {
        mapa1.setZoom(8);
        mapa1.setCenter(marker.getPosition());
    });
}
