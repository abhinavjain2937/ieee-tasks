import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Activities from "./components/Activities";
import Events from "./components/Events";
import WhyJoin from "./components/WhyJoin";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Activities />
        <Events />
        <WhyJoin />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
