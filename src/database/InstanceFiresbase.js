import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = require("../../package.json").firebaseConfig;
const firebaseApp = initializeApp(firebaseConfig);

let _firebaseFirestore = null
let _firebaseStorage = null

let firebaseFirestore = _firebaseFirestore == null ? (_firebaseFirestore = getFirestore(firebaseApp)) : _firebaseFirestore

let firebaseStorage = _firebaseStorage == null ? (_firebaseStorage = getStorage(firebaseApp)) : _firebaseStorage

export { firebaseFirestore, firebaseStorage };