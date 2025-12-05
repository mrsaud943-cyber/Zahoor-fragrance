import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoChevronBack } from "react-icons/io5";
import img from "../../Images/Taster.png";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Taster = () => {
    const heroRef = useRef(null);
    const panelRef = useRef(null);
    const inspRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            heroRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(
            panelRef.current,
            { opacity: 0, y: 30, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: panelRef.current,
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            inspRef.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: inspRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">

            <header
                ref={heroRef}
                className="relative w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden bg-linear-to-b from-yellow-300/20 to-transparent"
            >
                <div className="z-10 relative max-w-6xl w-full px-6 sm:px-10 lg:px-20 flex flex-col-reverse my-20 md:flex-row items-center justify-between gap-12 md:gap-16 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start md:w-1/2">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[Zyntro] text-yellow-400 font-bold leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(255,215,0,0.25)]">
                            Taster Box
                        </h1>

                        <p className="mt-6 text-gray-300 max-w-lg text-base sm:text-lg lg:text-xl leading-relaxed">
                            Contains all fragrances in one box
                        </p>

                        <div className="mt-4 text-center md:text-left">
                            <p className="text-yellow-300 text-xl sm:text-2xl font-semibold tracking-wide">
                                5ml (5 bottles) – 1,500 PKR
                            </p>
                            <p className="text-yellow-200/70 text-sm mt-1 italic">Per Box</p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

                            <Link to='/tasterbuynow'>
                                <button className="relative mx-auto md:mx-0 hover:scale-105 active:scale-100 px-10 py-2 overflow-hidden bg-yellow-300 text-black rounded-r-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group">
                                    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Buy Now</span>
                                    <BsCartCheckFill className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                                </button>
                            </Link>

                            <Link to="/sells">
                                <button
                                    className="relative mx-auto md:mx-0 hover:scale-105 active:scale-100 px-15 py-2 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group"

                                >
                                    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Back</span>
                                    <IoChevronBack className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        ref={panelRef}
                        className="relative w-[200px] sm:w-60 md:w-[280px] lg:w-[320px] flex justify-center md:justify-end"
                    >
                        <div className="relative group rounded-3xl overflow-hidden border border-yellow-400 bg-linear-to-b from-black/60 to-black/80 shadow-[0_0_30px_rgba(255,215,0,0.15)] hover:shadow-[0_0_50px_rgba(255,215,0,0.3)] transition-all duration-500">
                            <img
                                src={img}
                                alt="Board Room Bottle"
                                className="w-full h-80 sm:h-[280px] md:h-80 lg:h-[360px] object-cover transform group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </header>

            <section
                ref={inspRef}
                className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-[Zyntro] text-yellow-400 mb-6">
                            What's that?
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                            "Taster Box" is a collection of all fragrances we have but in small bottles of 5ml each. The box box contains Wood of Kings, Velvet Night, Board Room, Floral Oasis and Seductress all fragrances in 5ml bottles to test it. Which one you like the most you can buy it from us.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`inspo ${i}`}
                                className="w-full h-36 sm:h-40 md:h-48 object-cover rounded-lg shadow-md hover:scale-125 hover:m-5 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-black/80 border-t border-yellow-400/5 py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
                    <h4 className="text-lg sm:text-xl text-gray-300 mb-4">
                        Experience Taster Box
                    </h4>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                        Want to try Taster Box? Reach out from the contact page or visit our collection.
                    </p>

                </div>

                <div className="flex justify-center items-center">
                    <Link to="/sells">
                        <button
                            className="relative mx-auto md:mx-0 hover:scale-105 active:scale-100 px-15 py-2 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group"
                        >
                            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Collection</span>
                            <IoChevronBack className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                        </button>
                    </Link>
                </div>

            </footer>

        </div>
    );
};

export default Taster;
