import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBzhc-sR8oQCsz7Kd-Dm4OXJZyLViP8SoQ",
    authDomain: "exemple-aziz.firebaseapp.com",
    projectId: "exemple-aziz",
    storageBucket: "exemple-aziz.appspot.com",
    messagingSenderId: "616200188714",
    appId: "1:616200188714:web:710cfc27598ab6c13aa453"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;

