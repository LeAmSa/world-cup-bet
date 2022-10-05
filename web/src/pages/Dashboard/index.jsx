import MatchCard from "~/components/MatchCard";
import Icon from "~/components/Icon";
import DateSelect from "../../components/DateSelect";

function Dashboard() {
  return (
    <>
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-3xl flex justify-between">
          <img className="w-28 md:w-40" src="/logo-bg-red.svg" />
          <a href="/profile">
            <Icon name="profile" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Olá Leandro!</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4">
          <DateSelect />

          <div className="space-y-4">
            <MatchCard
              home={{ slug: "sui" }}
              away={{ slug: "cam" }}
              match={{ time: "7:00" }}
            />
            <MatchCard
              home={{ slug: "por" }}
              away={{ slug: "gan" }}
              match={{ time: "7:00" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
