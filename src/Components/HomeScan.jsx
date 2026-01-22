import React from "react";
import { Link } from "react-router-dom";
import freeScanImage1 from "../assets/free-scan-image.png";
import glowImage from "../assets/glow.png";

const WebScanComponent = () => {
  return (
    <section className="bg-black text-white py-5 px-4 relative overflow-visible">
      {/* Background decoration with red accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left Illustration - Image with hover effect (hidden on small screens) */}
        <div className="hidden lg:flex flex-1 justify-center group">
          <div className="relative w-full max-w-3xl h-[450px]">
            {/* Default image - always visible */}
            <img
              src={freeScanImage1}
              alt="Web Security Scan"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* Glow image - shows on hover */}
            <img
              src={glowImage}
              alt="Web Security Scan Glow"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
            {/* Red glow effect behind the image */}
            <div className="absolute inset-0 bg-red-600/10 rounded-full blur-xl transform scale-105 -z-10"></div>
          </div>
        </div>

        {/* Scan Form Container */}
        <div className="flex-1 relative p-4 max-w-xl w-full">
          {/* Form Container */}
          <div className="bg-zinc-900 border-2 border-red-600 rounded-2xl shadow-2xl p-8 w-full relative overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent">
                100% Free Web Scan
              </span>
            </h2>

            <p className="text-white text-center mb-8">
              Run an instant security scan and detect vulnerabilities in your
              website or email domain.
            </p>

            <form className="space-y-5">
              {/* Input */}
              <div>
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  Website URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com"
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/50 transition-all duration-300"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex gap-3 items-start">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-red-600"
                  required
                />
                <p className="text-sm text-white">
                  I confirm that I am authorized to scan this domain/email and
                  understand unauthorized scanning may violate applicable laws.
                </p>
              </div>

              {/* Button */}
              <Link to="/free-scan">
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition duration-300 shadow-lg hover:shadow-red-600/30 transform hover:scale-[1.02] relative overflow-hidden group text-white"
              >
                <span className="relative z-10">SCAN NOW</span>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebScanComponent;
