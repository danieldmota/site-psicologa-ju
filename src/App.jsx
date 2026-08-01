import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Services from "./sections/Services";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal">
        <Hero />
        <About />
        <Manifesto />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
