import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAFIyVKNti6UfMzBWMLOE_g-HfGIySZ25I",
    authDomain: "appdemo-3244a.firebaseapp.com",
    databaseURL: "https://appdemo-3244a.firebaseio.com",
    projectId: "appdemo-3244a",
    storageBucket: "appdemo-3244a.appspot.com",
    messagingSenderId: "508380174685",
    appId: "1:508380174685:web:1b9329e3f0cbe0a47cf0b4",
    measurementId: "G-KMS4165V3H"
};

export default class fbaseConfig {
    static init() {
        firebase.initializeApp(config);
    }
    static register(email, password) {

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log("Error: " + error)
            })
    }
}
