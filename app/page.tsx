"use client";

import About from "./_components/abaut-barber";

import Header from "./_components/header";
import ScrollToTopButton from "./_components/scrollToTopButton";

import Services from "./_components/services";
import { Footer } from "./_components/ui/footer";
import { Hero } from "./_components/ui/hero";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="px-4">
          <Hero />
        </div>
        <div id="about" className="pt-8 px-4">
          <About />
        </div>
        <div id="services" className="pt-8 px-4">
          <Services />
        </div>
      </main>
      <div className="pt-8 px-4 pb-4">
        <Footer />
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Home;
