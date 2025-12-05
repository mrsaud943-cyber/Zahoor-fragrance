import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { IoChevronBack } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import perfumeImg from "../../Images/Night.jpg";
import { Link } from "react-router-dom";


const Velvet = () => {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        quantity: "",
        message: "",
    });

    const [toast, setToast] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current.children,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const { name, phone, address, quantity, message } = formData;

        if (!name || !phone || !address || !quantity) {
            setToast("⚠️ Please fill all required fields!");
            setTimeout(() => setToast(""), 3000);
            return;
        }

        setLoading(true);

        const phoneNumber = "923302861703";

        const whatsappMessage = `🛍 Mr.Zaryab Qaiser Awan! I Would Like To Place An Order For "Velvet Night". 🛍

 Name: ${name}
 Phone: ${phone}
 Address: ${address}
 Quantity: ${quantity}
 Price: Rs 2,399 PKR (50ml) per bottle
 Message: ${message || "N/A"}

Please confirm my order.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        setToast("✅ Redirecting to WhatsApp...");
        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
            setToast("");
            setLoading(false);
        }, 1000);
    };

    return (
        <section
            ref={containerRef}
            className="h-screen w-full bg-black text-white flex items-center justify-center px-4 md:px-16 overflow-hidden relative"
        >
            {/* Toast Message */}
            {toast && (
                <div className="fixed top-6 right-6 bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-lg animate-bounce z-50">
                    {toast}
                </div>
            )}

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                {/* Left: Product Image (hidden on mobile) */}
                <div className="hidden md:block md:w-1/2 rounded-3xl overflow-hidden border border-yellow-400 shadow-[0_0_30px_rgba(255,255,0,0.1)]">
                    <img
                        src={perfumeImg}
                        alt="Board Room Perfume"
                        className="w-full h-[480px] object-cover opacity-90 hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
                </div>

                {/* Right: Form */}
                <form className="md:w-1/2 w-full bg-linear-to-b from-yellow-400/10 to-black/40 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.1)]">
                    <h1 className="text-4xl sm:text-5xl font-[Zyntro] text-transparent font-bold bg-clip-text bg-linear-to-b from-yellow-200 via-yellow-500 to-yellow-300 text-center mb-6">
                        Order Now
                    </h1>

                    <h2 className="text-center mt-4 text-yellow-300 mb-8 text-xl font-semibold">
                            Velvet Night — 50ml <span className="text-yellow-400">Rs 2,399 PKR</span>
                        </h2>

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="px-4 py-3 rounded-lg bg-black/60 border border-yellow-400 focus:border-yellow-400 outline-none text-yellow-100 placeholder-yellow-300/50 transition-all"
                        />

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="px-4 py-3 rounded-lg bg-black/60 border border-yellow-400 focus:border-yellow-400 outline-none text-yellow-100 placeholder-yellow-300/50 transition-all"
                        />

                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Shipping Address"
                            className="px-4 py-3 rounded-lg bg-black/60 border border-yellow-400 focus:border-yellow-400 outline-none text-yellow-100 placeholder-yellow-300/50 transition-all"
                        />

                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="Quantity"
                            className="px-4 py-3 rounded-lg bg-black/60 border border-yellow-400 focus:border-yellow-400 outline-none text-yellow-100 placeholder-yellow-300/50 transition-all"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Special Instructions (optional)"
                            rows={2}
                            className="px-4 py-3 rounded-lg bg-black/60 border border-yellow-400 focus:border-yellow-400 outline-none text-yellow-100 placeholder-yellow-300/50 transition-all resize-none"
                        ></textarea>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="relative inline-flex items-center justify-center gap-3 w-full sm:w-40 lg:w-40 md:w-40 py-3 bg-yellow-300 text-black font-bold text-lg rounded-r-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
                            >
                                <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                                    {loading ? "Processing..." : "Place Order"}
                                </span>
                                <FaShoppingBag className="absolute text-3xl opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                            </button>

                            <Link to="/VelvetNight">
                                <button
                                className="relative inline-flex items-center justify-center gap-3 w-full lg:px-15 md:px-15 sm:px-15 py-3 bg-yellow-300 text-black font-bold text-lg rounded-r-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
                                >
                                    <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Back</span>
                                    <IoChevronBack className="absolute text-3xl opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Velvet;
