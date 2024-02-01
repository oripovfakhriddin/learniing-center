import * as yup from "yup";

const VerificationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Emailgizni to'g'ri kiriting !")
    .required("Emailingizni kiriting !"),
  // password: yup.number().required("Tasdiqlash parolini kiriting !"),
});

export default VerificationSchema;
