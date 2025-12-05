import React, { useEffect, useRef } from "react";
import { FaCogs, FaShippingFast, FaGift, FaHandHoldingHeart, FaLeaf, FaCertificate, FaFacebookF, FaInstagram } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import bg from "../Images/top.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Custom Fragrance Design",
        desc: "Create a scent as unique as your personality. Our experts craft bespoke perfumes that reflect your aura and lifestyle.",
        icon: <FaCogs className="text-4xl text-yellow-400" />,
    },
    {
        title: "Luxury Gifting",
        desc: "Make every moment memorable with our curated fragrance gift boxes — elegantly packaged for every occasion.",
        icon: <FaGift className="text-4xl text-yellow-400" />,
    },
    {
        title: "All Pakistan Delivery",
        desc: "From our atelier to your doorstep. Experience Pakistan wide delivery with care, speed, and security.",
        icon: <FaShippingFast className="text-4xl text-yellow-400" />,
    },
    {
        title: "Personal Consultation",
        desc: "Book a one-on-one fragrance session with our scent designers to discover what truly defines your identity.",
        icon: <FaHandHoldingHeart className="text-4xl text-yellow-400" />,
    },
    {
        title: "Sustainable Craftsmanship",
        desc: "Our perfumes are crafted responsibly with cruelty-free and eco-friendly practices — because elegance deserves ethics.",
        icon: <FaLeaf className="text-4xl text-yellow-400" />,
    },
    {
        title: "Authenticity Guaranteed",
        desc: "Every fragrance is verified, quality-tested, and sealed with our signature mark of authenticity.",
        icon: <FaCertificate className="text-4xl text-yellow-400" />,
    },
];

const OurServices = () => {
    const heroRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Hero animation
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        // Service cards scroll animation
        cardsRef.current.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    delay: i * 0.1,
                }
            );
        });

    }, []);

    return (
        <section className="bg-black text-white min-h-screen relative overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={bg}
                    alt="Luxury Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <h1
                    ref={heroRef}
                    className="text-4xl sm:text-5xl md:text-7xl font-[Zyntro] text-yellow-300 text-center drop-shadow-lg z-10"
                >
                    Our Signature Services
                </h1>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="relative bg-slate-300/10 backdrop-blur-md border border-yellow-400 rounded-2xl shadow-[0_0_15px_rgba(255,255,0,0.15)] p-8 text-center hover:shadow-[0_0_25px_rgba(255,255,0,0.3)] hover:-translate-y-2 transition-all duration-500 group"
                    >
                        <div className="flex justify-center mb-6">{service.icon}</div>
                        <h2 className="text-2xl font-[Zyntro] text-yellow-300 mb-3 group-hover:scale-105 transition-transform duration-300">
                            {service.title}
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
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
        </section>
    );
};

export default OurServices;
