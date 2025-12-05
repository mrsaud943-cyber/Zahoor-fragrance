import {
    FaArrowAltCircleRight,
    FaStar,
    FaFacebookF,
    FaInstagram,
    FaCogs,
    FaShippingFast,
    FaLeaf,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import Navbar from "../Components/Navbar";
import night from "../Images/Night.jpg";
import woods from "../Images/Woods.png";
import room from "../Images/Room.png";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiDelicatePerfume } from "react-icons/gi";

const Home = () => {
    const scrollRef = useRef(null);
    const cardsRef = useRef([]);

    const data = [
        { Name: "Wood Of Kings", h2: "Impression of Oud Wood", img: woods, price: "Rs 2,599", rating: 4.8, path: "/sells" },
        { Name: "Velvet Nights", h2: "Impression of Baccarat Rouge", img: night, price: "Rs 2,399", rating: 4.9, path: "/sells", },
        { Name: "Board Room", h2: "Impression of Office For Men", img: room, price: "Rs 2,299", rating: 4.6, path: "/sells" },
    ];

    const services = [
        {
            title: "Custom Fragrance Design",
            desc: "Create a scent as unique as your personality. Our experts craft bespoke perfumes that reflect your aura and lifestyle.",
            icon: <FaCogs className="text-4xl text-yellow-400" />,
        },
        {
            title: "All Pakistan Delivery",
            desc: "From our atelier to your doorstep. Experience Pakistan wide delivery with care, speed, and security.",
            icon: <FaShippingFast className="text-4xl text-yellow-400" />,
        },
        {
            title: "Sustainable Craftsmanship",
            desc: "Our perfumes are crafted responsibly with cruelty-free and eco-friendly practices — because elegance deserves ethics.",
            icon: <FaLeaf className="text-4xl text-yellow-400" />,
        },
    ];

    //  INTERSECTION OBSERVER ANIMATION
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-black text-white relative min-h-screen overflow-x-hidden">

            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <Navbar />
            </div>

            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24">
                <div className="absolute flex items-center justify-center">
                    <video
                       src="../../../public/video/home.mp4" 
                        autoPlay
                        loop
                        muted
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-black via-black/30 to-black"></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
                    <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left gap-8">
                        <h1 className="text-5xl md:text-5xl lg:text-7xl font-[Zyntro] font-bold leading-tight tracking-tight">
                            Where <span className="text-yellow-300">Elegance</span> Meets{" "}
                            <span className="text-yellow-300">Essence</span>
                        </h1>

                        <p className="text-gray-300 max-w-full mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
                            Discover timeless fragrances crafted to capture your individuality.
                            Each note designed to linger, long after you’ve left the room.
                        </p>

                        <Link to="/sells">
                            <button className="relative mx-auto md:mx-0 hover:scale-105 active:scale-100 h-11 w-52 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm transition-all duration-300 hover:text-yellow-400 group">
                                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Explore More...</span>
                                <FaArrowAltCircleRight className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-black text-white font-[Berita] flex flex-col md:flex-row items-center justify-between lg:px-20 sm:px-10 py-16 relative overflow-hidden text-center md:text-left">
                <div className="max-w-md mb-10 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Elevate Your Senses with <br /> Zahoor Fragrance
                    </h1>
                </div>

                <div className="max-w-sm text-gray-400">
                    <p className="text-sm mb-6">Welcome to the epitome of olfactory luxury — the Zahoor Fragrance Signature Collection.</p>
                    <Link to="/sells">
                        <button className="hover:scale-105 active:scale-100 relative h-11 w-52 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0">
                            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Explore More...</span>
                            <FaArrowAltCircleRight className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                        </button>
                    </Link>
                </div>

                <div className="absolute top-0 left-0 w-full h-px bg-gray-800"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
            </section>

            <div className="flex items-center justify-center w-full bg-black py-14">
                <div ref={scrollRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="bg-slate-300/20 text-white border border-yellow-400 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full max-w-88 flex flex-col opacity-0 translate-y-6"
                        >
                            <div className="relative w-full aspect-4/3 overflow-hidden rounded-t-xl">
                                <img
                                    src={item.img}
                                    alt={item.Name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-3 flex flex-col grow">
                                <h2 className="text-lg font-semibold text-center mb-1 text-yellow-300">{item.Name}</h2>
                                <p className="text-sm text-center mb-2">{item.h2}</p>

                                <div className="flex items-center justify-center mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-sm ${i < Math.round(item.rating) ? "text-yellow-400" : "text-gray-400"}`}
                                        />
                                    ))}
                                    <span className="text-xs ml-2">{item.rating}</span>
                                </div>

                                <p className="text-base font-bold text-yellow-300 text-center mb-3">{item.price}</p>

                                <Link to={item.path || "#"} className="mt-auto flex justify-center">
                                    <button className="hover:scale-105 active:scale-100 relative h-10 w-48 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-base font-bold shadow-sm transition-all duration-300 hover:text-yellow-400 group">
                                        <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">View Collection</span>
                                        <GiDelicatePerfume className="absolute text-black text-2xl opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="bg-black text-white lg:px-20 font-[Berita] flex flex-col md:flex-row items-center justify-between sm:px-10 py-16 relative overflow-hidden text-center md:text-left mb-5 mt-5">
                <div className="max-w-md mb-10 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Get Your Fragrance <br /> Faster Than Other <br /> With Our Services
                    </h1>
                </div>

                <div className="max-w-sm text-gray-400">
                    <p className="text-sm mb-6">You are excited to Learn more about — the Zahoor Fragrance Premium Service.</p>
                    <Link to="/services">
                        <button className="hover:scale-105 active:scale-100 relative h-11 w-52 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0">
                            <span className="transition-all font-sans duration-300 group-hover:opacity-0 group-hover:translate-y-2">Learn More...</span>
                            <FaArrowAltCircleRight className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                        </button>
                    </Link>
                </div>

                <div className="absolute top-0 left-0 w-full h-px bg-gray-800"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
            </section>

            {/* SERVICES */}
            <div className="w-full pb-16 px-6 sm:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index + data.length] = el)}
                            className="opacity-0 translate-y-6 bg-slate-300/10 backdrop-blur-md border border-yellow-400 rounded-2xl shadow-[0_0_15px_rgba(255,255,0,0.15)] p-8 text-center hover:shadow-[0_0_25px_rgba(255,255,0,0.3)] hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="flex justify-center mb-6">{service.icon}</div>
                            <h2 className="text-2xl font-[Zyntro] text-yellow-300 mb-3">{service.title}</h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-black text-white py-10 px-6 md:px-20 font-sans mt-10">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-105 border-b border-gray-800 pb-10 text-center lg:text-left">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                            <div className="text-yellow-300 text-3xl font-bold">🌸</div>
                            <div className="text-5xl font-bold text-yellow-300 flex gap-2">
                                <h1 className="flex items-center font-bold font-[Zyntro] text-transparent bg-clip-text bg-linear-to-b from-yellow-500 via-amber-50 to-yellow-500 hover:scale-110 transition-all duration-200 cursor-pointer">Z.</h1>
                                <h1 className="text-2xl font-[Zyntro] mt-3.5">Fragrance</h1>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
                            Indulge in the essence of opulence with our exquisite fragrance,
                            where luxury meets allure in every captivating note.
                        </p>

                        <div className="flex justify-center lg:justify-start space-x-4 pt-3">
                            <a href="https://wa.me/923302861703" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-green-400 hover:scale-125 transition-all duration-300"><IoLogoWhatsapp /></a>
                            <a href="https://www.facebook.com/profile.php?id=61572671167560&mibextid=ZbWKwL" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-blue-600 hover:scale-125 transition-all duration-300"><FaFacebookF /></a>
                            <a href="https://www.tiktok.com/@zahoor.fragrance" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-black hover:scale-125 transition-all duration-300"><IoLogoTiktok /></a>
                            <a href="https://www.instagram.com/zahoor_fragrances" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white hover:text-fuchsia-500 hover:scale-125 transition-all duration-300"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-auto mt-8 lg:mt-0">
                        <h4 className="text-yellow-300 font-semibold text-sm mb-1">— Get Update</h4>
                        <h2 className="text-xl font-bold mb-4">Contact Us For Latest Update</h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                            <Link to="/contact">
                                <button className="relative h-9 w-40 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group hover:scale-105 active:scale-100">
                                    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Contact Us</span>
                                    <MdContactPhone className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between items-center text-gray-500 text-sm pt-6 space-y-2 sm:space-y-0">
                    <div className="flex space-x-6">
                        <Link to="/about"><h2 className="hover:text-yellow-300 transition-all duration-300">About Us</h2></Link>
                        <Link to="/sells"><h2 className="hover:text-yellow-300 transition-all duration-300">Best Sellers</h2></Link>
                        <Link to="/contact"><h2 className="hover:text-yellow-300 transition-all duration-300">Contact Us</h2></Link>
                    </div>

                    <a href="https://wa.me/923339730629" target="_blank" rel="noopener noreferrer" className="text-center">Developed by <span className="text-yellow-300 font-bold font-[Zyntro] text-lg">Saud Ahmad</span></a>

                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Zahoor Fragrances. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
