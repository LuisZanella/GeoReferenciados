function initMap() {
    var styleMapType = new google.maps.StyledMapType([
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
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
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
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "poi.business",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#532900"
                }
            ]
        },
        {
            "featureType": "poi.government",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#a639ae"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#820000"
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
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#14653f"
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
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#003d79"
                }
            ]
        },
        {
            "featureType": "poi.sports_complex",
            "stylers": [
                {
                    "color": "#535353"
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
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
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
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
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
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
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
    var properties = {
        center: {
            lat: 21.152639,
            lng: -101.711598
        },
        zoom: 30,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        }
    }
    var mapElement = document.getElementById("map");
    var map = new google.maps.Map(mapElement, properties);
    map.mapTypes.set('style_map', styleMapType);
    map.setMapTypeId('style_map');
    var icon = {
        url:
            "https://i.pinimg.com/originals/8d/6a/51/8d6a51bd434804c0acab1d9f9cc311a1.gif",
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    var marker = new google.maps.Marker({
        position: properties.center,
        icon,
        map
    });
    let watchId = null;
    const button = document.getElementById("btnWatch");
    let positionOptions = {
        enableMighAccuarcy: true,
        timeout: 10 * 1000,
        maximumAge: 30 * 1000
    }
    if (navigator.geolocation) {
        button.addEventListener("click", function () {
            watchId = navigator.geolocation.watchPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const coords = `${lat} , ${lng}`;
                const exactitud = position.coords.accuracy ? position.coords.accuracy : 'no disponible';
                const altitud = position.coords.altitude ? position.coords.altitude : 'no disponible';
                const speed = position.coords.speed ? position.coords.speed : 'no disponible';
                const time = (new Date(position.timestamp)).toString();
                const html = `
                <p>Coordenadas: ${ coords}</p>
                <p>Exactitud: ${ exactitud}</p>
                <p>Altitud: ${ altitud}</p>
                <p>Velocidad: ${ speed}</p>
                <p>Fecha y hora: ${ time}</p>`;
                const data = document.getElementById('data');
                data.innerHTML = html;
                marker.setPosition(new google.maps.LatLng(lat, lng));
                map.panTo(new google.maps.LatLng(lat, lng));
            }, (error) => {
                console.error(error);
            }, positionOptions);

        });
        const botonStopWatch = document.getElementById('btnStopWatch');
        botonStopWatch.addEventListener('click', function () {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);

                const html = `
                            <p>Se detuvo el monitoreo</p>
                        `;

                const datos = document.getElementById('data');
                datos.innerHTML = html;

            }
        });
    }

}