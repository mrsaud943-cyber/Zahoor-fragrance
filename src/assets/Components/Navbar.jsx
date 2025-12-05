// import { useState } from "react";
// import { MdContactPhone } from "react-icons/md";
// import { FaHome, FaInfoCircle } from "react-icons/fa";
// import { GiDelicatePerfume } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import { GrServices } from "react-icons/gr";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="h-20 w-full bg-black fixed top-0 left-0 z-50 text-white flex items-center justify-between border-b border-b-yellow-400 shadow-[0_0_15px_yellow] px-5 md:px-16">

//       <Link to="/">
//         <div className="text-5xl md:text-6xl font-bold font-[Zyntro] text-transparent bg-clip-text bg-linear-to-b from-yellow-50 via-yellow-500 to-yellow-50 hover:scale-110 transition-all duration-200 cursor-pointer">
//           Z.
//         </div>
//       </Link>

//       <div className="hidden lg:flex flex-1 items-center justify-center gap-8 text-lg font-serif ml-40">
//         <Link to="/">
//           <button className="flex items-center gap-2 hover:text-yellow-400 hover:scale-110 hover:m-5 transition-all duration-200 ease-in">
//             <FaHome /> Home
//           </button>
//         </Link>

//         <Link to="/about">
//           <button className="flex items-center gap-2 hover:text-yellow-400 hover:scale-110 hover:m-5 transition-all duration-200 ease-in">
//             <FaInfoCircle /> About
//           </button>
//         </Link>

//         <Link to="/sells">
//           <button className="flex items-center gap-2 hover:text-yellow-400 hover:scale-110 hover:m-5 transition-all duration-200 ease-in">
//             <GiDelicatePerfume  /> Collection
//           </button>
//         </Link>

//         <Link to="/services">
//           <button className="flex items-center gap-2 hover:text-yellow-400 hover:scale-110 hover:m-5 transition-all duration-200 ease-in">
//             <GrServices /> Services
//           </button>
//         </Link>
//       </div>

//       <div className="hidden lg:flex items-center justify-center">
//         <Link to="/contact">
//           <button className="hover:scale-105 active:scale-100 relative h-11 w-52 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group mx-auto md:mx-0">
//             <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
//               Contact Us
//             </span>
//             <MdContactPhone className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
//           </button>
//         </Link>
//       </div>

//       {/* Hamburger Icon */}
//       <div
//         className="lg:hidden md:block flex flex-col gap-1 cursor-pointer ml-auto"
//         onClick={() => setOpen(!open)}
//       >
//         <span className={`block w-6 h-1 bg-yellow-400 transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
//         <span className={`block w-6 h-1 bg-yellow-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
//         <span className={`block w-6 h-1 bg-yellow-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-5 py-6 text-lg font-serif border-t border-yellow-400 shadow-[0_0_10px_yellow] md:hidden">
//           <Link to="/" onClick={() => setOpen(false)}>
//             <button className="flex items-center gap-3 hover:text-yellow-400 transition-all duration-200">
//               <FaHome /> Home
//             </button>
//           </Link>

//           <Link to="/about" onClick={() => setOpen(false)}>
//             <button className="flex items-center gap-3 hover:text-yellow-400 transition-all duration-200">
//               <FaInfoCircle /> About
//             </button>
//           </Link>

//           <Link to="/sells" onClick={() => setOpen(false)}>
//             <button className="flex items-center gap-3 hover:text-yellow-400 transition-all duration-200">
//               <GiDelicatePerfume  /> Collection
//             </button>
//           </Link>

//           <Link to="/services" onClick={() => setOpen(false)}>
//             <button className="flex items-center gap-3 hover:text-yellow-400 transition-all duration-200">
//               <GrServices /> Services
//             </button>
//           </Link>

//           <Link to="/contact" onClick={() => setOpen(false)}>
//             <button className="relative h-9 w-40 overflow-hidden bg-yellow-300 text-black rounded-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group hover:scale-105 active:scale-100">
//               <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
//                 Contact Us
//               </span>
//               <MdContactPhone className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GiDelicatePerfume } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/", icon: <FaHome /> },
    { name: "About", to: "/about", icon: <FaInfoCircle /> },
    { name: "Collection", to: "/sells", icon: <GiDelicatePerfume /> },
    { name: "Services", to: "/services", icon: <GrServices /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/40 backdrop-blur-xl border-b border-yellow-300/40 shadow-[0_0_25px_rgba(255,215,0,0.25)] z-50 flex items-center justify-between px-6 md:px-16">

      {/* Logo */}
      <Link to="/">
        <h1 className="text-5xl md:text-6xl font-bold font-[Zyntro] text-transparent bg-clip-text bg-linear-to-b from-yellow-50 via-yellow-300 to-yellow-50 drop-shadow-[0_0_12px_rgba(255,215,0,0.4)] cursor-pointer hover:scale-125 transition-all duration-500 select-none">
          Z.
        </h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-1 items-center justify-center gap-10 font-serif ml-20">
        {links.map((item) => (
          <Link key={item.to} to={item.to}>
            <button className="relative text-lg flex items-center gap-2 text-neutral-200 hover:text-yellow-200 transition-all duration-300 group">
              {item.icon} {item.name}

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-500" />
            </button>
          </Link>
        ))}
      </div>

      {/* Desktop Contact */}
      <div className="hidden lg:flex">
        <Link to="/contact">
          <button className="relative h-9 w-40 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group hover:scale-105 active:scale-100">
            <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Contact Us</span>
            <MdContactPhone className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
          </button>
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className={`block w-8 h-1 bg-yellow-300 rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-8 h-1 bg-yellow-300 rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-8 h-1 bg-yellow-300 rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/70 backdrop-blur-xl border-t border-yellow-300/40 shadow-[0_0_20px_rgba(255,215,0,0.3)] flex flex-col items-center gap-6 py-6 animate-fadeIn lg:hidden">
          {links.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              <button className="relative text-lg flex items-center gap-2 text-neutral-200 hover:text-yellow-200 transition-all duration-300 group">
                {item.icon} {item.name}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-yellow-300 w-0 group-hover:w-full transition-all duration-500" />
              </button>
            </Link>
          ))}

          <Link to="/contact" onClick={() => setOpen(false)}>
            <button className="relative h-9 w-40 overflow-hidden bg-yellow-300 text-black rounded-l-full flex items-center justify-center text-lg font-bold shadow-sm shadow-yellow-200 transition-all duration-300 hover:text-yellow-400 group hover:scale-105 active:scale-100">
              <span className="transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">Contact Us</span>
              <MdContactPhone className="absolute text-3xl text-black opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
