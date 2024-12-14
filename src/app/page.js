import About from "./component/About";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Service from "./component/Service";

export default function Home() {
  return (
    <div className="font-fglyphic">
      <Hero />
      <Service />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
}
