function Navbar() {
  return (
    <nav
      className="
  fixed
  top-0
  w-full
  z-50
  bg-black/30
  backdrop-blur-md
  border-b
  border-white/10
  "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
        <h1 className="text-3xl font-black">GTA VI</h1>

        <button
          className="
          bg-pink-500
          px-5
          py-2
          rounded-lg
          hover:bg-pink-600
          transition
          "
        >
          Cadastre-se
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
