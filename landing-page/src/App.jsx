import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import LetsMakeThings from "./components/LetsMakeThings";
import CaseStudies from "./components/CaseStudies";
import WorkingProcess from "./components/WorkingProcess";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <LetsMakeThings />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
