import { async } from "@firebase/util";
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
import { firebaseApp } from "../InstanceFiresbase";

const provider = new GoogleAuthProvider();
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

async function SignIn() {
    try {
        let userCredential = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(userCredential)
        _user = userCredential.user
        _token = credential.accessToken
    } catch (error) {
        console.log("error login")
    }
    return { user, token }
}

export { user, token, SignIn, SignOut }