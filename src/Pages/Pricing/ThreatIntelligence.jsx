import React, { useState } from "react";
import { Check, Minus, ChevronDown, ChevronUp } from "lucide-react";
import HowItWorks from "../../Components/HowItWorks";

export default function ThreatIntelligence() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const features = [
    {
      name: "Monitored Assets",
      start: "1 email + 1 domain",
      essential: "1",
      business: "3",
      enterprise: "5",
    },
    {
      name: "Sources Monitored",
      start: "Basic Breach Databases",
      essential: "Stealer Malware, Combo-Lists, Breach Databases",
      business: "+ Marketplaces, Forums, Telegram",
      enterprise: "+ All Sources",
    },
    {
      name: "Monitoring Interval",
      start: "Weekly",
      essential: "Weekly",
      business: "Daily",
      enterprise: "Hourly",
    },
    {
      name: "Breach Notifications",
      start: "Basic alerts only",
      essential: "Weekly",
      business: "Daily",
      enterprise: "Daily",
    },
    {
      name: "Threat Intelligence Report",
      start: "N/A",
      essential: "Yearly",
      business: "N/A",
      enterprise: "Monthly",
    },
    {
      name: "Stealer Malware",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Combo-Lists",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Breach Databases",
      start: true,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Marketplace and Forums",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Telegram",
      start: false,
      essential: false,
      business: true,
      enterprise: true,
    },
    {
      name: "Lookalike Domains",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Phishing Domains",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Employee Data Breach",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Remediation Suggestions",
      start: false,
      essential: true,
      business: true,
      enterprise: true,
    },
    {
      name: "Security Standards",
      start: "OWASP, SANS, PCI-DSS, ISO27001, NIS2, SOC2",
      essential: "OWASP, SANS, PCI-DSS, ISO27001, NIS2, SOC2",
      business: "OWASP, SANS, PCI-DSS, ISO27001, NIS2, SOC2",
      enterprise: "OWASP, SANS, PCI-DSS, ISO27001, NIS2, SOC2",
    },
  ];

  // Show only the first 8 rows when "show less" is active
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 8);

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  const Cell = ({ value }) => {
    if (value === true)
      return <Check className="mx-auto text-red-500" size={20} />;
    if (value === false)
      return <Minus className="mx-auto text-gray-600" size={20} />;
    return <span className="text-sm text-gray-300">{value}</span>;
  };

  return (
    <div>
      <section className="bg-black text-white">
        {/* Pricing Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">
            Dark Web Monitoring &{" "}
            <span className="text-red-500">Threat Intelligence</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            Monitor the dark web for breached credentials, stolen data, and
            threats targeting your organization.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Start */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-500 transition">
              <h3 className="text-2xl font-semibold mb-2">Start</h3>
              <p className="text-4xl font-bold text-red-500 mb-1">€20</p>
              <span className="text-gray-400 text-sm">/ month</span>

              <p className="text-gray-400 mt-6 mb-6">
                Try our dark web monitoring with limited access
              </p>

              <ul className="space-y-3 text-left text-gray-300">
                <li>✔ Personal email monitor</li>
                <li>✔ 1 domain monitor</li>
                <li>✔ Basic breach alerts</li>
                <li>✔ Breach data hidden</li>
              </ul>

              <button className="mt-8 w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-600 hover:text-white transition">
                Contact Us
              </button>
            </div>

            {/* Essential – Most Popular */}
            <div className="relative bg-zinc-900 border-2 border-red-600 rounded-2xl p-8 scale-105">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm px-4 py-1 rounded-full">
                Most Popular
              </span>

              <h3 className="text-2xl font-semibold mb-2">Essential</h3>
              <p className="text-4xl font-bold text-red-500 mb-1">€390</p>
              <span className="text-gray-400 text-sm">/ month</span>

              <p className="text-gray-400 mt-6 mb-6">
                For small businesses starting their dark web monitoring
              </p>

              <ul className="space-y-3 text-left text-gray-300">
                <li>✔ 1 monitored asset</li>
                <li>✔ Weekly monitoring</li>
                <li>✔ Yearly threat intelligence report</li>
                <li>✔ Weekly breach notifications</li>
              </ul>

              <button className="mt-8 w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition">
                Contact Us
              </button>
            </div>

            {/* Business */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-red-500 transition">
              <h3 className="text-2xl font-semibold mb-2">Business</h3>
              <p className="text-4xl font-bold text-red-500 mb-1">€900</p>
              <span className="text-gray-400 text-sm">/ month</span>

              <p className="text-gray-400 mt-6 mb-6">
                For growing organizations needing comprehensive monitoring
              </p>

              <ul className="space-y-3 text-left text-gray-300">
                <li>✔ 3 monitored assets</li>
                <li>✔ Daily monitoring</li>
                <li>✔ Dedicated account manager</li>
                <li>✔ Daily breach notifications</li>
              </ul>

              <button className="mt-8 w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-600 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Custom CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need a{" "}
              <span className="text-red-500">Custom Security Solution?</span>
            </h3>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              For organizations with advanced security needs, compliance
              requirements, and enterprise-scale infrastructure beyond our
              standard packages.
            </p>

            <button className="inline-flex items-center gap-2 border border-red-500 text-red-500 px-8 py-3 rounded-xl hover:bg-red-600 hover:text-white transition">
              📞 Contact us for a consultation
            </button>
          </div>
        </div>

        {/* Feature Comparison Section */}
        <div className="bg-zinc-950 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="w-full overflow-x-auto bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-red-500 mb-6">
                Detailed Feature Comparison
              </h2>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="p-4 text-left rounded-tl-xl">Feature</th>
                    <th className="p-4">Start</th>
                    <th className="p-4">Essential</th>
                    <th className="p-4">Business</th>
                    <th className="p-4 rounded-tr-xl">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedFeatures.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900"}
                    >
                      <td className="p-4 font-medium text-gray-300">
                        {row.name}
                      </td>
                      <td className="p-4 text-center">
                        <Cell value={row.start} />
                      </td>
                      <td className="p-4 text-center">
                        <Cell value={row.essential} />
                      </td>
                      <td className="p-4 text-center">
                        <Cell value={row.business} />
                      </td>
                      <td className="p-4 text-center">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Toggle Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={toggleFeatures}
                  className="px-6 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition flex items-center gap-2"
                >
                  {showAllFeatures ? (
                    <>
                      Show Less
                      <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      Show More
                      <ChevronDown size={18} />
                    </>
                  )}
                </button>
              </div>

              {/* Remaining Features Counter */}
              {!showAllFeatures && (
                <div className="text-center mt-4">
                  <p className="text-gray-500 text-sm">
                    {/* Showing {displayedFeatures.length} of {features.length} features */}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
    </div>
  );
}
