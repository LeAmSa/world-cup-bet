import Icon from "~/components/Icon";
import Input from "~/components/Input";

function SignUp() {
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
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className=" p-4 space-y-6" action="">
          <Input
            name="name"
            type="text"
            placeholder="Digite seu nome"
            label="Seu nome"
          />

          <Input
            name="username"
            type="text"
            placeholder="Digite um nome de usuário"
            label="Seu nome de usuário"
          />
          <Input
            name="email"
            type="text"
            placeholder="Digite seu email"
            label="Seu e-mail"
          />

          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            label="Sua senha"
          />

          <a
            href="/dashboard"
            className="block w-full text-white bg-red-500 text-lg md:text-xl px-6 py-3 rounded-xl text-center"
          >
            Criar minha conta
          </a>
        </form>
      </main>
    </div>
  );
}

export default SignUp;
