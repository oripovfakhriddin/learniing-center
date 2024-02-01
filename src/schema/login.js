import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Emailingizni to'g'ri kiriting !"),
  password: yup
    .string()
    .min(4, "Minimal parol uzunligi 4 ga teng !")
    .max(10, "Maksimal parol uzunligi 10 ga teng !"),
});

export default LoginSchema;
