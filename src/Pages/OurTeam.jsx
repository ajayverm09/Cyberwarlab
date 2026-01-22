import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Award,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Headphones,
  Shield,
  Users,
  Zap,
  BookOpen,
  FileText,
  ShieldCheck,
  Target,
  ChevronDown,
  Menu,
  X,
  Briefcase,
  Clock,
  Calendar,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Certifications from "../Components/HomeCertifications";
import Img1 from "../assets/team1.jpeg"
import Img2 from "../assets/team2.jpg"
import Img3 from "../assets/team3.jpg"


const teamMembers = [
  {
    name: "Bartlomiej Wieczorek",
    role: "CEO ",
    desc: "Bartłomiej, an attorney, CEO, and cyber specialist, brings a unique blend of discipline, legal expertise, and technical knowledge to our cybersecurity team. His in-depth knowledge of defense strategies and cyber law strengthens our capabilities in securing and protecting digital infrastructure.",
    img: Img1,
    experience: "15+ years",
    education: "MS in Computer Science, CISSP Certification",
    specialties: [
      "Penetration Testing",
      "Security Architecture",
      "Risk Management",
    ],
    achievements: [
      "Founded CyberWarLab",
      "SEC500 Speaker",
      "Published Security Research",
    ],
  },
  {
    name: "Sanika Pokharkar",
    role: "Instructor",
    desc: "With over three years of experience in the cybersecurity field, Sanika specializes in Vulnerability Assessment & Penetration Testing (VAPT) and Open-Source Intelligence (OSINT). As a dedicated instructor, she brings practical knowledge and hands-on expertise to help others strengthen their cybersecurity skills.",
    img: Img2,
    experience: "12+ years",
    education: "MBA in Business Administration, OSCP Certification",
    specialties: [
      "Vulnerability Assessment",
      "Compliance Management",
      "Team Leadership",
    ],
    achievements: [
      "Led Security Teams",
      "ISO Implementation",
      "Growth Strategist",
    ],
  },
  {
    name: "Brett S., CISSP",
    role: "Lead Auditor & Consultant",
    desc: "I’m Mohamed Mounir instructor for this Red Teaming internship, where we focus on understanding how real-world attackers think, move, and succeed inside enterprise environments.My approach is hands-on and adversary-focused—we don’t just learn tools, we learn why they work, when to use them, and how defenders typically fail to detect them.",
    img: Img3,
    experience: "18+ years",
    education: "MS in Information Security, CISSP, CISA",
    specialties: [
      "Security Auditing",
      "Compliance Consulting",
      "Risk Assessment",
    ],
    achievements: [
      "Audited 500+ Companies",
      "Compliance Framework Author",
      "Security Standards Contributor",
    ],
  }
];

const companyStats = [
  {
    value: "250+",
    label: "Years Combined Experience",
    icon: <Award className="w-6 h-6" />,
  },
  {
    value: "1000+",
    label: "Organizations Secured",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    value: "24/7",
    label: "Security Monitoring",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    value: "99.9%",
    label: "Client Satisfaction",
    icon: <Users className="w-6 h-6" />,
  },
];

export default function OurTeam() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeMember, setActiveMember] = React.useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openMemberModal = (index) => {
    setActiveMember(index);
  };

  const closeMemberModal = () => {
    setActiveMember(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
      {/* Background decoration with red accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-700 rounded-full filter blur-2xl opacity-70"></div>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative mt-20 md:mt-0 py-2 md:py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Meet Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Expert Team
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                A dedicated team of cybersecurity professionals committed to
                protecting your digital assets with precision and expertise.
              </p>
            </div>

            {/* COMPANY STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {companyStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/60 backdrop-blur-sm border border-red-900/40 rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/20"
                >
                  <div className="text-red-500 mb-2">{stat.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-20 px-6 bg-zinc-900/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Cybersecurity <span className="text-red-600">Experts</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                Our experts combine technical excellence with real-world
                experience to deliver reliable cybersecurity solutions.
              </p>
            </div>

            {/* TEAM GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-zinc-900/60 border border-red-900/40 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1"
                  onClick={() => openMemberModal(index)}
                >
                  {/* Team Member Image with Overlay */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className={`w-full h-full object-cover ${index === 2 ? 'object-top' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6">
                    {/* Name and Role */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {member.name}
                      </h3>
                      <div className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full">
                        <span className="text-red-500 text-xs font-medium">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {member.desc}
                    </p>

                    {/* Experience and Education */}
                    <div className="flex flex-col gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            Experience
                          </p>
                          <p className="text-white font-semibold">
                            {member.experience} years
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-red-500" />
                        <div>
                          <p className="text-gray-400 text-sm mb-1">
                            Education
                          </p>
                          <p className="text-white font-semibold">
                            {member.education}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-red-600/20 hover:border-red-600/50 transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-gray-400 hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <Certifications />

        {/* CTA SECTION */}
        <section className="md:py-20 py-5 px-6 bg-gradient-to-br from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your{" "}
              <span className="text-red-600">Business?</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              Join forces with our expert team to protect your digital assets
              from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 transition-all duration-300 rounded-lg text-white font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/free-scan"
                className="px-8 py-4 bg-zinc-900/60 border border-red-900/40 hover:bg-zinc-900/80 hover:border-red-600/50 transition-all duration-300 rounded-lg text-white font-semibold flex items-center justify-center gap-3"
              >
                <Shield className="w-5 h-5" />
                Try Free Security Scan
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* TEAM MEMBER MODAL */}
      {activeMember !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeMemberModal}
        >
          <div 
            className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-red-900/40 shadow-2xl shadow-red-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Modal Header */}
              <div className="sticky top-0 bg-zinc-800 p-6 border-b border-red-900/40 z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {teamMembers[activeMember].name}
                  </h3>
                  <button
                    onClick={closeMemberModal}
                    className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors duration-300"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="md:w-1/3">
                    <img
                      src={teamMembers[activeMember].img}
                      alt={teamMembers[activeMember].name}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-red-500 mb-2">
                      {teamMembers[activeMember].role}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {teamMembers[activeMember].desc}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-red-500" />
                      Experience
                    </h5>
                    <p className="text-gray-300 text-lg">
                      {teamMembers[activeMember].experience} years in cybersecurity and related fields
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-red-500" />
                      Education
                    </h5>
                    <p className="text-gray-300 text-lg">
                      {teamMembers[activeMember].education}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-red-500" />
                      Get in Touch
                  </h5>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:contact@cyberwarlab.com"
                      className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5 text-red-500" />
                      <span className="text-white">contact@cyberwarlab.com</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-red-500" />
                      <span className="text-white">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-3 bg-zinc-800 rounded-lg hover:bg-zin-700 transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5 text-red-500" />
                      <span className="text-white">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}