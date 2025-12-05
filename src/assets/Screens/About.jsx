import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../Components/Navbar';
import about from '../Images/about.png';
import aboutimg from '../Images/Aboutimg.jpg';
import { MdContactPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const missionRef = useRef(null);
  const whyRef = useRef(null);

  useEffect(() => {
    const sections = [headerRef, mainRef, missionRef, whyRef];

    sections.forEach((ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className='bg-black text-white relative min-h-screen'>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <Navbar />
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="relative w-full h-60 sm:h-80">
        <img
          className='w-full h-full object-cover opacity-80'
          src={about}
          alt="About banner"
        />
        <h1 className='absolute top-[30%] left-[10%] text-5xl sm:text-7xl text-yellow-300 font-[Zyntro] font-bold'>
          About Us
        </h1>
      </div>

      {/* Main Section */}
      <div ref={mainRef} className="w-full flex flex-col lg:flex-row items-center justify-center py-16 px-6 lg:px-12 bg-slate-300/20">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            className='h-140 rounded-2xl hover:scale-110 transition-all duration-300 hover:shadow-md hover:shadow-yellow-400'
            src={aboutimg}
            alt="About illustration"
          />
        </div>

        {/* Text */}
        <div className="w-full bg-black border border-yellow-400 lg:w-1/2 text-center lg:text-left font-semibold px-8 py-8 rounded-2xl flex flex-col items-center justify-center tracking-tight">
          <h1 className="text-4xl sm:text-5xl font-[Zyntro] mb-8 text-yellow-300">
            About Us
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify">
            At <span className="font-semibold text-3xl text-yellow-300 font-[Zyntro]">Z.</span>, we
            believe fragrance is more than just a scent — it’s a{" "}
            <span className="italic">story</span>. Each perfume we create is a
            journey through emotion, memory, and elegance — carefully blended to
            express the essence of individuality.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-justify">
            Founded by{" "}
            <span className="font-semibold text-3xl text-yellow-300 font-[Zyntro]">Zaryab Qaiser Awan</span>,{" "}
            <br />
            <span className="font-semibold text-3xl text-yellow-300 font-[Zyntro]">Z.</span> was born
            from a deep passion for timeless aromas and refined artistry. Every
            fragrance in our collection is handpicked, crafted, and perfected
            with the belief that scent has the power to define who you are —
            without saying a word.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            From subtle daily wear to bold signature blends, our perfumes are
            designed for those who appreciate{" "}
            <span className="font-semibold">luxury, authenticity, and self-expression</span>.
            We source only the finest ingredients to ensure every bottle of{" "}
            <span className="font-semibold text-3xl text-yellow-300 font-[Zyntro]">Z.</span> delivers a
            long-lasting, unforgettable experience.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="py-16 bg-slate-300/20 text-center px-6 sm:px-10 w-full"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-6 font-[Berita]">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Our mission at <span className="text-3xl text-yellow-300 font-[Zyntro]">Z.</span> is
          to craft fragrances that transcend time — blending art, nature, and
          emotion to create scents that empower individuality and elegance.
        </p>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyRef}
        className="py-16 text-center px-6 sm:px-10 w-full"
      >
        <h2 className="text-3xl font-semibold text-yellow-300 mb-10 font-[Berita]">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className='border border-yellow-400 rounded-r-2xl px-5 py-10 bg-slate-300/20 hover:scale-110 hover:shadow-md hover:shadow-yellow-400 hover:rounded-4xl transition-all duration-300'>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Quality
            </h3>
            <p>
              We use only premium, long-lasting ingredients sourced globally to
              ensure unmatched excellence.
            </p>
          </div>
          <div className='border border-yellow-400 rounded-l-2xl px-5 py-10 bg-slate-300/20 hover:scale-110 hover:shadow-md hover:shadow-yellow-400 hover:rounded-4xl transition-all duration-300'>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Creativity
            </h3>
            <p>
              Each perfume is an art form — blending innovation, passion, and
              craftsmanship.
            </p>
          </div>
          <div className='border border-yellow-400 rounded-r-2xl px-5 py-10 bg-slate-300/20 hover:scale-110 hover:shadow-md hover:shadow-yellow-400 hover:rounded-4xl transition-all duration-300'>
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Authenticity
            </h3>
            <p>
              Every bottle of{" "}
              <span className="text-yellow-300 font-[Zyntro] text-3xl font-semibold">Z.</span> is a
              reflection of true artistry, not imitation.
            </p>
          </div>
        </div>
      </section>

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

export default About;
