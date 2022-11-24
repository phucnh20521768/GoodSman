import React, { useState } from "react";
import { Container, Modal, ModalBody } from "react-bootstrap";

import {
  SignIn as SignInGoogle,
  SignOut as SignOutGoogle,
} from "../../database/Auth/GoogleAuth";
import {
  SignIn as SignInPassword,
  SignOut as SignOutPassword,
  CreateAccount,
} from "../../database/Auth/PasswordAuth";

import icon_google from "../../assets/images/icon_google.png";
function AccountModal({ props }) {
  const [inputEmail, setEmail] = useState(null);
  const [inputPassword, setPassword] = useState(null);

  return (
    <Modal
      show={props[0]}
      onHide={() => props[1](false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalBody>
        <Container>
          <div className="row p-4">
            <span className="col-12 text-center">
              <i className="ri-lock-2-line icon"></i>
            </span>
            <p className="col-12 text-center">Hey, chào mừng quay trờ lại!!!</p>
            <button
              type="button"
              className="col-12 my-3 btn btn-primary"
              onClick={() =>
                SignInGoogle().then((result) => {
                  if (result.user() != null) props[1](false);
                })
              }
            >
              <p>
                <img
                  src={icon_google}
                  alt=""
                  className="img-fluid col-1 mx-1"
                />{" "}
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
              className="col-12 my-3 p-3 form-control"
              id="username"
              placeholder="Tên đăng nhập"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              className="col-12 p-3 form-control"
              id="password"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              className="col-12 my-3 btn btn-primary text-uppercase"
              onClick={() =>
                SignInPassword(inputEmail, inputPassword).then((result) => {
                  if (result.user() != null) props[1](false);
                })
              }
            >
              <strong>Đăng nhập</strong>
            </button>
          </div>
        </Container>
      </ModalBody>
    </Modal>
  );
}

export default AccountModal;
