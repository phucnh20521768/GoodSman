import { async } from "@firebase/util";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../InstanceFiresbase";

const auth = getAuth()
let _user = null
let _token = null

let user = () => _user

let token = () => _token

async function SignOut() {
    try {
        await signOut(auth)
        _user = null
        _token = null
    } catch (error) {
        console.log("error-logout")
    }
    return { user, token }
}

async function SignIn(email, password) {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        _user = userCredential.user
    } catch (error) {
        console.log("error login")
    }
    return { user, token }
}

async function CreateAccount(email, password) {
    try {
        console.log(email)
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        _user = userCredential.user
    } catch (error) {
        console.log(error)
        console.log("error login")
    }
    return { user, token }
}

export { user, token, SignIn, SignOut, CreateAccount }