import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import { EMAIL } from "../../../constants/keys";
import LoginSchema from "../../../schema/login";

import "./style.scss";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const emailData = Cookies.get(EMAIL);
  const onSubmit = (loginData) => {
    console.log(loginData);
  };
  return (
    <Fragment>
      <section id="login">
        <div className="wrapper__login">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Kirish</h1>
            <div className="input__box">
              <div className="input__field">
                <input
                  type="text"
                  value={emailData}
                  readOnly
                  placeholder="Email"
                  {...register("email")}
                />
                <i className="bx bxs-envelope"></i>
                {errors.email ? (
                  <p className="text-danger">{errors.email.message}</p>
                ) : null}
              </div>
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Parol"
                  {...register("password")}
                />
                <i className="bx bxs-lock-alt"></i>
                {errors.password ? (
                  <p className="text-danger">{errors.password.message}</p>
                ) : null}
              </div>
            </div>
            <button className="btn">Kirish</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
