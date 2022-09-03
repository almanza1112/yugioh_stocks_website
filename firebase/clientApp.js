// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4VTUbAEwFIdT4rGSpnr27MhB5quvQ2cw",
    authDomain: "yu-gi-oh--stocks.firebaseapp.com",
    projectId: "yu-gi-oh--stocks",
    storageBucket: "yu-gi-oh--stocks.appspot.com",
    messagingSenderId: "607829290739",
    appId: "1:607829290739:web:cdd03ca3643d4c35f71186",
    measurementId: "G-H2V0FPBWNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;