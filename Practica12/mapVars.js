var mapElement = document.getElementById("map");
var styleMapType = null;
var marker = null;
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
    marker = new google.maps.Marker({
        position: properties.center,
        map: mapElement
    });

    marker.addListener('click', function () {
        mapElement.setZoom(8);
        mapElement.setCenter(marker.getPosition());
    });
}
