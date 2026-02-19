import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-light py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

        <h1 className="text-4xl md:text-5xl font-bold text-dark">
          Positivious
        </h1>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-muted font-medium text-lg">
          <a href="#contact" className="hover:text-primary">Contact Us</a>
          <a href="#case" className="hover:text-primary">Case Studies</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#test" className="hover:text-primary">Testimoinal</a>

        
        </div>

        {/* Desktop Button */}
        
        <a
        href="#contact"
        className="hidden md:block bg-primary text-white px-6 py-2 
                  rounded-2xl shadow hover:bg-accent transition"
        >
        Request Quote
      </a>


        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <a href="#contact" className="block text-muted">Contact Us</a>
          <a href="#case" className="block text-muted">Case Studies</a>
          <a href="#services" className="block text-muted">Services</a>
          <a href="#test" className="block text-muted">Testimonial</a>

          
          
         <a
         href="#contact"
         className="block bg-primary text-white py-2 rounded-xl text-center"
          >
         Request Quote
         </a>
         </div>
      )}
    </nav>
  );
};

export default Navbar;
