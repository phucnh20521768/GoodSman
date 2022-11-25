let _user = null
let _token = null

const user = () => _user

const token = () => _token

const SignOut = () => {
    _user = null
    _token = null
}

const SignIn = (user, token = null) => {
    _user = user
    _token = token
}

const hasLogin = () => _user != null

export { user, token, hasLogin, SignOut, SignIn }