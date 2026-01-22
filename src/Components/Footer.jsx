import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/cyber-logo.png";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", { hour12: false, timeZoneName: "short" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Free Scan", path: "/free-scan" },
    { name: "Our Team", path: "/our-team" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Pen Testing", path: "/pricing/pentesting" },
    { name: "Threat Intelligence & Dark Web", path: "/pricing/threat-intelligence" },
    { name: "Cyber Security Monitoring", path: "/pricing/cyber-monitoring" },
    { name: "Cyber Education", path: "/pricing/cyber-education" },
    { name: "Phishing Simulation", path: "/pricing/phishing-attacks" },
    { name: "Compliance SOC2 / ISO 27001", path: "/compliance" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Security", path: "/security" },
  ];

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.com",
      icon: "fab fa-discord",
      hoverColor: "hover:bg-[#5865F2]",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "fab fa-youtube",
      hoverColor: "hover:bg-[#FF0000]",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "fab fa-twitter",
      hoverColor: "hover:bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "fab fa-linkedin",
      hoverColor: "hover:bg-[#0A66C2]",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: "fab fa-whatsapp",
      hoverColor: "hover:bg-[#25D366]",
    },
  ];

  return (
    <>
      <footer className="bg-black border-t border-red-600/20 relative overflow-hidden">
        {/* Red glow background effect - REMOVED ALL RED GLOW ANIMATIONS */}
        {/* <div className="absolute inset-0 bg-gradient-radial from-red-600/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-900/10 blur-3xl rounded-full"></div> */}

        {/* Background Effects - REMOVED ALL FLOATING RED DOTS */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute w-1 h-1 bg-red-500/20 rounded-full"></div>
        </div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={logo}
                    alt="CyberWarLab Logo"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CyberWarLab</h3>
                  <p className="text-sm text-red-400 font-mono">Elite Operations</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading cybersecurity training and operations platform, empowering
                the next generation of cyber defenders and ethical hackers.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]`}
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-gray-400 group-hover:text-white transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-red-900/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">1000+</div>
                  <div className="text-xs text-gray-500 uppercase">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">99.99%</div>
                  <div className="text-xs text-gray-500 uppercase">Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">24/7</div>
                  <div className="text-xs text-gray-500 uppercase">Support</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-link text-red-500 mr-2"></i>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <i className="fas fa-chevron-right text-red-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-cogs text-red-500 mr-2"></i>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <i className="fas fa-chevron-right text-blue-500 mr-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-address-book text-red-500 mr-2"></i>
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <i className="fas fa-envelope text-red-500"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Email</div>
                    <a
                      href="mailto:support@cyberwarlab.com"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      support@cyberwarlab.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                    <i className="fas fa-phone text-green-500"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Phone</div>
                    <a
                      href="tel:+48663201910"
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      +48 663 201 910
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Location</div>
                    <div className="text-gray-300">
                      <div>180 Krakowska Street, Suite 104</div>
                      <div>52-015 Wrocław, POLAND</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <i className="fas fa-clock text-purple-500"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase">Support</div>
                    <span className="text-gray-300">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-red-900/30 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} CyberWarLab. All rights reserved.
                </p>

                {/* Real-time status */}
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400">All Systems Operational</span>
                </div>

                {/* Current time */}
                <div className="flex items-center space-x-2 text-sm">
                  <i className="fas fa-clock text-gray-500"></i>
                  <span className="text-gray-400">{currentTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {bottomLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced Footer Styles */}
      <style>{`
        /* Radial gradient utility */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        /* Cyber grid for footer (disabled - removed grid animation) */
        /* .cyber-grid-footer {
          background-image: linear-gradient(rgba(255, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: grid-move-footer 25s linear infinite;
        }

        @keyframes grid-move-footer {
          0% { background-position: 0 0; }
          100% { background-position: 30px 30px; }
        } */

        /* Floating animation (disabled - removed float animation) */
        /* @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        } */

        /* Fade in up animation (disabled - removed animation) */
        /* @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        } */

        /* Footer link hover effects */
        footer a:hover {
          transform: translateX(2px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          /* .cyber-grid-footer {
            background-size: 20px 20px;
          } */
        }
      `}</style>
    </>
  );
}
