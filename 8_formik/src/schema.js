// Validasyon Şeması
// Yup kullanarak bir doğrulama şeması oluşturabiliriz.
// Şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için geçerli doğrulama kurallarını tanıması

import * as yup from "yup";

// metin içerisnde en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// yup.object.shape() ifadesi form'un state'inin tutuğumuz nesnenin her bir alanın geçerli olması için gerekli koşulları ifade etmemizi sağlar
const schema = yup.object().shape({
  // email alanının geçerli olması için gerekli koşulları
  email: yup
    .string()
    .required("email alanı zorunludur")
    .email("email geçerli bir formatta değil"),

  // age alanının geçerli olması için gerekli koşulları
  age: yup
    .number()
    .min(18, "yaş 18'den küçük olamaz")
    .max(100, "yaş 100'den büyük olamaz")
    .integer("yaş tam sayı olmalı")
    .required("yaş alanı zorunludur"),

  // şifre alanının geçerli olması için gerekli koşulları
  password: yup
    .string()
    .min(5, "şifre en az 5 karakter olmalıdır")
    // matches() girilen metin regex ifadesindeki kurallara uyuyor mu kontrol eder
    .matches(regex, "şifre yeterince güçlü değil")
    .required("şifre alanı szorunludur"),

  // şifre onay alanının geçerli olması için gerekli koşulları
  // oneOf(): kontrol ettiğimiz metin verilen dizi içerisndeki değerlerden biriyle eşleşiyor mu kontrol eder
  // ref(): farklı bir inputtaki veriyi çağırmaya yarar
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "doğrulama şifresi asıl şifreyle eşleşmiyor")
    .required("lütfen şifrenizi doğrulayın"),
});

export default schema;
