import contactImg from "../assets/contact.png"; 

const Contact = () => {
  return (
   <section id="contact" className="bg-light py-12 sm:py-24 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <div className="flex flex-col lg:flex-row lg:gap-12 items-start">

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src={contactImg}
          alt="Contact"
          className="w-full max-w-md md:max-w-lg h-auto object-contain"
        />
      </div>

      {/* Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-dark">Book a Consultation</h2>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); }}
          className="mt-6 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl hover:bg-accent transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  </div>
</section>




  
  );
};
export default Contact; 


  