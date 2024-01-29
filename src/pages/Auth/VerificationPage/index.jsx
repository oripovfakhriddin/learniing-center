import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import VerificationSchema from "../../../schema/verification";

import "./style.scss";

const VerificationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VerificationSchema) });

  const onSubmit = (verificationData) => {
    console.log(verificationData);
  };

  return (
    <Fragment>
      <section>
        <div className="container form__container">
          <h1 className="login__title">Login</h1>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Emailingizni kiriting !"
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-danger">{errors.email.message}</p>
            ) : null}
            <button className="form__btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default VerificationPage;
