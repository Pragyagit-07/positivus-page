const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    message:
      "Positivious helped us increase our online conversions by 65% in just three months. Their strategy and execution were outstanding.",
  },
  {
    name: "Michael Lee",
    role: "Startup Founder",
    message:
      "The team truly understands digital growth. Transparent reporting and constant communication made all the difference.",
  },
  {
    name: "Emily Carter",
    role: "E-commerce Manager",
    message:
      "Professional, data-driven, and highly responsive. We saw measurable improvements across all campaigns.",
  },
];

const Testimonials = () => {
  return (
    <section id="test" className="bg-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-muted">
            Real feedback from businesses that have grown with our strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            
            
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300"
            >
              <p className="text-muted leading-relaxed">
                “{item.message}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-dark">{item.name}</h4>
                <p className="text-sm text-muted">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
