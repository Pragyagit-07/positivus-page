import { useState } from "react";

const WorkingProcess = () => {
  const [open, setOpen] = useState(1);

  const toggle = (num) => {
    setOpen(open === num ? null : num);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-6xl">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          <h2 className="text-3xl font-semibold">
            <span className="bg-lime-400 px-4 py-1 rounded-md">
              Our Working Process
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl text-lg">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="space-y-6">

          {/* ITEM 1 */}
          <div
            className={`rounded-[32px] border border-black shadow-[0_8px_0_0_#000] overflow-hidden transition-all duration-300 ${
              open === 1 ? "bg-lime-300" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(1)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-6 flex-1">
                <span className="text-3xl font-bold">01</span>
                <span className="text-2xl font-bold">Consultation</span>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-2xl font-bold">
                {open === 1 ? "−" : "+"}
              </div>
            </button>

            {open === 1 && (
              <div className="px-6 pb-6 pt-2 border-t border-black">
                <p className="leading-relaxed text-gray-800">
                  During the initial consultation, we will discuss your
                  business goals and objectives, target audience, and current
                  marketing efforts. This allows us to understand your needs
                  and tailor our services to best fit your requirements.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 2 */}
          <div
            className={`rounded-[32px] border border-black shadow-[0_8px_0_0_#000] overflow-hidden transition-all duration-300 ${
              open === 2 ? "bg-lime-300" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(2)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-6 flex-1">
                <span className="text-3xl font-bold">02</span>
                <span className="text-2xl font-bold">
                  Research and Strategy Development
                </span>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-2xl font-bold">
                {open === 2 ? "−" : "+"}
              </div>
            </button>

            {open === 2 && (
              <div className="px-6 pb-6 pt-2 border-t border-black">
                <p className="leading-relaxed text-gray-800">
                  We conduct in-depth research about your industry,
                  competitors, and target audience. Based on insights, we
                  create a customized digital marketing strategy aligned with
                  your business objectives.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 3 */}
          <div
            className={`rounded-[32px] border border-black shadow-[0_8px_0_0_#000] overflow-hidden transition-all duration-300 ${
              open === 3 ? "bg-lime-300" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(3)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-6 flex-1">
                <span className="text-3xl font-bold">03</span>
                <span className="text-2xl font-bold">Implementation</span>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-2xl font-bold">
                {open === 3 ? "−" : "+"}
              </div>
            </button>

            {open === 3 && (
              <div className="px-6 pb-6 pt-2 border-t border-black">
                <p className="leading-relaxed text-gray-800">
                  Our team executes the strategy using SEO, PPC, social media,
                  and content marketing techniques. We ensure all campaigns are
                  properly launched and optimized from day one.
                </p>
              </div>
            )}
          </div>

          {/* ITEM 4 */}
          <div
            className={`rounded-[32px] border border-black shadow-[0_8px_0_0_#000] overflow-hidden transition-all duration-300 ${
              open === 4 ? "bg-lime-300" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(4)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-6 flex-1">
                <span className="text-3xl font-bold">04</span>
                <span className="text-2xl font-bold">
                  Monitoring and Optimization
                </span>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center text-2xl font-bold">
                {open === 4 ? "−" : "+"}
              </div>
            </button>

            {open === 4 && (
              <div className="px-6 pb-6 pt-2 border-t border-black">
                <p className="leading-relaxed text-gray-800">
                  We continuously track performance metrics and analyze data.
                  Based on insights, we optimize campaigns to maximize ROI and
                  ensure long-term business growth.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;