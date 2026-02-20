import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      name: "John Smith",
      role: "Marketing Director at XYZ Corp",
    },
    {
      text: "Positivus helped us transform our online presence. Our engagement and conversions have improved drastically. Their strategy and execution are top-notch.",
      name: "Sarah Johnson",
      role: "CEO at BrightTech",
    },
    {
      text: "The team at Positivus understands digital marketing deeply. They delivered measurable growth in just a few months. Highly recommended!",
      name: "Michael Lee",
      role: "Founder at MarketPro",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent(
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextTestimonial = () => {
    setCurrent(
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          <h2 className="text-3xl font-semibold">
            <span className="bg-lime-400 px-4 py-1 rounded-md">
              Testimonials
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl text-lg">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn
            More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-black rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Testimonial Text */}
            <div className="min-h-[150px] flex items-center justify-center">
              <p className="text-xl text-white mb-8 leading-relaxed">
                "{testimonials[current].text}"
              </p>
            </div>

            {/* Name */}
            <div>
              <p className="font-bold text-white text-lg">
                {testimonials[current].name}
              </p>
              <p className="text-white/60 text-sm">
                {testimonials[current].role}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">

              {/* Prev Button */}
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      current === index
                        ? "bg-lime-400"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-white/10 transition"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;