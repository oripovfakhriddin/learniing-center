import { Fragment } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import VerificationIcon from "../../../assets/icons/verification-icon.png";
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
          <h1 className="login__title">Verification</h1>
          <div className="verification__icons__box">
            <img src={VerificationIcon} alt="" />
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input__box">
              <input className="input" {...register("email")} required />
              <span htmlFor="email">Email</span>
              {errors.email ? (
                <p className="text-danger">{errors.email.message}</p>
              ) : null}
            </div>
            <button className="form__btn" type="submit">
              Tasdiqlash
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default VerificationPage;
