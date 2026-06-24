import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Benefits from "./components/Benefits.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
