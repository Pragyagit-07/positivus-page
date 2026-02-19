import pic from "../assets/announcement.png";
const Hero = () => {
  return (

<section className="bg-light py-16 sm:py-28">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

    {/* Text */}
    <div className="flex-1">
      <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight">
        Navigating the digital landscape for success
      </h1>
      <p className="mt-6 text-lg text-muted leading-relaxed">
        We help brands grow with powerful digital marketing strategies.
      </p>
      <a
        href="#contact"
        className="mt-8 inline-block bg-primary text-white px-8 py-4 rounded-2xl shadow-xl hover:bg-accent hover:scale-105 transition duration-300"
      >
        Book a Consultation
      </a>
    </div>

    {/* Image */}
    <div className="flex-1 flex justify-center">
      <img
        src={pic}
        alt="Digital pic"
        className="w-full max-w-md md:max-w-lg h-auto object-contain"
      />
    </div>

  </div>
</section>

  );
};
export default Hero;

   