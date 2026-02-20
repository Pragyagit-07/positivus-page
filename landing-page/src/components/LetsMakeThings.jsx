import smileImg from "../assets/Card7.png"; 

const LetsMakeThings = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#f7f7f5] border border-gray-200 rounded-[32px] p-8 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">

        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Let's make things happen
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Contact us today to learn more about how our digital marketing services
            can help your business grow and succeed online.
          </p>

          <a
            href="#"
            className="inline-block bg-black text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition"
          >
            Get your free proposal
          </a>
        </div>

        <div className="hidden lg:flex justify-end">
          <img
            src={smileImg}
            className="w-72 h-72 object-contain"
            alt="Marketing illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default LetsMakeThings;