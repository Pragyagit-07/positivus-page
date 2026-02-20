import logo from "../assets/Positivus-logo.png";

const Footer = () => {
  return (
    <section className="px-4 pt-16">
      <div className="max-w-7xl mx-auto bg-zinc-900 text-white rounded-t-[14px] p-8 sm:p-12">

        {/* Top Row */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between mb-12">

          {/* Logo */}
          <div className="flex items-center gap-3 text-xl font-semibold">
            <img src={logo} className="h-6" alt="logo" />
            Positivus
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 text-sm justify-center lg:justify-start">
            <a href="#" className="underline">About us</a>
            <a href="#" className="underline">Services</a>
            <a href="#" className="underline">Use Cases</a>
            <a href="#" className="underline">Pricing</a>
            <a href="#" className="underline">Blog</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center lg:justify-end">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-medium">
              in
            </div>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-medium">
              f
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-12 lg:flex-row mb-12">

          {/* Contact Info */}
          <div className="lg:flex-[1]">
            <span className="bg-lime-400 text-black px-2 py-1 rounded-sm text-sm font-medium">
              Contact us:
            </span>

            <div className="mt-4 text-gray-300 space-y-2 text-sm">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:flex-[2] bg-zinc-700 rounded-2xl p-9 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-500 rounded-xl px-4 py-3 text-white outline-none w-full"
            />
            <button className="bg-lime-400 text-black px-6 py-3 rounded-xl font-medium whitespace-nowrap">
              Subscribe to news
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <hr className="border-gray-600 mb-6" />

        <div className="flex flex-col gap-4 text-sm text-gray-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="underline">Privacy Policy</a>
        </div>

      </div>
    </section>
  );
};

export default Footer;