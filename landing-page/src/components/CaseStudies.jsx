const CaseStudies = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
            Case Studies
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>

      <div className="bg-black text-white rounded-[40px] p-12">
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>

          <div className="border-t border-gray-700 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <a href="#" className="text-lime-400 font-medium">
              Learn more ↗
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CaseStudies;