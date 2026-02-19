import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    desc: "We start by understanding your needs and goals, providing tailored advice and a clear roadmap for your project."
  },
  {
    id: 2,
    title: "Research & Strategy Development",
    desc: "We analyze your industry, competitors, and audience to develop a data-driven strategy for success."
  },
  {
    id: 3,
    title: "Design & Implementation",
    desc: "Our team designs and implements solutions, ensuring usability, functionality, and alignment with your objectives."
  },
  {
    id: 4,
    title: "Testing & Launch",
    desc: "We rigorously test our solutions, refine based on feedback, and launch a polished final product."
  },
];

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => setOpenStep(openStep === id ? null : id);

  return (
    <section id="working-process" className="bg-light py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark">
            Our Working Process
          </h2>
          <p className="mt-4 text-muted text-sm sm:text-base max-w-xl mx-auto">
            Step by step approach to ensure quality and success in every project.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step) => {
            const isOpen = openStep === step.id;
            return (
              <div
                key={step.id}
                className={`border-t-2 rounded-tr-2xl overflow-hidden transition-all duration-300 cursor-pointer
                  ${isOpen ? "border-primary" : "border-black/20"}
                `}
                onClick={() => toggleStep(step.id)}
              >
                {/* Header */}
                <div className={`flex justify-between items-center p-4 sm:p-6 md:p-8
                  ${isOpen ? "bg-primary/10" : "bg-white"} transition-colors duration-300`}
                >
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl text-dark">
                    {step.id.toString().padStart(2, "0")} {step.title}
                  </h3>
                  {isOpen ? <Minus size={20} className="text-dark" /> : <Plus size={20} className="text-dark" />}
                </div>

                {/* Divider */}
                {isOpen && <div className="h-[2px] w-full bg-primary transition-all duration-300"></div>}

                {/* Description */}
                <div
                  className={`overflow-hidden transition-all duration-500
                    ${isOpen ? "max-h-96 p-4 sm:p-6 md:p-8 bg-primary/20" : "max-h-0"}
                  `}
                >
                  <p className="text-sm sm:text-base md:text-lg text-dark">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
