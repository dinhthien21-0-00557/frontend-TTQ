import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHg7L8yaPO9RAb4ZBlDdspVUk9HMlkAbw",
  authDomain: "shop-ttq.firebaseapp.com",
  projectId: "shop-ttq",
  storageBucket: "shop-ttq.appspot.com",
  messagingSenderId: "443151880467",
  appId: "1:443151880467:web:88f07e5f7f97545caf8ae6",
  measurementId: "G-P48QGQDCX2",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
