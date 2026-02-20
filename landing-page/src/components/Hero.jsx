import hero from "../assets/Hero-section.png";
import amazon from "../assets/amazon-logo.png";
import dribble from "../assets/dribble.png";
import notion from "../assets/Notion";
import hubspot from "../assets/Hubspot-logo.png";
import netflix from "../assets/Netflix.png";
import zoom from "../assets/zoom.png";

const Hero = () => {
  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">
            Navigating the digital landscape for success
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <button
           className="inline-flex items-center justify-center gap-2 whitespace-nowrap 
             text-sm font-medium transition-all 
            h-12 rounded-lg px-6
            bg-black text-white hover:opacity-90 
            disabled:pointer-events-none disabled:opacity-50 
             outline-none"
      >
         Book a consultation
         </button>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full flex items-center justify-center">
          <img
            src={hero}
            alt="hero"
            className="w-full max-w-lg"
          />
        </div>

      </div>

      {/* Brand Logos */}
      <div className="mt-20 pt-12 border-t border-gray-200">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-center">
          <img src={amazon} alt="amazon" />
          <img src={dribble} alt="dribble" />
          <img src={notion} alt="notion" />
          <img src={hubspot} alt="hubspot" />
          <img src={netflix} alt="netflix" />
          <img src={amazon} alt="amazon2" />
          <img src={zoom} alt="zoom" />
        </div>
      </div>

    </section>
  );
};

export default Hero;