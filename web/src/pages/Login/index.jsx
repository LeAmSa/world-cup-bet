import Icon from "../../components/Icon";
import Input from "../../components/Input";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLocalStorage } from "react-use";
import { Navigate } from "react-router-dom";

//Validando os dados
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("Preencha seu email"),
  password: yup.string().required("Preencha sua senha"),
});

function Login() {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const formik = useFormik({
    onSubmit: async (values) => {
      const res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_API_URL,
        url: "/login",
        auth: {
          username: values.email,
          password: values.password,
        },
      });

      console.log(res.data);

      //armazenando o token no localstorage do navegador
      setAuth(res.data);
    },
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
  });

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-5xl flex justify-center ">
          <img className="w-32 md:w-40" src="/logo-bg-white.svg" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex items-center space-x-4">
          <a href="/">
            <Icon name="back" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form className=" p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            name="email"
            type="text"
            placeholder="Digite seu email"
            label="Seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            label="Sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
          />

          <button
            type="submit"
            className="block w-full text-white bg-red-500 text-lg md:text-xl px-6 py-3 rounded-xl text-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            {formik.isSubmitting ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;

//Colocar um componente de loading no Lugar de Carregando...
