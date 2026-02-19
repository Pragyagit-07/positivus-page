import amazon from "../assets/amazon.png";
import dribbble from "../assets/dribbble.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.png";
import zoom from "../assets/zoom.png";

const brands = [
  amazon,
  dribbble,
  hubspot,
  notion,
  netflix,
  zoom,
];

const Brands = () => {
  return (
    <section className="bg-white py-16  relative">
      <div className="max-w-7xl mx-auto px-6">
      <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="flex gap-20 animate-marquee w-max items-center">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={brand}
                  alt="brand"
                  className="h-8 sm:h-10 object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Animation inside file */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Brands;
