import gtabg from "../assets/gtabg.webp";

function Hero() {
  return (
    <section
      className="
  min-h-screen
  bg-linear-to-br
  from-black
  via-purple-950
  to-pink-950
  text-white
  "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center min-h-screen gap-12">
          {/* Texto */}
          <div>
            <p className="text-pink-500 font-bold uppercase">GTA VI</p>

            <h1 className="text-5xl md:text-7xl font-black mt-4">
              O jogo mais aguardado da década
            </h1>

            <p className="text-zinc-400 text-lg mt-6 max-w-lg">
              Receba novidades da pré-venda, conteúdos exclusivos e seja um dos
              primeiros a saber quando o jogo estiver disponível.
            </p>

            <button
              className="
              mt-8
              bg-pink-500
              px-8
              py-4
              rounded-xl
              font-bold
              transition-all
              duration-300
              hover:scale-105
              hover:bg-pink-600
              "
            >
              Entrar na Lista VIP
            </button>
          </div>

          {/* Imagem */}
          <div
            className="
  rounded-3xl
  overflow-hidden

  border-2
  border-transparent

  hover:border-pink-500

  transition-all
  duration-300
  "
          >
            <img
              src={gtabg}
              alt="GTA VI"
              className="
              w-full
              rounded-3xl
              shadow-2xl
              hover:scale-105
              transition-all
              duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
