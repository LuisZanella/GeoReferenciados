
function initMap() {
    styleMapType = new google.maps.StyledMapType([
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ], { name: 'Modo Oscuro' });
    changeMap();
}

const changeMap = () => {
    const selectedItem = document.getElementById("selectMap").value;
    switch (selectedItem) {
        case 'standar': loadStandarMap();
            break;
        case 'noControlls': loadNoControllsMap();
            break;
        case 'zoomDisabled': loadMapZoomDisabled();
            break;
        case 'mapTypeControl': loadMapTypeControl();
            break;
        case 'mapPositionControl': loadMapPositionControl();
            break;
        case 'mapRestrincted': loadMapRestrincted();
            break;
        default: return;
    }
    map = new google.maps.Map(mapElement, properties);
    map.mapTypes.set('style_map', styleMapType);
    map.setMapTypeId('style_map');
    marker = new google.maps.Marker({
        position: properties.center,
        map: map
    });
    setMark();
}
const setMark = () => {
    const selectedItem = document.getElementById("selectMap").value;
    switch (selectedItem) {
        case 'standar': MarkerRemoveZoom();
            break;
        case 'noControlls': MarkerReturnPoint();
            break;
        case 'zoomDisabled': MarkerShowZoomPosition();
            break;
        case 'mapTypeControl': SetMarkerOnClick();
            break;
        case 'mapPositionControl': ShowOnClickCoords();
            break;
        case 'mapRestrincted': OnClickPanCenter();
            break;
        default: return;
    }
}
const loadNoControllsMap = () => {
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        },
        disableDefaultUI: true
    }
}
const MarkerReturnPoint = () => {
    map.addListener('center_changed', function () {
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });
}
const loadMapZoomDisabled = () => {
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        },
        zoomControl: false,
        scaleControl: false
    }
}
const MarkerShowZoomPosition = () => {
    let infowindow = new google.maps.InfoWindow({
        content: 'Cambia el zoom',
        position: properties.position
    });

    infowindow.open(map);

    map.addListener('zoom_changed', function () {
        infowindow.setContent('Zoom' + map.getZoom());
    });
}
const loadMapTypeControl = () => {
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        }
    }
}
const SetMarkerOnClick = () => {
    map.addListener('click', function (e) {
        console.log(e.latLng);
        setMarker(e.latLng);
    });
}
const setMarker = (latLng) => {

    marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    map.panTo(latLng);
}
const loadMapPositionControl = () => {
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: true
    }
}
const ShowOnClickCoords = () => {
    let infowindow = new google.maps.InfoWindow({
        content: 'Haz click para obtener las coordenadas',
        position: properties.position
    });
    infowindow.open(map);
    map.addListener('click', (event) => {
        infowindow.close();
        infowindow = new google.maps.InfoWindow({ position: event.latLng });
        infowindow.setContent(event.latLng.toString());
        infowindow.open(map);
    });
}
const loadMapRestrincted = () => {
    let limits = {
        north: 21.390039,
        south: 20.858414,
        west: -102.149631,
        east: -101.092990
    }
    properties = {
        center: { lat: 21.152639, lng: -101.711598 },
        zoom: 20,
        restriction: {
            latLngBounds: limits,
            strictBounds: false
        }
    }
}
const OnClickPanCenter = () => {
    google.maps.event.addDomListener(map, 'click', function () {
        window.alert(' Se hizo click en el map');
    });
    var button = document.getElementById('btnCenter');
    google.maps.event.addDomListener(button, 'click', function () {
        map.panTo(properties.center);
    });
}