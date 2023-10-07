 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAfzG4LEnIpW3Ir8SwjK8YeJieFGygHDRw",
   authDomain: "webserber-9ef7e.firebaseapp.com",
   projectId: "webserber-9ef7e",
   storageBucket: "webserber-9ef7e.appspot.com",
   messagingSenderId: "547360482961",
   appId: "1:547360482961:web:52e6bb787e9bac8e0a0130",
   measurementId: "G-BEP6S43LJY"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);