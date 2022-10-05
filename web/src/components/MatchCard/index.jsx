function MatchCard({ home, away, match }) {
  return (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-700 font-bold">
        {match.time}
      </span>

      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{home.slug}</span>
        <img src={`/flags/${home.slug}.png`} />
        <input
          className="bg-red-300/[.2] w-14 h-14 text-red-700 text-xl text-center"
          type="number"
        />

        <span className="text-red-500 font-bold">X</span>

        <input
          className="bg-red-300/[.2] w-14 h-14 text-red-700 text-xl text-center"
          type="number"
        />
        <img src={`/flags/${away.slug}.png`} />
        <span className="uppercase">{away.slug}</span>
      </div>
    </div>
  );
}

export default MatchCard;
