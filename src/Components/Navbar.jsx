import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Radar,
  LineChart,
  GraduationCap,
  MailWarning,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/cyber-logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileServicesDropdownOpen(false);
  };

  // Toggle services dropdown (desktop)
  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Toggle services dropdown (mobile)
  const toggleMobileServicesDropdown = (e) => {
    e.preventDefault();
    setMobileServicesDropdownOpen(!mobileServicesDropdownOpen);
  };

  // Service items with icons and coming soon status
  const serviceItems = [
    {
      name: "Pen Testing",
      path: "/pricing/pentesting",
      icon: ShieldAlert,
      comingSoon: false,
      description: "Comprehensive security testing",
    },
    {
      name: "Threat Intelligence Dark Web",
      path: "/pricing/threat-intelligence",
      icon: Radar,
      comingSoon: false,
      description: "Monitor dark web threats",
    },
    {
      name: "Cyber Monitoring",
      path: "/pricing/cyber-monitoring",
      icon: LineChart,
      comingSoon: true,
      description: "24/7 security monitoring",
    },
    {
      name: "Cyber Education",
      path: "/pricing/cyber-education",
      icon: GraduationCap,
      comingSoon: true,
      description: "Security awareness training",
    },
    {
      name: "Phishing Attacks",
      path: "/pricing/phishing-attacks",
      icon: MailWarning,
      comingSoon: true,
      description: "Advanced phishing protection",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity duration-300"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md p-1.5">
            <img
              src={logo}
              alt="CyberWarLab"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-red-500 to-red-700 bg-clip-text text-transparent">
            CyberWarLab
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-sm font-medium text-white">
          <Link
            to="/free-scan"
            className={`transition-colors duration-300 relative ${
              location.pathname === "/free-scan"
                ? "text-white"
                : "hover:text-red-400"
            }`}
          >
            Free Scan
            {location.pathname === "/free-scan" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </Link>

          {/* Pricing Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServicesDropdown}
              className={`flex items-center gap-1 transition-colors duration-300 relative ${
                location.pathname.startsWith("/pricing")
                  ? "text-white"
                  : "hover:text-red-400"
              }`}
            >
              Pricing
              {servicesDropdownOpen ? (
                <ChevronUp size={16} className="mt-0.5" />
              ) : (
                <ChevronDown size={16} className="mt-0.5" />
              )}
              {location.pathname.startsWith("/pricing") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
              )}
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
                servicesDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="p-2">
                {serviceItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className={`flex items-center gap-3 p-3 rounded-md transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-gray-800 text-red-400"
                          : "hover:bg-gray-800 text-white"
                      }`}
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div
                        className={`p-2 rounded-md ${
                          location.pathname === item.path
                            ? "bg-red-900/30 text-red-400"
                            : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        <Icon color="white" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{item.name}</h4>
                          {item.comingSoon && (
                            <span className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            to="/our-team"
            className={`transition-colors duration-300 relative ${
              location.pathname === "/our-team"
                ? "text-white"
                : "hover:text-red-400"
            }`}
          >
            Our Team
            {location.pathname === "/our-team" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </Link>
          <Link
            to="/faq"
            className={`transition-colors duration-300 relative ${
              location.pathname === "/faq" ? "text-white" : "hover:text-red-400"
            }`}
          >
            FAQ
            {location.pathname === "/faq" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`transition-colors duration-300 relative ${
              location.pathname === "/contact"
                ? "text-white"
                : "hover:text-red-400"
            }`}
          >
            Contact
            {location.pathname === "/contact" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"></span>
            )}
          </Link>
        </div>

        {/* Right Section - Only Login Button */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-red-600 text-white px-3 sm:px-5 py-2 rounded-md text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black border-t border-gray-800 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-4 text-white">
          <Link
            to="/free-scan"
            className={`transition-colors duration-300 py-2 border-b border-gray-800 ${
              location.pathname === "/free-scan"
                ? "text-white font-semibold"
                : "hover:text-red-400"
            }`}
            onClick={handleLinkClick}
          >
            Free Scan
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="border-b border-gray-800 pb-2">
            <button
              onClick={toggleMobileServicesDropdown}
              className={`flex items-center justify-between w-full py-2 transition-colors duration-300 ${
                location.pathname.startsWith("/pricing")
                  ? "text-white font-semibold"
                  : "hover:text-red-400"
              }`}
            >
              <span>Pricing</span>
              <div className="transition-transform duration-300">
                {mobileServicesDropdownOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesDropdownOpen ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              <div className="pl-4 flex flex-col gap-3">
                {serviceItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className={`flex items-center gap-3 py-2 px-2 rounded transition-colors duration-200 ${
                        location.pathname === item.path
                          ? "bg-gray-800 text-red-400 font-medium"
                          : "hover:bg-gray-800"
                      }`}
                      onClick={handleLinkClick}
                    >
                      <div className="p-1.5 bg-gray-800 rounded">
                        <Icon size={18} className="text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{item.name}</span>
                          {item.comingSoon && (
                            <span className="text-xs bg-red-900/30 text-red-400 px-2 py-0.5 rounded-full">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link
            to="/our-team"
            className={`transition-colors duration-300 py-2 border-b border-gray-800 ${
              location.pathname === "/our-team"
                ? "text-white font-semibold"
                : "hover:text-red-400"
            }`}
            onClick={handleLinkClick}
          >
            Our Team
          </Link>
          <Link
            to="/faq"
            className={`transition-colors duration-300 py-2 border-b border-gray-800 ${
              location.pathname === "/faq"
                ? "text-white font-semibold"
                : "hover:text-red-400"
            }`}
            onClick={handleLinkClick}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`transition-colors duration-300 py-2 border-b border-gray-800 ${
              location.pathname === "/contact"
                ? "text-white font-semibold"
                : "hover:text-red-400"
            }`}
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}