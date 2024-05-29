import About from "./_components/abaut-baber";

import Header from "./_components/header";

import Services from "./_components/services";
import { Footer } from "./_components/ui/footer";
import { Hero } from "./_components/ui/hero";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="pt-8 px-4">
          <Hero />
        </div>
        <div id="services" className="pt-8 px-4">
          <Services />
        </div>
        <div id="about" className="pt-8 px-4">
          <About />
        </div>
      </main>
      <div className="pt-8 px-4">
        <Footer />
      </div>
    </>
  );
};

export default Home;
