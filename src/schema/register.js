import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Ismingiz kamida 3 xarfdan iborat bo'lishi shart !"),
  lastName: yup
    .string()
    .min(3, "Familyangiz kamida 3 xarfdan iborat bo'lishi shart"),
  email: yup
    .string()
    .email("Emailingizni to'g'ri kiriting !")
    .required("Emailingizni kiriting !"),
  password: yup
    .string()
    .min(4, "Minimal parol uzunligi 4 ga teng !")
    .max(10, "Maksimal parol uzunligi 10 ga teng !"),
  confirmPassword: yup
    .string()
    .min(4, "Minimal parol uzunligi 4 ga teng !")
    .max(10, "Maksimal parol uzunligi 10 ga teng !"),
});

export default RegisterSchema;
