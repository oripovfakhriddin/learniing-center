import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import { EMAIL } from "../../../constants/keys";
import RegisterSchema from "../../../schema/register";

import "./style.scss";

const RegisterPage = () => {
  const emailData = Cookies.get(EMAIL);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = (registerData) => {
    if (registerData.password === registerData.confirmPassword) {
      console.log(registerData);
    } else {
      toast.error("Tasdiqlash paroli xato")
    }
  };

  return (
    <Fragment>
      <section id="register">
        <div className="wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{`Ro'yhatdan o'tish`}</h1>
            <div className="input__box">
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Ism"
                  {...register("firstName")}
                />
                <i className="bx bxs-user"></i>
                {errors.firstName ? (
                  <p className="text-danger">{errors.firstName.message}</p>
                ) : null}
              </div>
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Familya"
                  {...register("lastName")}
                />
                <i className="bx bxs-user"></i>
                {errors.lastName ? (
                  <p className="text-danger">{errors.lastName.message}</p>
                ) : null}
              </div>
            </div>
            <div className="input__box">
              <div className="input__field">
                <input
                  type="text"
                  readOnly
                  value={emailData}
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
            <div className="input__box">
              <div className="input__field">
                <input
                  type="text"
                  placeholder="Tasdiqlash paroli"
                  {...register("confirmPassword")}
                />
                <i className="bx bxs-lock-alt"></i>
                {errors.confirmPassword ? (
                  <p className="text-danger">
                    {errors.confirmPassword.message}
                  </p>
                ) : null}
              </div>
            </div>
            <button type="submit" className="btn">{`Ro'yhatdan o'tish`}</button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default RegisterPage;
