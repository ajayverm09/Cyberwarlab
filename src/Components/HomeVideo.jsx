import { useState, useEffect } from "react";
import CyberImg from "../assets/Cyber.jpg";

export default function WhatIsCyberWarLab() {
  const [open, setOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <section className="bg-black py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* VIDEO THUMB */}
          <div
            onClick={() => setOpen(true)}
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl group transform transition-all duration-300 hover:scale-105"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpen(true);
              }
            }}
            aria-label="Play video about CyberWarLab"
          >
            <div className="aspect-video w-full bg-gray-900 relative">
              <img
                src={CyberImg}
                alt="CyberWarLab video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg group-hover:scale-105 transition-all duration-300">
                <p className="text-red-600 text-xl font-bold">
                  <span className="text-cyan-400">Cyber</span>WarLab
                </p>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold text-white">
              What is <span className="text-red-600">CyberWarLab</span>?
            </h2>

            <p className="mt-6 text-white max-w-lg text-lg leading-relaxed">
              Watch our demo video to discover how CyberWarLab's AI-driven
              platform protects your business from cyber threats 24/7.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full shadow-md transition-all duration-300 font-semibold"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Video
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-200"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* YouTube Embed */}
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/-oGKVpNNH_I?autoplay=1&rel=0"
                title="CyberWarLab Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
