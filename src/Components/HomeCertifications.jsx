export default function Certifications() {
  const certifications = [
    {
      title: "Offensive Security Certified Professional",
      desc: "Advanced penetration testing certification",
      img: "https://cybertested.com/assets/img/certifications/oscp.webp",
    },
    {
      title: "CISSP",
      desc: "Certified Information Systems Security Professional – Industry gold standard",
      img: "https://cybertested.com/assets/img/certifications/cissp.png",
    },
    {
      title: "eWPT",
      desc: "Expert Web Application Penetration Tester. XSS, SQLi, RCE, etc.",
      img: "https://cybertested.com/assets/img/certifications/ewpt.png",
    },
    {
      title: "CISM",
      desc: "Certified Information Security Manager – Information security management",
      img: "https://cybertested.com/assets/img/certifications/cism.png",
    },
    {
      title: "ISO 27001 Lead Auditor",
      desc: "Information security management systems",
      img: "https://cybertested.com/assets/img/certifications/27001_lead_auditor.png",
    },
    {
      title: "Security+",
      desc: "Security Operations Center · CompTIA · Security Information",
      img: "https://cybertested.com/assets/img/certifications/comptia_security_plus.webp",
    },
    {
      title: "Certified AI/ML Pentester",
      desc: "Certified AI Machine Learning Professional by SecOps Group",
      img: "https://cybertested.com/assets/img/certifications/cert-stamp-aiml-pro.png",
    },
    {
      title: "Advanced OPSEC",
      desc: "Advanced OPSEC tactics and defence bypass strategies",
      img: "https://cybertested.com/assets/img/certifications/read_team_ops_2.png",
    },
  ];

  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Professional <span className="text-red-600">Certifications</span> &
            Accreditations
          </h2>
          <p className="mt-6 text-white text-lg">
            Our team maintains the highest industry standards through continuous
            certification and training
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-red-900/40 rounded-2xl p-8 text-center
                         shadow-lg hover:shadow-red-900/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 object-contain transition"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-white leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
