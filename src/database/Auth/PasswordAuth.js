import { async } from "@firebase/util";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../InstanceFiresbase";
import { SignOut as logout, SignIn as login } from './Auth.js'
import {
    firebaseFirestore,
} from "../InstanceFiresbase";

import { collection, addDoc } from "firebase/firestore";

const auth = getAuth()

async function SignOut() {
    try {
        await signOut(auth)
        logout()
    } catch (error) {
        console.log("error-logout")
        return false
    }
    return true
}

async function SignIn(email, password) {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        login(userCredential.user)
    } catch (error) {
        console.log("error login")
        return false
    }
    return true
}

async function CreateAccount(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        await SignIn(email, password)
        await AddUsers(email)
    } catch (error) {
        console.log("error login")
        return false
    }
    return true
}

async function AddUsers(email) {


    try {
        const docRef = await collection(firebaseFirestore, "users");

        await addDoc(docRef, {
            email: email,
            name: email.takeUntil(item => item === '@'),
            uid: "",
            urlImg: "https://firebasestorage.googleapis.com/v0/b/goodsman-1dd35.appspot.com/o/productImages%2Feweqw%2Fuser-icon.png?alt=media&token=e7d1ad3b-fadc-4f84-a4af-090a98e197c0"
        });
    } catch (error) {


    }
};

export { SignIn, SignOut, CreateAccount }