import { useState } from "react";
import contactImg from "../assets/contactImg.png";

const Contact = () => {
  const [selected, setSelected] = useState("hi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
        <h2 className="text-3xl font-semibold">
          <span className="bg-lime-400 px-4 py-1 rounded-md">
            Contact Us
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl text-lg">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-6xl mx-auto bg-[#f3f3f3] rounded-[40px] p-12 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* Toggle */}
            <div className="flex items-center gap-10 mb-10">
              <button
                onClick={() => setSelected("hi")}
                className="flex items-center gap-3"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === "hi" ? "border-lime-400" : "border-gray-400"}`}>
                  {selected === "hi" && (
                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">Say Hi</span>
              </button>

              <button
                onClick={() => setSelected("quote")}
                className="flex items-center gap-3"
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected === "quote" ? "border-lime-400" : "border-gray-400"}`}>
                  {selected === "quote" && (
                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  )}
                </div>
                <span className="text-lg">Get a Quote</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">

              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black px-6 py-4 bg-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-medium text-lg hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hidden lg:block relative">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="absolute right-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;