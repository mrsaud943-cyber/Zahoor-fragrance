import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    
    // Current page path get karna
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
       
        { 
            name: "Shop", 
            path: "#",
            hasDropdown: true,
            dropdownItems: [
                { name: "Perfumes", path: "/blog" },
                { name: "Organic", path: "/faq" },
            ]
        },
          { name: "FAQ's", path: "/faq" },
    ];

    // Active check karne ka function
    const isActive = (path) => {
        if (path === "/") {
            return currentPath === "/";
        }
        return currentPath === path || currentPath.startsWith(path + "/");
    };

    return (

        <nav className="w-full bg-black border-b border-[#2b2b2b] px-4 sm:px-8 lg:px-14 py-6 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex flex-col leading-none cursor-pointer group Syne flex-shrink-0">

                    <h1 className="text-[#C89B5C] text-[22px] sm:text-[30px] font-semibold tracking-[0.18em] uppercase">
                        Zahoor
                    </h1>

                    <span className="text-gray-300 text-[11px] sm:text-[14px] tracking-[0.35em] uppercase mt-1 px-2">
                        Fragrance
                    </span>

                </Link>

                {/* Center Nav Links - Desktop */}
                <ul className="hidden lg:flex items-center gap-12 text-white uppercase tracking-[0.22em] text-[14px] font-medium outfit absolute left-1/2 -translate-x-1/2">

                    {navLinks.map((link, index) => {

                        const active = isActive(link.path);

                        return (

                            <li key={index} className="relative cursor-pointer group flex flex-col items-center pb-6">

                                {/* Link */}
                                <Link 
                                    to={link.path}
                                    className={`uppercase tracking-[0.22em] text-[14px] flex items-center gap-2 transition-all duration-500 ${
                                        active ? 'text-[#C89B5C]' : 'text-white group-hover:text-[#C89B5C]'
                                    }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && (
                                        <FiChevronDown className="w-4 h-4" />
                                    )}
                                </Link>

                                {/* Horizontal Line - neeche */}
                                <span className={`absolute bottom-2 w-16 h-[1px] bg-[#C89B5C] transition-all duration-500 origin-center ${
                                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>

                                {/* Vertical Line - horizontal ke neeche center se upar */}
                                <span className={`absolute bottom-[-12px] w-[1px] bg-[#C89B5C] transition-all duration-500 ${
                                    active ? 'h-5' : 'h-0 group-hover:h-5'
                                }`}></span>

                                {/* Dropdown for Pages */}
                                {link.hasDropdown && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-[#1a1a1a] border border-[#333] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        {link.dropdownItems.map((item, idx) => (
                                            <Link 
                                                key={idx}
                                                to={item.path}
                                                className={`block px-4 py-2 text-[12px] tracking-wider transition-colors ${
                                                    isActive(item.path) ? 'text-[#C89B5C]' : 'text-white hover:text-[#C89B5C]'
                                                }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                            </li>

                        );

                    })}

                </ul>

                {/* Right Side - Contact + Hamburger */}
                <div className="flex items-center gap-5 sm:gap-8">

                    {/* Contact Button - Desktop */}
                    <Link 
                        to="/contact"
                        className="hidden lg:flex relative cursor-pointer group flex-col items-center pb-6"
                    >

                        <span className={`uppercase tracking-[0.22em] text-[14px] transition-all duration-500 outfit ${
                            isActive("/contact") ? 'text-[#C89B5C]' : 'text-white group-hover:text-[#C89B5C]'
                        }`}>
                            Contact
                        </span>

                        {/* Horizontal Line */}
                        <span className={`absolute bottom-2 w-16 h-[1px] bg-[#C89B5C] transition-all duration-500 origin-center ${
                            isActive("/contact") ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}></span>

                        {/* Vertical Line */}
                        <span className={`absolute bottom-[-12px] w-[1px] bg-[#C89B5C] transition-all duration-500 ${
                            isActive("/contact") ? 'h-5' : 'h-0 group-hover:h-5'
                        }`}></span>

                    </Link>

                    {/* Hamburger Menu Button - Mobile */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-white hover:text-[#C89B5C] transition-all duration-300"
                    >
                        {isMobileMenuOpen ? (
                            <FiX className="w-6 h-6" />
                        ) : (
                            <FiMenu className="w-6 h-6" />
                        )}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#2b2b2b] z-50">
                    <div className="px-6 py-8 space-y-6">

                        {navLinks.map((link, index) => {

                            const active = isActive(link.path);

                            return (

                                <div key={index} className="relative">
                                    <div 
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => link.hasDropdown && setIsPagesOpen(!isPagesOpen)}
                                    >
                                        <Link 
                                            to={link.path}
                                            className={`uppercase tracking-[0.22em] text-[14px] outfit ${
                                                active ? 'text-[#C89B5C]' : 'text-white'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.hasDropdown && (
                                            <FiChevronDown className={`w-4 h-4 text-white transition-transform duration-300 ${isPagesOpen ? 'rotate-180' : ''}`} />
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.hasDropdown && isPagesOpen && (
                                        <div className="mt-3 pl-4 space-y-3 border-l border-[#333]">
                                            {link.dropdownItems.map((item, idx) => (
                                                <Link 
                                                    key={idx}
                                                    to={item.path}
                                                    className={`block text-[13px] tracking-wider transition-colors ${
                                                        isActive(item.path) ? 'text-[#C89B5C]' : 'text-gray-400 hover:text-[#C89B5C]'
                                                    }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            );

                        })}

                        {/* Contact in Mobile */}
                        <div className="pt-4 border-t border-[#2b2b2b]">
                            <Link 
                                to="/contact"
                                className={`uppercase tracking-[0.22em] text-[14px] outfit ${
                                    isActive("/contact") ? 'text-[#C89B5C]' : 'text-white'
                                }`}
                            >
                                Contact
                            </Link>
                        </div>

                    </div>
                </div>
            )}

        </nav>
    );
}