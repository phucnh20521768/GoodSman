import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCh04d8f4LTDS_Eimlvyts1Yaa74dkZI18",
    authDomain: "goodsman-da157.firebaseapp.com",
    projectId: "goodsman-da157",
    storageBucket: "goodsman-da157.appspot.com",
    messagingSenderId: "458144098180",
    appId: "1:458144098180:web:5b6d479c860034ca4a9fd1"
}

let _firebaseApp = null
let _firebaseFirestore = null
let _firebaseStorage = null

let firebaseApp = _firebaseApp == null ? (_firebaseApp = initializeApp(firebaseConfig)) : _firebaseApp

let firebaseFirestore = _firebaseFirestore == null ? (_firebaseFirestore = getFirestore(firebaseApp)) : _firebaseFirestore

let firebaseStorage = _firebaseStorage == null ? (_firebaseStorage = getStorage(firebaseApp)) : _firebaseStorage

export { firebaseFirestore, firebaseStorage, firebaseApp };