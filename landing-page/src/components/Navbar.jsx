import logo from "../assets/black-positivus-logo.jpg";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <span>Positivus</span>
        </a>

        {/* Menu */}
        <div className="flex justify-between items-center">
          <div className="hidden md:flex items-center gap-8 mr-3">
            <a href="#" className="text-sm hover:text-black p-1 transition-colors">About us</a>
            <a href="#" className="text-sm hover:text-black p-1 transition-colors">Services</a>
            <a href="#" className="text-sm hover:text-black p-1 transition-colors">Use Cases</a>
            <a href="#" className="text-sm hover:text-black p-1 transition-colors">Pricing</a>
            <a href="#" className="text-sm hover:text-black p-1 transition-colors">Blog</a>
          </div>

          <button className="h-9 rounded-xl border-2 border-zinc-700 px-6 py-2 text-sm bg-white hover:bg-gray-50 transition">
            Request a quote
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;