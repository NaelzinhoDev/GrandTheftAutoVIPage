import { FaBell, FaGamepad, FaStar } from "react-icons/fa";

function Benefits() {
  const cards = [
    {
      icon: <FaBell />,
      title: "Notificações",
    },
    {
      icon: <FaGamepad />,
      title: "Pré-venda",
    },
    {
      icon: <FaStar />,
      title: "Conteúdo Exclusivo",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold mb-12">Benefícios</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
            bg-zinc-900
            p-8
            rounded-2xl
            hover:-translate-y-2
            transition
            "
          >
            <div className="text-3xl mb-4">{card.icon}</div>

            <h3 className="text-xl font-bold">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
