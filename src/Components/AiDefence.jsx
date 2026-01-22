import React from "react";
import { Shield, AlertTriangle, FileCheck } from "lucide-react";

export default function AIDefenseHero() {
  return (
    <section className="bg-black text-white md:py-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-red-500 to-red-900 bg-clip-text text-transparent">
            Stop Hackers Before They Strike: AI-Powered Defense
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Every second your network is exposed, cybercriminals probe for
            weaknesses. One exploited vulnerability can cause massive losses,
            compliance violations, and reputational damage.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://cybertested.com/assets/custom/custom_animated.gif"
              alt="AI Cyber Defense"
              className="w-full max-w-lg drop-shadow-[0_0_40px_rgba(255,0,0,0.35)]"
            />
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-[#0b0b0b] border border-red-900/40 rounded-xl p-6 flex gap-5 hover:border-red-600 transition">
              <Shield className="text-red-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-red-400">
                  Dark Web Monitoring + AI Threat Detection
                </h3>
                <p className="text-gray-400 mt-2">
                  AI scans your systems for vulnerabilities while monitoring
                  dark web forums, marketplaces, and breach databases for
                  stolen credentials and zero-day exploits.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b0b0b] border border-red-900/40 rounded-xl p-6 flex gap-5 hover:border-red-600 transition">
              <AlertTriangle className="text-red-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-red-400">
                  Smart Risk Prioritization That Actually Works
                </h3>
                <p className="text-gray-400 mt-2">
                  Our AI ranks vulnerabilities by real exploitability and
                  business impact—so you fix what hackers target first.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b0b0b] border border-red-900/40 rounded-xl p-6 flex gap-5 hover:border-red-600 transition">
              <FileCheck className="text-red-500 w-10 h-10" />
              <div>
                <h3 className="text-xl font-semibold text-red-400">
                  Effortless Compliance & Audit-Ready Reports
                </h3>
                <p className="text-gray-400 mt-2">
                  Meet PCI-DSS, HIPAA, SOC 2 and more. Automated reports make
                  audits ready in minutes—not months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
