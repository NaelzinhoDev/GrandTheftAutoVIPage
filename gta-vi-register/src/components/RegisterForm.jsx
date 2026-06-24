import { useState } from "react";

function RegisterForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  function cadastrar(e) {
    e.preventDefault();

    alert(`Cadastro realizado para ${nome}`);
  }

  return (
    <section className="py-20">
      <div className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8">Entre na Lista VIP</h2>

        <form onSubmit={cadastrar} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="p-4 rounded bg-zinc-800"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 rounded bg-zinc-800"
          />

          <button
            className="
            bg-pink-500
            p-4
            rounded
            font-bold
            hover:bg-pink-600
            hover:scale-105
            transition-all
            duration-300
            
            
            "
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;
