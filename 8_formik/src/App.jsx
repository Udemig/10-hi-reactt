import { useFormik } from "formik";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import schema from "./schema";
import InputField from "./components/InputField";
import { inputs } from "./constants";

const App = () => {
  // Form gönderilidğinde FormData yöntemi ile verilere ulaşabiliyorduk. Ama hata yönetini yapmıyordul. Hata yönetimi yapmak istersek kodları biizm yazıdğımız seneryoda çok fazla kod tekrarı olucağı için formik & yup kütüphaneleri kullanrak form oluşturucaz

  // useFormik formik'İn bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // state'i tutulucak olan verilerin ilk değeris
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // formiğe yup ile oluştuduğum validasyon şemasını tanıttık
    validationSchema: schema,

    onSubmit: (values) => {
      alert("form gönderildi" + JSON.stringify(values));
    },
  });

  return (
    <div className="vh-100 vw-100">
      <div className="container py-5">
        <h2 className="text-center">Coninmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}

          <button className="my-5">Gönder</button>
        </form>
      </div>
    </div>
  );
};

export default App;
