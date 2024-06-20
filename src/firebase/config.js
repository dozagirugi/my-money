import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTKiBwylSHyL0nBmC86TC0VRQSEzzp7lU",
  authDomain: "mymoney-da970.firebaseapp.com",
  projectId: "mymoney-da970",
  storageBucket: "mymoney-da970.appspot.com",
  messagingSenderId: "120971162801",
  appId: "1:120971162801:web:81502c04688a6cdb561e90",
};

//firebase init
firebase.initializeApp(firebaseConfig);

//DB service
const firedb = firebase.firestore();
//Login Athentication
const fireauth = firebase.auth();
//DB 날짜 시간
const timestamp = firebase.firestore.Timestamp;

export { firedb, fireauth, timestamp };
