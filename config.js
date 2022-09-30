import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDKWHz6iY6DgjaZaNGVbKkHfsYS8AB6evE",
  authDomain: "e-library-4edaa.firebaseapp.com",
  projectId: "e-library-4edaa",
  storageBucket: "e-library-4edaa.appspot.com",
  messagingSenderId: "885432723001",
  appId: "1:885432723001:web:fe169d2957d278fbef8fe8"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
