import Icon from "../../components/Icon";

function Dashboard() {
  return (
    <div className="">
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl flex justify-between">
          <img className="w-28 md:w-40" src="/logo-bg-red.svg" />
          <a href="/profile">
            <Icon name="profile" />
          </a>
        </div>
      </header>

      <main>
        <section id="header" className="bg-red-500 text-white p-4">
          <div className="container max-w-3xl space-y-2">
            <span>Olá Leandro!</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content"></section>
      </main>
    </div>
  );
}

export default Dashboard;
