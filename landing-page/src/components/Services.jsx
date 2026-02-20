import service1 from "../assets/search-service.png";
import service2 from "../assets/Card2.png";
import service3 from "../assets/Card3.png";
import service4 from "../assets/Card4.png";
import service5 from "../assets/Card5.png";
import service6 from "../assets/Card6.png";

const Services = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
            Services
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 auto-rows-fr">
        <img src={service1} />
        <img src={service2} />
        <img src={service3} />
        <img src={service4} />
        <img src={service5} />
        <img src={service6} />
      </div>

    </section>
  );
};

export default Services;
