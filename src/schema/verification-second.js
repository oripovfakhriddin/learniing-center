import * as yup from "yup";

const VerificationSecondSchema = yup.object().shape({
  email: yup
    .string()
    .email("Emailgizni to'g'ri kiriting !")
    .required("Emailingizni kiriting !"),
  password: yup.number().required("Tasdiqlash parolini kiriting !"),
});

export default VerificationSecondSchema;
