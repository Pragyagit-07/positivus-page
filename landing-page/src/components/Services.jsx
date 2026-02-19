import {
  Search,
  Megaphone,
  BarChart3,
  Mail,
  FileText,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "Search Engine Optimization",
    desc: "Improve your visibility and rank higher on search engines.",
    icon: <Search size={28} />,
  },
  {
    title: "Pay-Per-Click Advertising",
    desc: "Drive targeted traffic with optimized paid campaigns.",
    icon: <Megaphone size={28} />,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage audiences and grow your brand presence.",
    icon: <TrendingUp size={28} />,
  },
  {
    title: "Content Creation",
    desc: "Craft compelling content that converts visitors.",
    icon: <FileText size={28} />,
  },
  {
    title: "Email Marketing",
    desc: "Nurture leads and increase customer retention.",
    icon: <Mail size={28} />,
  },
  {
    title: "Analytics & Reporting",
    desc: "Track performance with real-time insights.",
    icon: <BarChart3 size={28} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Our Services
          </h2>
          <p className="mt-4 text-muted text-sm sm:text-base max-w-xl mx-auto">
            We provide digital solutions designed to help your business grow and succeed.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 sm:p-8 rounded-3xl border border-transparent shadow-md hover:shadow-2xl hover:-translate-y-3 hover:border-primary transition-all duration-300 overflow-hidden group"
            >
              {/* Left Animated Strip */}
              <div className="absolute left-0 top-0 h-full w-1 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-dark">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-muted">
                {service.desc}
              </p>

              {/* Link */}
              <a
                href="#test"
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

export default Services;
