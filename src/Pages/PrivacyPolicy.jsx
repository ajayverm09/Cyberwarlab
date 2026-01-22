import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Shield, Eye, Lock, Database, Globe, UserCheck, AlertCircle, FileText, Menu, X, Mail, Phone, MapPin, Calendar, CheckCircle } from "lucide-react";
import logo from "../assets/cyber-logo.png";

export default function PrivacyPolicy() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "information-we-collect", title: "Information We Collect", icon: Database },
    { id: "how-we-use-information", title: "How We Use Your Information", icon: Eye },
    { id: "information-sharing", title: "Information Sharing & Disclosure", icon: Globe },
    { id: "data-security", title: "Data Security Measures", icon: Lock },
    { id: "cookies-tracking", title: "Cookies & Tracking Technologies", icon: Shield },
    { id: "user-rights", title: "Your Rights & Choices", icon: UserCheck },
    { id: "third-party-services", title: "Third-Party Services", icon: Globe },
    { id: "international-transfers", title: "International Data Transfers", icon: Database },
    { id: "children-privacy", title: "Children's Privacy", icon: AlertCircle },
    { id: "policy-updates", title: "Policy Updates", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-10 py-12 md:py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-gradient-to-br from-red-500 to-red-600 rounded-lg">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          
          <div className="mt-8 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 max-w-2xl">
            <p className="text-gray-300 text-sm">
              At CyberWarLab, we're committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we handle your data.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 w-full justify-between"
            >
              <span className="text-sm font-medium">Table of Contents</span>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Table of Contents - Desktop & Mobile */}
          <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="sticky top-24 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-red-400 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section.id);
                      }}
                      className={`flex items-center gap-2 text-sm py-2 px-3 rounded-md transition-all duration-200 ${
                        isActive 
                          ? 'text-red-400 bg-gray-800 border-l-2 border-red-400' 
                          : 'text-gray-400 hover:text-red-400 hover:bg-gray-800'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-800 shadow-xl">
              {/* Introduction */}
              <section id="introduction" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Introduction
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    At CyberWarLab, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, share, and protect your information when you use our cybersecurity 
                    services, website, and applications.
                  </p>
                  <p className="leading-relaxed">
                    By using CyberWarLab's services, you agree to the collection and use of information in accordance with this policy. 
                    As a cybersecurity company, we hold ourselves to the highest standards of data protection and transparency.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-we-collect" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Name and contact information (email, phone number)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Billing information and payment details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Company information and job title</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Account credentials and authentication data</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Technical Information
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>IP address and geolocation data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Device information and browser details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>System logs and error reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Usage patterns and interaction data</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security-Related Data
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Scan results and vulnerability reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Security assessment data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Threat intelligence information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Incident response logs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="how-we-use-information" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Eye className="h-6 w-6" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">We use your information to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Provide and maintain our cybersecurity services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Process payments and manage subscriptions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Communicate with you about service updates and security alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Improve our services and develop new features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Conduct security research and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Comply with legal obligations and protect against fraud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Respond to your inquiries and provide customer support</span>
                  </li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section id="information-sharing" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Globe className="h-6 w-6" />
                  Information Sharing & Disclosure
                </h2>
                <p className="text-gray-300 mb-4">We may share your information only in the following circumstances:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">With your explicit consent</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">With trusted service providers who assist in operating our services</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">To comply with legal requirements, court orders, or government requests</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">To protect our rights, property, or safety, and that of our users</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 text-sm">In connection with a business merger, acquisition, or sale of assets</p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section id="data-security" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Lock className="h-6 w-6" />
                  Data Security Measures
                </h2>
                <p className="text-gray-300 mb-4">
                  As a cybersecurity company, we implement industry-leading security measures to protect your information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Encryption
                    </h3>
                    <p className="text-gray-300 text-sm">
                      All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      Access Control
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Strict access controls with multi-factor authentication for all systems.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Regular Audits
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Independent security audits and penetration testing conducted quarterly.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Compliance
                    </h3>
                    <p className="text-gray-300 text-sm">
                      SOC 2 Type II certified and GDPR compliant.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies-tracking" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Cookies & Tracking Technologies
                </h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Essential Cookies</h4>
                      <p className="text-gray-400 text-sm">Required for basic website functionality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Analytics Cookies</h4>
                      <p className="text-gray-400 text-sm">Help us understand how our services are used</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Security Cookies</h4>
                      <p className="text-gray-400 text-sm">Protect against fraud and ensure secure authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-400 text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Preference Cookies</h4>
                      <p className="text-gray-400 text-sm">Remember your settings and preferences</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              {/* User Rights */}
              <section id="user-rights" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <UserCheck className="h-6 w-6" />
                  Your Rights & Choices
                </h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Access and review your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Correct inaccurate or incomplete information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Opt-out of marketing communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Request a copy of your data (data portability)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Restrict processing of your information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Withdraw consent where processing is based on consent</span>
                  </li>
                </ul>
              </section>

              {/* Third Party Services */}
              <section id="third-party-services" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Globe className="h-6 w-6" />
                  Third-Party Services
                </h2>
                <p className="text-gray-300 mb-4">
                  We partner with carefully selected third-party service providers:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs font-bold">$</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Payment Processors</h4>
                        <p className="text-gray-400 text-sm">Stripe, PayPal for secure payment processing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs font-bold">☁</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Cloud Infrastructure</h4>
                        <p className="text-gray-400 text-sm">AWS, Google Cloud for hosting services</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs font-bold">📊</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Analytics</h4>
                        <p className="text-gray-400 text-sm">Google Analytics for usage insights</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs font-bold">✉</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Email Services</h4>
                        <p className="text-gray-400 text-sm">SendGrid for transactional emails</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-400 text-xs font-bold">💬</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Support Tools</h4>
                        <p className="text-gray-400 text-sm">Intercom for customer support</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* International Transfers */}
              <section id="international-transfers" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  International Data Transfers
                </h2>
                <p className="text-gray-300">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure adequate protection through standard contractual clauses and other legal mechanisms 
                  in accordance with applicable data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section id="children-privacy" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  Children's Privacy
                </h2>
                <p className="text-gray-300">
                  Our services are not intended for individuals under the age of 18. We do not knowingly 
                  collect personal information from children. If we become aware that we have collected 
                  information from a child, we will take steps to delete it immediately.
                </p>
              </section>

              {/* Policy Updates */}
              <section id="policy-updates" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Policy Updates
                </h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on our website and sending you an 
                  email notification. Your continued use of our services after such changes constitutes 
                  acceptance of the updated policy.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  Contact Us
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400 text-sm">privacy@cyberwarlab.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Address</h4>
                        <p className="text-gray-400 text-sm">
                          CyberWarLab Privacy Team, 123 Security Boulevard, 
                          Tech City, TC 12345, United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Phone</h4>
                        <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 z-40 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      )}
    </div>
  );
}