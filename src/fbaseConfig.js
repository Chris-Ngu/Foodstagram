import * as firebase from 'firebase';
const config = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " ",
    measurementId: " "
};

export default class fbaseConfig {
    static init() {
        firebase.initializeApp(config);
    }
}
