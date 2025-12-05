import React, { useState } from "react";
import Night from "../Images/Night.jpg";
import Oasis from "../Images/Oasis.png";
import Room from "../Images/Room.png";
import Seductress from "../Images/Seductress.png";
import Woods from "../Images/Woods.png";
import Taster from "../Images/Taster.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import top from "../Images/top.png";

const Sells = () => {
  const [data] = useState([
    { Name: "Wood Of Kings", h2: "Impression of Oud Wood", img: Woods, price: "Rs 2,599", rating: 4.8, path: "/WoodOfKings" },
    { Name: "Velvet Nights", h2: "Impression of Baccarat Rouge", img: Night, price: "Rs 2,399", rating: 4.9, path: "/VelvetNight" },
    { Name: "Board Room", h2: "Impression of Office For Men", img: Room, price: "Rs 2,299", rating: 4.6, path: "/BoardRoom" },
    { Name: "Floral Oasis", h2: "Impression of Gucci Flora", img: Oasis, price: "Rs 2,050", rating: 4.5, path: "/FloralOasis" },
    { Name: "Seductress", h2: "Impression of Bombshell", img: Seductress, price: "Rs 1,900", rating: 4.7, path: "/Seductress" },
    { Name: "Tester Box", h2: "5ml five separate fragrances", img: Taster, price: "Rs 1,500", rating: 4.5, path:"/taster" },
  ]);

  return (
    <section className="bg-black text-white min-h-screen pb-16">
      <Navbar />

      {/* Banner Section */}
      <div className="relative w-full overflow-hidden">
        <img
          src={top}
          alt="Zahoor Fragrances Banner"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <h1 className="absolute top-[60%] left-[6%] lg:top-[50%] md:top-[50%] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-[Zyntro] text-yellow-300 leading-tight drop-shadow-lg">
          Zahoor Fragrance
        </h1>
      </div>

      {/* Collection Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <h1 className="lg:text-7xl mt-30 mb-20 text-5xl font-bold font-[Zyntro] text-yellow-300 text-center">
          Our Signature Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-slate-300/20 text-white border border-yellow-400 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full max-w-88 flex flex-col"
            >
              {/* Product Image */}
              <Link to={item.path || "#"} className="relative w-full aspect-4/3 overflow-hidden rounded-t-xl">
                <img
                  src={item.img}
                  alt={item.Name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Product Details */}
              <div className="p-3 flex flex-col grow">
                <h2 className="text-lg font-semibold text-center mb-1 text-yellow-300">
                  {item.Name}
                </h2>
                <p className="text-sm text-center mb-2">{item.h2}</p>

                {/* Rating */}
                <div className="flex items-center justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${i < Math.round(item.rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                        }`}
                    />
                  ))}
                  <span className="text-xs ml-2">{item.rating}</span>
                </div>

                {/* Price */}
                <p className="text-base font-bold text-yellow-300 text-center mb-3">
                  {item.price}
                </p>

                {/* Button */}
                <Link to={item.path || "#"} className="mt-auto flex justify-center">
                  <button className="hover:scale-105 active:scale-100 relative h-10 w-48 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-base font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0">
                    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                      View Details
                    </span>
                    <FaArrowRightLong className="absolute text-black text-2xl opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sells;
