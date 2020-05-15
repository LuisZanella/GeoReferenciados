const auth = firebase.auth();
const db = firebase.firestore();

const formLogin = document.getElementById('formLogin');

auth.onAuthStateChanged(user => {
    if (!user) {
        getFriends([]);
        return MenuConfiguration();
    }
    MenuConfiguration(user);
    db.collection('users').onSnapshot(response => {
        getFriends(response.docs);
    });
});

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = formLogin['emailLogin'].value;
    let password = formLogin['passwordLogin'].value;
    auth.signInWithEmailAndPassword(email, password).then(response => {
        $("#loginModal").modal('hide');
        formLogin.reset();
        formLogin.querySelector('.error').innerHTML = '';
    }).catch(error => {
        console.error(error);
        formLogin.querySelector('.error').innerHTML = errorMessage(error.code);
    });
});

const logout = document.getElementById("Logout");
function errorMessage(code) {
    let message = '';
    switch (code) {
        case 'auth/wrong-password':
            message = 'Wrong password';
            break;
        case 'auth/user-not-found':
            message = 'User not found'
            break;
        case 'auth/weak-password':
            message = 'Your password needs more characters'
            break;
        default:
            message = 'Error'
            break;
    }
    return message;
}

logout.addEventListener('click', event => {
    event.preventDefault();
    auth.signOut().then(() => {
        alert('Your session has finnished');
    }).catch(error => {
        console.error(error);
    })
});

const formSignUp = document.getElementById('formSignUp');

formSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = formSignUp['emailSignUp'].value;
    const password = formSignUp['passwordSignUp'].value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            db.collection('users').doc(response.user.uid).set({
                name: formSignUp['nameSignUp'].value,
                phone: formSignUp['phoneSignUp'].value,
                address: formSignUp['addressSignUp'].value
            })

        })
        .then(response => {

            $("#signUpModal").modal('hide');
            formSignUp.reset();
            formSignUp.querySelector('.error').innerHTML = "";
        }).catch(error => {
            console.error(error);
            formSignUp.querySelector('.error').innerHTML = errorMessage(error.code);
        })
});

loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(response => {
        const token = response.credential.accessToken;
        const user = response.user;
        let html = `
            <p> Name: ${user.displayName}</p>
            <p> Email: ${user.email}</p>
            <img src="${user.photoURL}"/>        
        `;
        accountData.innerHTML = html;
        $("#loginModal").modal('hide');
        formLogin.reset();
        formLogin.querySelector('.error').innerHTML = '';
    }).catch(error => {
        console.error(error);
    })
}

loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(response => {
        const token = response.credential.accessToken;
        const user = response.user;
        let html = `
            <p> Name: ${user.displayName}</p>
            <p> Email: ${user.email}</p>
            <img src="${user.photoURL}"/>        
        `;
        accountData.innerHTML = html;
        $("#loginModal").modal('hide');
        formLogin.reset();
        formLogin.querySelector('.error').innerHTML = '';
    }).catch(error => {
        console.error(error);
    })
}