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

function Account() {
  const [inputEmail, setEmail] = useState(null);
  const [inputPassword, setPassword] = useState(null);

  const signInGoogle = async () => {
    let result = await SignInGoogle();
  };

  const signInPassword = async () => {
    let result = await SignInPassword(inputEmail, inputPassword);
  };

  const enterKeyUp = (e) => {
    if (e.key == "Enter") signInPassword();
  };

  return (
    <>
      <section className="account-section">
        <div className="hero-section__bg"></div>
        <div className="container bg-white rounded p-5">
          <div className="row col-xs-12 col-lg-12">
            <span className="col-12 text-center">
              <i className="ri-lock-2-line icon"></i>
            </span>
            <p className="col-12 text-center">Hey, chào mừng quay trờ lại!!!</p>
            <button
              type="button"
              className="col-12 my-3 btn btn-primary shadow-lg"
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
              type="text"
              className="col-12 my-3 p-2 form-control"
              id="username"
              placeholder="Tên đăng nhập"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="col-12 p-2 form-control"
              id="password"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={enterKeyUp}
            ></input>
            <button
              className="col-12 my-3 btn btn-primary text-uppercase shadow-lg"
              onClick={signInPassword}
            >
              <strong>Đăng nhập</strong>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
