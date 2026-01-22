import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, Shield, AlertCircle, FileText, CreditCard, UserCheck, Lock, Gavel, Mail, HelpCircle, Ban, CheckCircle, Menu, X, Calendar, MapPin, Phone } from "lucide-react";
import logo from "../assets/cyber-logo.png";

export default function TermsOfService() {
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
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle },
    { id: "services", title: "Services Description", icon: Shield },
    { id: "user-responsibilities", title: "User Responsibilities", icon: UserCheck },
    { id: "payment-terms", title: "Payment Terms", icon: CreditCard },
    { id: "subscription", title: "Subscription & Renewal", icon: FileText },
    { id: "intellectual-property", title: "Intellectual Property", icon: Lock },
    { id: "prohibited-uses", title: "Prohibited Uses", icon: Ban },
    { id: "data-protection", title: "Data Protection", icon: Shield },
    { id: "disclaimer", title: "Disclaimer of Warranties", icon: AlertCircle },
    { id: "limitation", title: "Limitation of Liability", icon: Gavel },
    { id: "termination", title: "Termination", icon: Ban },
    { id: "dispute-resolution", title: "Dispute Resolution", icon: Gavel },
    { id: "governing-law", title: "Governing Law", icon: FileText },
    { id: "contact", title: "Contact Information", icon: Mail },
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
              <Gavel className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          
          <div className="mt-8 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 max-w-2xl">
            <p className="text-gray-300 text-sm">
              Legal agreement governing your use of CyberWarLab's cybersecurity services.
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
            <div className="lg:sticky lg:top-24 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-800 shadow-xl">
              <h3 className="text-lg font-semibold mb-4 text-red-400 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Table of Contents
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-120px)] lg:max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
                {sections.map((section, index) => {
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
                      <span>{index + 1}. {section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-gray-800 shadow-xl">
              {/* Acceptance of Terms */}
              <section id="acceptance" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    By accessing and using CyberWarLab's services, you agree to be bound by these Terms of Service ("Terms"). 
                    If you do not agree to these Terms, you may not access or use our services.
                  </p>
                  <p className="leading-relaxed">
                    CyberWarLab reserves the right to modify these Terms at any time. Your continued use of our services 
                    after any such modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              {/* Services Description */}
              <section id="services" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  2. Services Description
                </h2>
                <p className="text-gray-300 mb-4">CyberWarLab provides the following cybersecurity services:</p>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Penetration Testing
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Comprehensive security assessments to identify vulnerabilities in your systems and applications.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Threat Intelligence
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Dark web monitoring and threat intelligence services to proactively identify potential security risks.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Security Monitoring
                    </h3>
                    <p className="text-gray-300 text-sm">
                      24/7 continuous monitoring of your digital assets for security threats and suspicious activities.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Responsibilities */}
              <section id="user-responsibilities" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <UserCheck className="h-6 w-6" />
                  3. User Responsibilities
                </h2>
                <p className="text-gray-300 mb-4">As a user of CyberWarLab services, you agree to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Provide accurate and complete information during registration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Immediately notify us of any unauthorized use of your account</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Comply with all applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Not interfere with or disrupt our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-gray-300">Provide necessary access and cooperation for service delivery</span>
                  </li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section id="payment-terms" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  4. Payment Terms
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Fees
                    </h3>
                    <p className="text-gray-300 text-sm">
                      All fees for CyberWarLab services are specified in our pricing page and are subject to change 
                      with 30 days' notice to existing subscribers.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Payment Method
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Payments are processed through secure third-party payment processors. You agree to provide 
                      current, complete, and accurate payment information.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Billing Cycle
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Services are billed on a monthly or annual basis as selected during subscription. 
                      All fees are non-refundable except as specified in our refund policy.
                    </p>
                  </div>
                </div>
              </section>

              {/* Subscription & Renewal */}
              <section id="subscription" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  5. Subscription & Renewal
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    Subscriptions automatically renew unless cancelled at least 48 hours before the end of the current billing period.
                  </p>
                  <p className="leading-relaxed">
                    You may cancel your subscription at any time through your account settings. Cancellation will take effect 
                    at the end of the current billing period, and you will not receive a refund for the unused portion.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Lock className="h-6 w-6" />
                  6. Intellectual Property
                </h2>
                <p className="text-gray-300 mb-4">
                  All content, software, and materials provided by CyberWarLab are protected by intellectual property laws.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">CyberWarLab retains all rights to its proprietary technology and methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Reports and deliverables provided to you are for your internal use only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">You may not reproduce, distribute, or create derivative works without explicit permission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Any feedback or suggestions you provide may be used to improve our services</span>
                  </li>
                </ul>
              </section>

              {/* Prohibited Uses */}
              <section id="prohibited-uses" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Ban className="h-6 w-6" />
                  7. Prohibited Uses
                </h2>
                <p className="text-gray-300 mb-4">You are strictly prohibited from:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Using our services for illegal activities or violating applicable laws</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Attempting to gain unauthorized access to our systems or third-party systems</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Sharing your account credentials with unauthorized individuals</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Reverse engineering or attempting to extract our proprietary algorithms</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-red-400" />
                    </div>
                    <p className="text-gray-300 text-sm">Using our services to compete directly with CyberWarLab</p>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Shield className="h-6 w-6" />
                  8. Data Protection
                </h2>
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Data Encryption
                    </h3>
                    <p className="text-gray-300 text-sm">
                      All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      Access Controls
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Strict access controls with multi-factor authentication for all personnel.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Compliance
                    </h3>
                    <p className="text-gray-300 text-sm">
                      GDPR, CCPA, and SOC 2 Type II compliant operations.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-red-500/30 transition-all duration-300">
                    <h3 className="font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Data Retention
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Data is retained only as necessary for service delivery and legal compliance.
                    </p>
                  </div>
                </div>
              </section>

              {/* Disclaimer */}
              <section id="disclaimer" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <AlertCircle className="h-6 w-6" />
                  9. Disclaimer of Warranties
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    CyberWarLab services are provided "as is" without warranties of any kind, either express or implied.
                  </p>
                  <p className="leading-relaxed">
                    We do not guarantee that our services will be uninterrupted, error-free, or completely secure. 
                    While we strive to provide accurate and comprehensive security assessments, no security system is impenetrable.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section id="limitation" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Gavel className="h-6 w-6" />
                  10. Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, CyberWarLab's total liability for any claims arising from 
                    your use of our services shall not exceed the amount you paid for the services in the preceding 12 months.
                  </p>
                  <p className="leading-relaxed">
                    CyberWarLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of profits, data, or business opportunities.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Ban className="h-6 w-6" />
                  11. Termination
                </h2>
                <p className="text-gray-300 mb-4">CyberWarLab may terminate or suspend your account immediately:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300">If you violate these Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300">If you engage in fraudulent or illegal activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300">If you misuse our services or endanger other users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Ban className="h-4 w-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300">If required by law or legal authorities</span>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Upon termination, your right to use the services ceases immediately, and we may delete your account 
                  and data in accordance with our data retention policies.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section id="dispute-resolution" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Gavel className="h-6 w-6" />
                  12. Dispute Resolution
                </h2>
                <p className="text-gray-300 mb-4">
                  Any disputes arising from these Terms or your use of our services shall be resolved as follows:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Good Faith Negotiation</h4>
                      <p className="text-gray-400 text-sm">Negotiation between parties to resolve the dispute</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Mediation</h4>
                      <p className="text-gray-400 text-sm">Mediation through a mutually agreed-upon mediator</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Binding Arbitration</h4>
                      <p className="text-gray-400 text-sm">Binding arbitration under the rules of the American Arbitration Association</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">
                  Arbitration shall be conducted in English and the decision shall be final and binding.
                </p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  13. Governing Law
                </h2>
                <p className="text-gray-300">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  United States, without regard to its conflict of law principles.
                </p>
              </section>

              {/* Contact Information */}
              <section id="contact" className="mb-10 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <Mail className="h-6 w-6" />
                  14. Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Email</h4>
                        <p className="text-gray-400 text-sm">legal@cyberwarlab.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-white">Address</h4>
                        <p className="text-gray-400 text-sm">
                          CyberWarLab Legal Department, 123 Security Boulevard, 
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