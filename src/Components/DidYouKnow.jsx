import React, { useState, useEffect, useRef } from "react";

export default function DidYouKnow() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { value: 93, text: "of attackers can breach an organization's network" },
    { value: 72, text: "of large companies report breaches or attacks" },
    { value: 75, text: "of businesses lack a formal response plan" },
    {
      value: 66,
      text: "of businesses attacked by hackers were not able to recover",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          let allComplete = true;

          for (let i = 0; i < newCounters.length; i++) {
            if (newCounters[i] < stats[i].value) {
              newCounters[i] = Math.min(newCounters[i] + 1, stats[i].value);
              allComplete = false;
            }
          }

          if (allComplete) {
            clearInterval(interval);
          }

          return newCounters;
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="bg-black py-12 relative overflow-hidden">
      {/* Background decoration with red accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-700 rounded-full filter blur-3xl"></div>
      </div>

      {/* MAIN WRAPPER – same spacing as other components */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Did you <span className="text-red-600">know?</span>
            </h2>

            <p className="mt-6 text-gray-300 max-w-xl leading-relaxed text-lg">
              The average cost of data breaches for companies in 2022 is
              <span className="text-red-500 font-semibold"> $150 Million</span>.
              Over 100,000 folders are open to everyone in
              <span className="text-red-500 font-semibold">
                {" "}
                88% of companies
              </span>{" "}
              with over 1 million folders.
            </p>

            <p className="mt-4 text-gray-400 max-w-xl leading-relaxed text-lg">
              <span className="text-red-500 font-semibold">$10.5 Trillion</span>{" "}
              global costs of cybercrime are predicted by 2025. Around
              <span className="text-red-500 font-semibold">
                {" "}
                14 Billion
              </span>{" "}
              data records were lost or stolen up until 2019.
            </p>

            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
          </div>

          {/* RIGHT STATS CARD */}
          <div
            ref={statsRef}
            className="bg-zinc-900/80 border border-red-900/40 rounded-2xl shadow-2xl p-8 md:p-12 hover:shadow-red-900/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Animated Counter Ring - Responsive sizing */}
                  <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-black/50 border border-red-700/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div
                      className="absolute inset-0 rounded-full border-4 border-red-600/20 border-t-red-600 transition-all duration-1000"
                      style={{
                        transform: isVisible
                          ? `rotate(${counters[index] * 3.6}deg)`
                          : "rotate(0deg)",
                        transition: "transform 2s ease-out",
                      }}
                    />
                    <span className="text-xl md:text-3xl font-bold text-white">
                      {counters[index]}%
                    </span>
                  </div>

                  <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                    <span className="text-red-500 font-semibold">
                      {counters[index]}%
                    </span>{" "}
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
