function initMap() {
    let styleMapType = new google.maps.StyledMapType([
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
    const properties = {
        center: { lat: 0, lng: 0 },
        zoom: 20,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'style_map']
        }
    }
    let mapElement = document.getElementById("map");
    let map = new google.maps.Map(mapElement, properties);
    map.mapTypes.set('style_map', styleMapType);
    map.setMapTypeId('style_map');
    let icon = {
        url:
            "https://i.pinimg.com/originals/8d/6a/51/8d6a51bd434804c0acab1d9f9cc311a1.gif",
        scaledSize: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };
    let marker = new google.maps.Marker({
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
        button.addEventListener("click", () => {
            watchId = navigator.geolocation.watchPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const coords = `${lat} , ${lng}`;
                const speed = position.coords.speed ? position.coords.speed : '0';
                const accuracy = position.coords.accuracy ? position.coords.accuracy : '0';
                const altitude = position.coords.altitude ? position.coords.altitude : '1';
                const time = (new Date(position.timestamp)).toString();
                const html = `
                <p>Coordenadas: ${coords}</p>
                <p>Exactitud: ${accuracy}</p>
                <p>Altitud: ${altitude}</p>
                <p>Velocidad: ${speed}</p>
                <p>Fecha y hora: ${time}</p>`;
                const data = document.getElementById('data');
                data.innerHTML = html;
                marker.setPosition(new google.maps.LatLng(lat, lng));
                map.panTo(new google.maps.LatLng(lat, lng));
            }, (error) => {
                console.error(error);
            }, positionOptions);

        });
        const botonStopWatch = document.getElementById('btnStopWatch');
        botonStopWatch.addEventListener('click', () => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
                const html = `
                            <p>Monitoreo terminado</p>
                        `;
                const datos = document.getElementById('data');
                datos.innerHTML = html;

            }
        });
    }

}