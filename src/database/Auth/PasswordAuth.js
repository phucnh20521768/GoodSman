import { async } from "@firebase/util";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../InstanceFiresbase";
import { SignOut as logout, SignIn as login } from './Auth.js'

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
        SignIn(email, password)
    } catch (error) {
        console.log("error login")
        return false
    }
    return true
}

export { SignIn, SignOut, CreateAccount }