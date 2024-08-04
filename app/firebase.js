// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjBJ2d1rkEDlnjpPOi7HSVkPDwnB3VOQ",
  authDomain: "pantryapp-65aff.firebaseapp.com",
  projectId: "pantryapp-65aff",
  storageBucket: "pantryapp-65aff.appspot.com",
  messagingSenderId: "841413817000",
  appId: "1:841413817000:web:e1b5a8cc549081c3f1889d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}