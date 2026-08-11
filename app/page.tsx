import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Echo from "@/components/sections/Echo";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Technology />
      <About />
      <Team />
      <Echo />
      <FAQ />
      <Contact />
    </>
  );
}
