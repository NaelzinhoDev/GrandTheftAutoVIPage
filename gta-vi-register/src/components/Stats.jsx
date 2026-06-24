function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div
          className="
 bg-white/5
 border
 border-white/10
 rounded-2xl
 p-6
 "
        >
          <h2 className="text-5xl font-bold">100M+</h2>
          <p>Jogadores aguardando</p>
        </div>

        <div
          className="
 bg-white/5
 border
 border-white/10
 rounded-2xl
 p-6
 "
        >
          <h2 className="text-5xl font-bold">2026</h2>
          <p>Lançamento previsto</p>
        </div>

        <div
          className="
 bg-white/5
 border
 border-white/10
 rounded-2xl
 p-6
 "
        >
          <h2 className="text-5xl font-bold">PS5</h2>
          <p>Xbox Series X/S</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
