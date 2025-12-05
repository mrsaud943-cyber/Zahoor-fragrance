// // // import React from "react";
// // // import Navbar from "../Components/Navbar";
// // // import { FaWhatsapp, FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

// // // const Contact = () => {
// // //     return (
// // //         <div className="min-h-screen bg-gradient-to-b from-amber-100 to-stone-50 flex flex-col">
// // //             <Navbar />

// // //             <div className="flex flex-col lg:flex-row items-center justify-center flex-grow px-6 lg:px-16 py-24 lg:py-0 gap-8 lg:gap-16">

// // //                 {/* LEFT SIDE — Contact Info */}
// // //                 <div className="bg-white shadow-lg rounded-3xl border border-amber-100 p-8 sm:p-10 lg:w-1/2 w-full flex flex-col justify-center items-start text-center lg:text-left">
// // //                     <h1 className="text-4xl font-serif text-amber-900 mb-4">
// // //                         Let’s Connect 🌿
// // //                     </h1>
// // //                     <p className="text-gray-600 mb-8 text-sm sm:text-base">
// // //                         We’d love to hear from you! Whether it’s about our fragrances, your orders,
// // //                         or collaborations — reach out anytime through our social platforms.
// // //                     </p>

// // //                     <div className="flex justify-center lg:justify-start gap-6">

// // //                         <a
// // //                             href="https://wa.me/923302861703"
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-amber-700 hover:text-green-600 text-3xl transition-all transform hover:scale-110"
// // //                         >
// // //                             <FaWhatsapp />
// // //                         </a>

// // //                         <a
// // //                             href="https://www.tiktok.com/@zahoor.fragrance"
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-amber-700 hover:text-black text-3xl transition-all transform hover:scale-110"
// // //                         >
// // //                             <FaTiktok />
// // //                         </a>

// // //                         {/* Facebook */}
// // //                         <a
// // //                             href="https://www.facebook.com/yourbrand"
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-amber-700 hover:text-blue-600 text-3xl transition-all transform hover:scale-110"
// // //                         >
// // //                             <FaFacebookF />
// // //                         </a>

// // //                         {/* Instagram */}
// // //                         <a
// // //                             href="https://www.instagram.com/yourbrand"
// // //                             target="_blank"
// // //                             rel="noopener noreferrer"
// // //                             className="text-amber-700 hover:text-pink-500 text-3xl transition-all transform hover:scale-110"
// // //                         >
// // //                             <FaInstagram />
// // //                         </a>
// // //                     </div>

// // //                     <p className="text-gray-500 text-xs sm:text-sm mt-8">
// // //                         © {new Date().getFullYear()} Zyntro Fragrances. All rights reserved.
// // //                     </p>
// // //                 </div>

// // //                 {/* RIGHT SIDE — Embedded Map */}
// // //                 <div className="w-full lg:w-1/2 h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-lg border border-amber-100">
// // //                     <iframe
// // //                         className="w-full h-full"
// // //                         title="Our Location"
// // //                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.6916936633367!2d70.61684!3d32.98199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d807e146aaaaab%3A0x5505dfeb05934c33!2sBannu%20Woollen%20Mills%20limited!5e0!3m2!1sen!2s!4v1697832685174!5m2!1sen!2s"
// // //                         loading="lazy"
// // //                         allowFullScreen
// // //                     ></iframe>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Contact;


// import React, { useEffect, useRef, useState } from "react";
// import Navbar from "../Components/Navbar";
// import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
// import { IoLogoTiktok } from "react-icons/io5";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { gsap } from "gsap";

// const Contact = () => {
//     const sectionRef = useRef(null);
//     const [copied, setCopied] = useState("");

//     useEffect(() => {
//         gsap.fromTo(
//             sectionRef.current.children,
//             { opacity: 0, y: 50 },
//             { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
//         );
//     }, []);

//     const handleCopy = (text, label) => {
//         navigator.clipboard.writeText(text);
//         setCopied(label);
//         setTimeout(() => setCopied(""), 2000);
//     };

//     const handleWhatsApp = () => {
//         const phoneNumber = "923302861703";
//         const message = encodeURIComponent("Hello, I’d like to get in touch with Zahoor Fragrance.");
//         window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
//     };

//     return (
//         <section className="bg-black text-white min-h-screen">
//             <Navbar />

//             <div className="relative w-full h-[50vh] flex items-center justify-center bg-linear-to-b from-yellow-500/20 to-transparent">
//                 <h1 className="text-4xl sm:text-6xl font-[Zyntro] text-yellow-300 drop-shadow-lg font-bold mt-20">
//                     Contact Us
//                 </h1>
//             </div>

//             <div
//                 ref={sectionRef}
//                 className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10"
//             >

//                 <div className="bg-slate-300/10 p-8 rounded-2xl shadow-md border border-yellow-400/40">
//                     <h2 className="text-3xl font-[Zyntro] text-yellow-300 mb-6">Get In Touch</h2>
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             handleWhatsApp();
//                         }}
//                         className="flex flex-col space-y-4"
//                     >
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             required
//                             className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Your Location"
//                             required
//                             className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Subject"
//                             required
//                             className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
//                         />
//                         <textarea
//                             rows="5"
//                             placeholder="Type your message..."
//                             className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none resize-none"
//                         ></textarea>

//                         <button
//                             className="hover:scale-105 active:scale-100 relative px-10 py-3 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0"
//                         >
//                             <span className="transition-all font-sans duration-300 group-hover:opacity-0 group-hover:translate-y-2">
//                                 Contact via WhatsApp
//                             </span>
//                             <IoLogoWhatsapp className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
//                         </button>
//                     </form>
//                 </div>

//                 <div className="flex flex-col justify-between">
//                     <div className="space-y-6">
//                         <p className="text-gray-300 text-sm sm:text-base">
//                             Have a question, business inquiry, or want to explore our fragrances? We’d love to hear from you.
//                         </p>

//                         <div className="space-y-5 text-sm sm:text-base">

//                             <div
//                                 className="flex items-center gap-4 cursor-pointer hover:translate-x-3 hover:scale-105 transition-all"
//                                 onClick={() => handleCopy("+92 330 2861703", "Phone number copied!")}
//                             >
//                                 <FaPhoneAlt className="text-yellow-400 text-xl" />
//                                 <span>+92 330 2861703</span>
//                             </div>

//                             <div className="flex items-center gap-4 hover:translate-x-3 hover:scale-105 transition-all">
//                                 <IoLogoTiktok className="text-yellow-400 text-xl" />
//                                 <a
//                                     href="https://www.tiktok.com/@zahoor.fragrance"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     @Zahoor Fragrance
//                                 </a>
//                             </div>

//                             <div
//                                 className="flex items-center gap-4 cursor-pointer hover:translate-x-3 hover:scale-105 transition-all"
//                                 onClick={handleWhatsApp}
//                             >
//                                 <FaWhatsapp className="text-yellow-400 text-xl" />
//                                 <span>Chat on WhatsApp</span>
//                             </div>

//                             <div
//                                 className="flex items-center gap-4 cursor-pointer hover:translate-x-3 hover:scale-105 transition-all"
//                                 onClick={() =>
//                                     handleCopy(
//                                         "Bannu Woollen Mills Limited, Bannu, Pakistan",
//                                         "Address copied!"
//                                     )
//                                 }
//                             >
//                                 <FaMapMarkerAlt className="text-yellow-400 text-xl" />
//                                 <span>Bannu Woollen Mills Limited, Bannu, Pakistan</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="mt-10 w-full h-64 rounded-xl overflow-hidden border border-yellow-400/20 shadow-sm">
//                         <iframe
//                             title="map"
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.6916936633367!2d70.61684!3d32.98199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d807e146aaaaab%3A0x5505dfeb05934c33!2sBannu%20Woollen%20Mills%20limited!5e0!3m2!1sen!2s!4v1697832685174!5m2!1sen!2s"
//                             width="100%"
//                             height="100%"
//                             loading="lazy"
//                             style={{ border: "none" }}
//                         ></iframe>
//                     </div>
//                 </div>
//             </div>

//             {copied && (
//                 <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-sm shadow-md animate-bounce">
//                     {copied}
//                 </div>
//             )}

//             <div className="w-full text-center py-20 bg-linear-to-t from-yellow-500/10 to-transparent">
//                 <h2 className="text-2xl sm:text-4xl font-[Zyntro] text-yellow-300 mb-6 font-semibold">
//                     Let’s Create Something Beautiful Together
//                 </h2>

//                 <div className="flex items-center justify-center">
//                     <button
//                         onClick={handleWhatsApp}
//                         className="hover:scale-105 active:scale-100 relative px-10 py-3 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0"
//                     >
//                         <span className="transition-all font-sans duration-300 group-hover:opacity-0 group-hover:translate-y-2">
//                             Contact via WhatsApp
//                         </span>
//                         <IoLogoWhatsapp className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoTiktok, IoLogoWhatsapp } from "react-icons/io5";
import { gsap } from "gsap";

const Contact = () => {
    const sectionRef = useRef(null);
    const [copied, setCopied] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.children,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    const handleCopy = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(""), 2000);
    };

    // ✅ WhatsApp message sending logic
    const handleWhatsApp = () => {
        const phoneNumber = "923302861703";
        const { name, location, subject, message } = formData;

        if (!name || !location || !subject) {
            alert("Please fill out Name, Location, and Subject before sending.");
            return;
        }

        const text = `
"Hello Mr.Zaryab Qaiser Awan"

My name is: ${name}
My location is: ${location}
My subject is: ${subject}
My message is: ${message || "N/A"}

Sent from Zahoor Fragrance Website.
        `;

        const encodedText = encodeURIComponent(text.trim());

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappURL, "_blank");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-black text-white min-h-screen">
            <Navbar />

            <div className="relative w-full h-[50vh] flex items-center justify-center bg-linear-to-b from-yellow-500/20 to-transparent">
                <h1 className="text-4xl sm:text-6xl font-[Zyntro] text-yellow-300 drop-shadow-lg font-bold mt-20">
                    Contact Us
                </h1>
            </div>

            <div
                ref={sectionRef}
                className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-10"
            >
                {/* Left: Contact Form */}
                <div className="bg-slate-300/10 p-8 rounded-2xl shadow-md border border-yellow-400/40">
                    <h2 className="text-3xl font-[Zyntro] text-yellow-300 mb-6">Get In Touch</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleWhatsApp();
                        }}
                        className="flex flex-col space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
                        />
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Your Location"
                            required
                            className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
                        />
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                            className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none"
                        />
                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message (optional)..."
                            className="p-3 rounded-md bg-black/50 border border-yellow-400/30 focus:border-yellow-400 outline-none resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="hover:scale-105 active:scale-100 relative px-10 py-3 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0"
                        >
                            <span className="transition-all font-sans duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                                Contact via WhatsApp
                            </span>
                            <IoLogoWhatsapp className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                        </button>
                    </form>
                </div>

                {/* Right: Info + Map */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <p className="text-gray-300 text-sm sm:text-base">
                            Have a question, business inquiry, or want to explore our fragrances? We’d love to hear from you.
                        </p>

                        <div className="space-y-5 text-sm sm:text-base">
                            {/* Phone */}
                            <div
                                className="flex items-center gap-4 cursor-pointer hover:translate-x-3 hover:scale-105 transition-all"
                                onClick={() => handleCopy("+92 330 2861703", "Phone number copied!")}
                            >
                                <FaPhoneAlt className="text-yellow-400 text-xl" />
                                <span>+92 330 2861703</span>
                            </div>

                            {/* TikTok */}
                            <div className="flex items-center gap-4 hover:translate-x-3 hover:scale-105 transition-all">
                                <IoLogoTiktok className="text-yellow-400 text-xl" />
                                <a
                                    href="https://www.tiktok.com/@zahoor.fragrance"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @Zahoor Fragrance
                                </a>
                            </div>

                            {/* WhatsApp */}

                            <a
                                href="https://wa.me/923302861703"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 hover:translate-x-3 hover:scale-105 transition-all">
                                <IoLogoWhatsapp className="text-yellow-400 text-xl" />
                                Chat with us
                            </a>

                            {/* Address */}
                            <div
                                className="flex items-center gap-4 cursor-pointer hover:translate-x-3 hover:scale-105 transition-all"
                                onClick={() =>
                                    handleCopy(
                                        "Bannu Woollen Mills Limited, Bannu, Pakistan",
                                        "Address copied!"
                                    )
                                }
                            >
                                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                                <span>Bannu Woollen Mills Limited, Bannu, Pakistan</span>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mt-10 w-full h-64 rounded-xl overflow-hidden border border-yellow-400/20 shadow-sm">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.6916936633367!2d70.61684!3d32.98199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d807e146aaaaab%3A0x5505dfeb05934c33!2sBannu%20Woollen%20Mills%20limited!5e0!3m2!1sen!2s!4v1697832685174!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            style={{ border: "none" }}
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Copy Notification */}
            {copied && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-sm shadow-md animate-bounce">
                    {copied}
                </div>
            )}

        </section>
    );
};

export default Contact;
