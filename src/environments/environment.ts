// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore if needed
import { getAuth } from "firebase/auth"; // Import Authentication if needed

// Your web app's Firebase configuration
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  firebaseConfig: {
    apiKey: "AIzaSyC0sfBvdwnAtzju6rz8tJuLLs3Af16FTHI",
    authDomain: "urbanreportv3.firebaseapp.com",
    databaseURL: "https://urbanreportv3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "urbanreportv3",
    storageBucket: "urbanreportv3.appspot.com",
    messagingSenderId: "484074463731",
    appId: "1:484074463731:web:71f3db0637fc4034727286"
  },
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

// If you need Firestore, initialize it
const firestore = getFirestore(app);

// If you need Authentication, initialize it
const auth = getAuth(app);
