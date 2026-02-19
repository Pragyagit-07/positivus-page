const caseStudies = [
  {
    title: "Boosting Online Sales for E-commerce Brand",
    desc: "We increased online sales by 70% through targeted SEO and paid ad strategies.",
  },
  {
    title: "Scaling a SaaS Startup",
    desc: "Generated 3x more qualified leads using data-driven marketing campaigns.",
  },
];

const CaseStudies = () => {
  return (
    <section  id="case" className="bg-light py-20 text-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Case Studies
          </h2>
          <p className="mt-6 text-muted">
            Real examples of how we helped businesses grow and succeed.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {caseStudies.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 sm:p-8 rounded-3xl border border-transparent shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-primary transition-all duration-300 overflow-hidden group"
              >
              {/* left animated*/}
               <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-muted">
                {item.desc}
              </p>

              <a
                href="#contact"
              
          className="mt-6 inline-block text-primary font-medium group-hover:text-accent transition"

              >
                Learn more →
              </a>
            </div>
            
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
