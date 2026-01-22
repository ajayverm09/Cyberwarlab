import { Link } from "react-router-dom";

export default function AllInOneSecurity() {
  const features = [
    {
      title: "Pen Testing",
      desc: "AI-Based automated pen testing solution for your applications. Find issues in advance instead of users complaining about them.",
      icon: "https://cybertested.com/assets/img/icons/s1.png",
      coming: false,
      path: "/pricing/pentesting",
    },
    {
      title: "Threat Intell & Dark Web",
      desc: "Track leaked credentials, data breaches, threat actor discussions, and exploit marketplaces to stay ahead of incidents.",
      icon: "https://cybertested.com/assets/img/icons/s2.png",
      coming: false,
      path: "/pricing/threat-intelligence",
    },
    {
      title: "Cyber Security Monitoring",
      desc: "CyberWarLab scanner checks malware, viruses, blacklisting status, outdated software, and malicious code.",
      icon: "https://cybertested.com/assets/img/icons/s3.png",
      coming: true,
      path: "/pricing/cyber-monitoring",
    },
    {
      title: "Cyber Education",
      desc: "Provide comprehensive training on threat awareness, secure practices, and incident response across your organization.",
      icon: "https://cybertested.com/assets/img/icons/s4.png",
      coming: true,
      path: "/pricing/education",
    },
    {
      title: "Phishing Simulation",
      desc: "Identify vulnerable users, measure susceptibility to attacks, and reduce email-based security risks.",
      icon: "https://cybertested.com/assets/img/icons/s5.png",
      coming: true,
      path: "/pricing/phishing-attacks",
    },
    {
      title: "Compliance SOC2 / ISO 27001",
      desc: "Establish strong controls, maintain audit-ready documentation, and meet SOC2 & ISO 27001 standards.",
      icon: "https://cybertested.com/assets/img/icons/s6.png",
      coming: true,
      path: "/compliance",
    },
  ];

  return (
    <section className="bg-black md:py-12 py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white">
            All-In-One <span className="text-red-500">Security</span> For Your
            Business
          </h2>
          <p className="mt-6 text-white leading-relaxed">
            Our automated software continuously scans your websites, emails, and
            servers for vulnerabilities, malware, and compliance risks—helping
            you stay secure, compliant, and worry-free.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const CardWrapper = item.coming ? "div" : Link;

            return (
              <CardWrapper
                key={index}
                {...(!item.coming && { to: item.path })}
                className={`group ${
                  item.coming ? "cursor-not-allowed opacity-80" : ""
                }`}
              >
                <div
                  className="relative bg-zinc-900 border border-red-900/40 rounded-2xl p-8 
                                shadow-lg transition-all h-full
                                hover:shadow-red-900/30 hover:-translate-y-1"
                >
                  {/* COMING SOON */}
                  {item.coming && (
                    <span
                      className="absolute top-4 right-4 bg-red-600 text-white 
                                     text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      Coming Soon
                    </span>
                  )}

                  {/* ICON + TITLE */}
                  <div className="flex flex-row md:flex-col items-start md:items-center gap-4 mb-4">
                    <div
                      className="w-10 h-10 md:w-16 md:h-16 rounded-xl bg-black 
                                    border border-red-700 flex items-center justify-center"
                    >
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-6 h-6 md:w-10 md:h-10"
                      />
                    </div>

                    <h3
                      className="text-lg md:text-xl font-bold text-white 
                                   group-hover:text-red-500 transition"
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
