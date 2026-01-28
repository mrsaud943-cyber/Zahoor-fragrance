import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoChevronBack } from "react-icons/io5";
import img from "../../Images/Topical.jpeg";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const TopicalMist = () => {
    const heroRef = useRef(null);
    const panelRef = useRef(null);
    const notesRef = useRef(null);
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

        const notesEls = notesRef.current?.querySelectorAll?.(".note-item") || [];
        notesEls.forEach((el, i) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    },
                }
            );
        });

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
                           Tropical Mist
                        </h1>

                        
                        <div className="mt-4 text-center md:text-left">
                            <p className="text-yellow-300 text-xl sm:text-2xl font-semibold tracking-wide">
                                50ml – 3500 PKR
                            </p>
                            <p className="text-yellow-200/70 text-sm mt-1 italic">Per Bottle</p>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

                            <Link to='/Topical'>
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

            <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-slate-300/5 border border-yellow-400 p-6 sm:p-8 rounded-2xl">
                        <h3 className="text-2xl sm:text-3xl font-[Zyntro] text-yellow-400 mb-4">
                            Notes
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                            Sweet, airy, unisexual, and luxurious, long lasting, and very distinctive.
                        </p>
                    </div>

                    <div
                        className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                        ref={notesRef}
                    >
                        {[
                            { title: "Top", text:"Pineapple, Blackcurrant, Apple, Bergamot"},
                            { title: "Middle", text:"Birch, Patchouli, Jasmine, Rose"},
                            { title: "Base", text:"Musk, Oakmoss, Ambergris, Vanilla"},

                        ].map((n) => (
                            <div
                                key={n.title}
                                className="note-item bg-slate-300/6 border border-yellow-400 rounded-xl p-6 hover:scale-[1.02] transition-transform"
                            >
                                <h4 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
                                    {n.title}
                                </h4>
                                <p className="text-gray-300 text-sm sm:text-base">{n.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                ref={inspRef}
                className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-[Zyntro] text-yellow-400 mb-6">
                            Inspiration
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
                            N/A
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
                        Experience Tropical Mist
                    </h4>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
                        Want to try Tropical Mist? Reach out from the contact page or visit our collection.
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

export default TopicalMist;
