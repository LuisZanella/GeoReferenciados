const accountData = document.getElementById('accountData');
const loggedOutList = document.querySelectorAll('.logged-out');
const loggedInList = document.querySelectorAll('.logged-in');

const MenuConfiguration = user => {
    if (!user) {
        loggedInList.forEach(element => element.style.display = 'none');
        loggedOutList.forEach(element => element.style.display = 'block');
        return;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            db.collection('users').doc(user.uid).update({
                coords: pos
            })
        })
    }
    loggedInList.forEach(element => element.style.display = 'block');
    loggedOutList.forEach(element => element.style.display = 'none');

    db.collection('users').doc(user.uid).get()
        .then(response => {
            let html = ''
            html += response.data() ? `<p> Name: ${response.data().name} </p>` : '';
            html += `<p> Email: ${user.email} </p>`;
            html += response.data() ? `<p> Phone: ${response.data().phone} </p>` : '';
            html += response.data() ? `<p> Address: ${response.data().address} </p>` : '';
            html += response.data() ? `<p> Coordinates: ${response.data().coords.lat} , ${response.data().coords.lng} </p>` : '';
            accountData.innerHTML = html;
        });

};

const getFriends = data => {
    const coords = {
        lat: 21.097771,
        lng: -101.601164
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 14
    });
    data.forEach(doc => {
        let info = new google.maps.InfoWindow;
        var pos = {
            lat: doc.data().coords.lat,
            lng: doc.data().coords.lng
        }
        info.setPosition(pos);
        info.setContent(doc.data().name);
        info.open(map);
        map.setCenter(pos);
    })
    console.log(data);
};
