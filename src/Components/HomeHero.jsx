import { useState, useEffect } from "react";
import heroImage1 from "../assets/file_00000000ab7472089d3a2d2a71670733 1.png";
import heroImage2 from "../assets/1.png";

export default function HeroSection() {
  const heroImages = [heroImage1, heroImage2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:ml-12 lg:mt-20">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            AI-Driven <span className="text-red-500">Cyber Defense</span>
            <br /> & <span className="text-red-600">Pentesting</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            We provide continuous AI-based security and dark web monitoring with
            certified{" "}
            <span className="text-red-400 font-semibold">PenTesting</span>{" "}
            reports, ready for compliance: SOC 2 Type II, ISO 27001, NIS2, etc.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition">
              ORDER NOW
            </button>

            <button className="bg-black border border-red-600 hover:bg-red-600 text-red-500 hover:text-white font-semibold px-7 py-3 rounded-xl transition">
              FREE SECURITY CHECK
            </button>
          </div>

          {/* CERTIFICATION BADGE */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-700 bg-black/50 text-gray-200">
            <span className="text-red-500 text-lg">★</span>
            Certified Reports for SOC 2, PCI DSS, ISO 27001, NIS2, etc.
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex relative justify-center items-center">
          {/* Red glow background - REMOVED ALL ANIMATIONS */}
          {/* All animated red lining effects permanently disabled */}

          {/* Hero Image - Responsive */}
          <div className="relative w-full max-w-[100%] sm:max-w-[100%] md:max-w-[100%] lg:max-w-[1400px] xl:max-w-[1600px] 2xl:max-w-[1800px] aspect-[4/5] sm:aspect-[1/1] md:aspect-square lg:aspect-[4/3] xl:aspect-[16/12] mt-2 md:mt-8 lg:mt-16 md:mb-0 mb-2 flex items-center justify-center overflow-hidden">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Cyber Security"
                className={`absolute inset-0 w-full h-full object-contain drop-shadow-2xl transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ filter: 'contrast(1.1) saturate(1.2) brightness(1.05)' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles - ALL REMOVED */}
      <style>{`
        /* Perspective utility */
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Radial gradient utility */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}
