import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  SignIn as SignInGoogle,
  SignOut as SignOutGoogle,
} from "../database/Auth/GoogleAuth";
import {
  SignIn as SignInPassword,
  SignOut as SignOutPassword,
  CreateAccount,
} from "../database/Auth/PasswordAuth";
import icon_google from "../assets/images/icon_google.png";
import "../styles/account.css";
import { async } from "@firebase/util";

function Account() {
  const [inputEmail, setEmail] = useState(null);
  const [inputPassword, setPassword] = useState(null);

  const signInGoogle = async () => {
    let result = await SignInGoogle();
  };

  const createAccount = async () => {
    let result = await CreateAccount(inputEmail, inputPassword)
  }

  const signInPassword = async () => {
    let result = await SignInPassword(inputEmail, inputPassword);
  };

  const enterKeyUp = (e) => {
    if (e.key === "Enter") signInPassword();
  };

  return (
    <>
      <section className="account-section">
        <form method="get" action="/">
          <div className="hero-section__bg"></div>
          <div className="container bg-white rounded">
            <div className="d-flex flex-column justify-content-center p-5">
              <span className="text-center">
                <i className="ri-lock-2-line icon"></i>
              </span>
              <p className="text-center">Hey, chào mừng quay trờ lại!!!</p>
              <button
                type="button"
                className="my-3 btn btn-primary shadow-lg"
                onClick={signInGoogle}
              >
                <p>
                  <img
                    src={icon_google}
                    alt=""
                    className="img-fluid col-1 mx-1"
                  />
                  Đăng nhập bằng Google
                </p>
              </button>
              <div className="d-flex">
                <hr className="my-auto flex-grow-1"></hr>
                <div className="px-3">Or</div>
                <hr className="my-auto flex-grow-1"></hr>
              </div>
              <input
                type="email"
                className="my-3 p-2 form-control"
                id="username"
                placeholder="Tên đăng nhập"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <input
                type="password"
                className="p-2 form-control"
                id="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={enterKeyUp}
                required
              ></input>
              <div className="row justify-content-around">
                <button
                type="submit"
                  className="col-md-5 col-12 my-3 btn btn-primary text-uppercase shadow-lg p-3"
                  onClick={signInPassword}
                >
                  <strong>Đăng nhập</strong>
                </button>
                <button
                type="submit"
                  className="col-md-5 col-12 my-3 btn btn-primary text-uppercase shadow-lg p-3"
                  onClick={createAccount}
                >
                  <strong>Đăng ký</strong>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Account;
