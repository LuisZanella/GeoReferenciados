const accountData = document.getElementById('accountData');
const loggedOutList = document.querySelectorAll('.logged-out');
const loggedInList = document.querySelectorAll('.logged-in');

const MenuConfiguration = user => {
    if (!user) {
        loggedInList.forEach(element => element.style.display = 'none');
        loggedOutList.forEach(element => element.style.display = 'block');
        return;
    }
    loggedInList.forEach(element => element.style.display = 'block');
    loggedOutList.forEach(element => element.style.display = 'none');

    db.collection('users').doc(user.uid).get()
        .then(response => {
            let html = ''
            html += response.data().name ? `<p> Name: ${response.data().name} </p>` : '';
            html += response.data().email ? `<p> Email: ${user.email} </p>` : '';
            html += response.data().phone ? `<p> Phone: ${response.data().phone} </p>` : '';
            html += response.data().address ? `<p> Address: ${response.data().address} </p>` : '';
            accountData.innerHTML = html;
        });

};
const dishesList = document.getElementById('dishesList');

const getDishes = data => {
    if (!data.length > 0) return dishesList.innerHTML = `<b class="col-12"><p class="text-center"> Get an account to see all the dishes</p></b>`;
    let html = '';
    data.forEach(doc => {
        const dish = doc.data();

        const column = `
            <div class="col-12 col-md-4 card-dish">
                <img src="images/${dish.image}" alt="${dish.name}" />
                <b><p>${dish.name}</p></b>
                <p class="text-danger"> $ ${dish.price}</p>
                <a href="https://www.paypal.me/grupohernandezalba/${dish.price}" target="_blank">
                    <button class="btn btn-primary">Pay now</button>
                </a>
            </div>
        `;
        html += column;
    });
    dishesList.innerHTML = html;
};