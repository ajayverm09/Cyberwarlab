import React from "react";

const steps = [
  {
    id: 1,
    title: "Add your assets",
    description:
      "Our solution will scan your website 24/7 and generate security and compliance reports to identify cyber threats.",
    image: "https://cybertested.com/assets/img/icons/h1.png",
  },
  {
    id: 2,
    title: "Download the security report",
    description:
      "Our solution will scan your website 24/7 and generate security and compliance reports to identify cyber threats.",
    image: "https://cybertested.com/assets/img/icons/h2.png",
  },
  {
    id: 3,
    title: "Security Remediation",
    description:
      "The vulnerability remediation process is a workflow that fixes or neutralizes detected weaknesses.",
    image: "https://cybertested.com/assets/img/icons/h3.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black py-12 relative overflow-hidden">
      {/* Background decoration with red accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-medium text-red-400 bg-red-900/20 border border-red-800/30 rounded-full">
            Steps to ensure high security standards
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-red-600">Works</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Find weaknesses in your most exposed systems and satisfy compliance
            needs. Choose the right cyber security solution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative bg-zinc-900/80 border border-red-900/40 rounded-2xl p-8 text-center
                         shadow-lg hover:shadow-red-900/40 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center text-white font-bold">
                {step.id}
              </div>

              {/* Icon - Made larger */}
              <div className="w-32 h-32 rounded-xl bg-black border border-red-700 flex items-center justify-center mx-auto mb-6">
                <img src={step.image} alt={step.title} className="w-24 h-24" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
