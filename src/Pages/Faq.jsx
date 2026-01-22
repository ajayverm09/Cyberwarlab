import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Mail,
  Shield,
  Lock,
  Globe,
  Database,
  AlertTriangle,
  User,
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Headphones,
  Award,
  CheckCircle,
  Zap,
  BookOpen,
  Phone,
  FileText,
  ShieldCheck,
} from "lucide-react";
import HowItWorks from "../Components/HowItWorks";

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [filteredFaqs, setFilteredFaqs] = useState([]);

  const faqs = [
    {
      question: "What is CyberWarLab?",
      answer:
        "CyberWarLab is a comprehensive cybersecurity platform that provides AI-powered penetration testing, dark web monitoring, and security assessments to protect businesses from cyber threats 24/7.",
      icon: <Shield className="w-5 h-5 text-white" />,
    },
    {
      question: "How does the free security scan work?",
      answer:
        "Our free security scan analyzes your website or email domain for common vulnerabilities, malware infections, and security misconfigurations. Simply enter your URL or email address, and we'll provide you with a detailed report of any identified issues.",
      icon: <Search className="w-5 h-5 text-white" />,
    },
    {
      question: "Is my data secure with CyberWarLab?",
      answer:
        "Absolutely. We use industry-standard encryption for all data transmission and storage. Our infrastructure follows GDPR, SOC 2, and ISO 27001 compliance standards to ensure your data remains protected at all times.",
      icon: <Lock className="w-5 h-5 text-white" />,
    },
    {
      question: "What types of security tests do you perform?",
      answer:
        "We offer comprehensive security testing including penetration testing, vulnerability scanning, dark web monitoring, phishing simulation, and compliance assessments for standards like PCI DSS, GDPR, and ISO 27001.",
      icon: <Database className="w-5 h-5 text-white" />,
    },
    {
      question: "How quickly will I receive my scan results?",
      answer:
        "Most scans are completed within minutes. For comprehensive enterprise scans, results are typically delivered within 24 hours. You'll receive an email notification as soon as your report is ready.",
      icon: <Clock className="w-5 h-5 text-white" />,
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, we provide 24/7 customer support through multiple channels including phone, email, and live chat. Our support team consists of cybersecurity experts who can assist with any questions or issues.",
      icon: <User className="w-5 h-5 text-white" />,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise accounts. All payments are processed securely through our PCI-compliant payment system.",
      icon: <Globe className="w-5 h-5 text-white" />,
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any cancellation fees. If you cancel, you'll continue to have access to our services until the end of your current billing period.",
      icon: <AlertTriangle className="w-5 h-5 text-white" />,
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including finance, healthcare, e-commerce, government agencies, educational institutions, and technology companies. Our solutions are tailored to meet specific compliance requirements of each sector.",
      icon: <FileText className="w-5 h-5 text-white" />,
    },
    {
      question: "Do you provide training for cybersecurity awareness?",
      answer:
        "Yes, we offer comprehensive cybersecurity training programs for employees including phishing awareness, secure coding practices, incident response procedures, and compliance education. Training can be conducted online or on-site.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
  ];

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  }, [searchTerm]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-600/5 to-red-800/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          {/* Header Section */}
          <div className="text-center md:mt-0 mt-10 mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-red-400 text-sm font-medium">
                Help Center
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                Questions
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Find answers to common questions about CyberWarLab's cybersecurity
              services.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10">
            {/* FAQ Items */}
            <div className="space-y-3 lg:space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-600/50 hover:shadow-xl hover:shadow-red-600/20 hover:-translate-y-1"
                  >
                    <button
                      className="w-full px-5 py-4 flex items-center justify-between text-left"
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600/20 to-red-800/10 border border-red-600/30 flex items-center justify-center flex-shrink-0">
                          {faq.icon}
                        </div>
                        <h3 className="text-base lg:text-lg font-semibold text-white pr-3">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-red-500 transition-transform duration-300 flex-shrink-0 ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-300 ${
                        activeIndex === index
                          ? "max-h-80 opacity-100 py-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-20 h-20 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">
                    No results found for "{searchTerm}"
                  </p>
                  <p className="text-gray-500">
                    Try searching with different keywords
                  </p>
                </div>
              )}
            </div>

            {/* Right Column - Image and Help Options */}
            <div className="flex flex-col h-full">
              {/* Animated Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-xl blur-xl"></div>
                <img
                  src="https://cybertested.com/assets/custom/custom_animated.gif"
                  alt="Cybersecurity Animation"
                  className="relative w-full h-auto rounded-xl shadow-xl border border-gray-800/50"
                />
              </div>

              {/* Help Options */}
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-red-500" />
                  Need More <span className="text-red-500">Help?</span>
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      Expert security professionals
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      24/7 support available
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      Personalized assistance
                    </p>
                  </div>

                  {/* New items */}
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      Advanced threat detection systems
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      Regular security audits & updates
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                      Compliance with industry standards
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a
                    href="/contact"
                    className="px-5 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300 rounded-lg text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-red-600/30 transform hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Support
                  </a>
                  <a
                    href="/free-scan"
                    className="px-5 py-3 bg-gray-900/60 border border-gray-700/50 hover:bg-gray-900/80 hover:border-red-600/50 transition-all duration-300 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Try Free Scan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl p-4 text-center group hover:border-red-600/50 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-2">Documentation</h4>
              <p className="text-gray-400 text-sm">Comprehensive guides</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl p-4 text-center group hover:border-red-600/50 transition-all duration-300">
              <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-2">Certifications</h4>
              <p className="text-gray-400 text-sm">Industry standards</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/30 rounded-xl p-4 text-center group hover:border-red-600/50 transition-all duration-300">
              <Zap className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h4 className="text-white font-semibold mb-2">API Access</h4>
              <p className="text-gray-400 text-sm">Developer tools</p>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks />
    </div>
  );
}
