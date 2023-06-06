import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAuQQPCzzTLH9cC5GDtxECpG4z7_7Qo2-A",
    authDomain: "know-it-3f368.firebaseapp.com",
    projectId: "know-it-3f368",
    storageBucket: "know-it-3f368.appspot.com",
    messagingSenderId: "995311331020",
    appId: "1:995311331020:web:52218ce2f9783d07930469"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

export default db;