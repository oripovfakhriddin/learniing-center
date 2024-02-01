import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import VerificationIcon from "../../../assets/icons/verification-icon.png";
import { EMAIL } from "../../../constants/keys";
import VerificationSchema from "../../../schema/verification";
import VerificationSecondSchema from "../../../schema/verification-second";

import "./style.scss";

const VerificationPage = () => {
  const [verificationStatus, setVerificationStatus] = useState(false);
  const [emailValue, setEmailValue] = useState(Cookies.get(EMAIL) || null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(VerificationSchema) });

  const {
    register: registerSecond,
    handleSubmit: handleSubmitSecond,
    formState: { errors: errorsSecond },
  } = useForm({ resolver: yupResolver(VerificationSecondSchema) });

  const onSubmit = (verificationData) => {
    if (!verificationStatus) {
      Cookies.set(EMAIL, verificationData.email);
      setEmailValue(verificationData.email);
      setVerificationStatus(true);
      return;
    } else {
      console.log("salom");
    }
  };

  const onSubmitSecond = (verificationSecondData) => {
    console.log(verificationSecondData);
  };

  return (
    <Fragment>
      <section>
        <div className="container form__container">
          <div className="verification__box">
            <h1 className="login__title">Tasdiqlash</h1>
            <div className="verification__icons__box">
              <img src={VerificationIcon} alt="" />
            </div>
            {verificationStatus ? (
              <form
                className="form"
                onSubmit={handleSubmitSecond(onSubmitSecond)}
              >
                <div className="input__box">
                  <input
                    className="input"
                    defaultValue={emailValue}
                    readOnly
                    {...registerSecond("email")}
                    required
                  />
                  <span htmlFor="email">Email</span>
                  {errorsSecond.email ? (
                    <p className="text-danger">{errorsSecond.email.message}</p>
                  ) : null}
                </div>
                <div className="input__box">
                  <input
                    className="input"
                    {...registerSecond("password")}
                    required
                  />
                  <span htmlFor="email">Tasdiqlash paroli</span>
                  {errorsSecond.email ? (
                    <p className="text-danger">{errorsSecond.email.message}</p>
                  ) : null}
                </div>
                <button className="form__btn" type="submit">
                  Tasdiqlash
                </button>
              </form>
            ) : (
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
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default VerificationPage;
