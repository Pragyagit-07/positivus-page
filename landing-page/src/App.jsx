import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-light text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <CaseStudies />
      <WorkingProcess />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
