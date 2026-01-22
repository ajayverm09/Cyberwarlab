import { ShieldCheck, Bug, MailCheck, EyeOff, AlertTriangle, ShieldAlert, Network, Star, Code, Check, ArrowRight, Zap, Lock, Globe, Shield, Search, X, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Freescan() {
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  const handleScan = () => {
    if (!email || !authorized) return;

    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-blue-900/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">FREE SECURITY SCAN</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            Enterprise-Grade Security Scanner
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Discover vulnerabilities before hackers do. Our advanced scanner analyzes your digital assets with the same technology used by Fortune 500 companies.
          </p>

          {/* SCAN FORM */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter domain (example.com) or email (user@example.com)"
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-red-600 transition text-white placeholder-gray-500"
                />
              </div>
              <button
                onClick={handleScan}
                disabled={!email || !authorized || isScanning}
                className={`px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  isScanning
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : email && authorized
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20'
                    : 'bg-zinc-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isScanning ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    Scanning...
                  </>
                ) : (
                  <>
                    Scan Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            
            <label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                checked={authorized}
                onChange={(e) => setAuthorized(e.target.checked)}
                className="mt-1 w-4 h-4 rounded bg-zinc-800 border-zinc-600 text-red-600 focus:ring-red-600 focus:ring-offset-0"
              />
              <span>I confirm I am authorized to scan this domain/email.</span>
            </label>
          </div>

          {/* SCAN RESULT */}
          {scanComplete && (
            <div className="mt-8 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 max-w-4xl mx-auto">
              {/* Result Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Security Scan Complete</h3>
                    <p className="text-gray-400">Target: {email}</p>
                  </div>
                </div>
                <button
                  onClick={() => setScanComplete(false)}
                  className="p-2 hover:bg-zinc-800 rounded-lg transition"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Overall Score */}
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-600/30 rounded-xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 mb-1">Overall Security Score</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-green-500">85</span>
                      <span className="text-xl text-gray-400">/100</span>
                    </div>
                    <p className="text-green-500 mt-2 font-medium">Good Security Posture</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Issues Found</p>
                    <p className="text-3xl font-bold text-yellow-500">3</p>
                  </div>
                </div>
              </div>

              {/* Scan Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* SSL Certificate - PASS */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">SSL Certificate</h4>
                      <p className="text-sm text-green-500">Valid</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Certificate is valid and properly configured</p>
                </div>

                {/* Malware Detection - PASS */}
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                      <Bug className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Malware Detection</h4>
                      <p className="text-sm text-green-500">Clean</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">No malicious code or threats detected</p>
                </div>

                {/* DMARC - WARNING */}
                <div className="bg-zinc-800/50 border border-yellow-600/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">DMARC Records</h4>
                      <p className="text-sm text-yellow-500">Not Configured</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">DMARC policy is missing. Add DMARC to improve email security.</p>
                </div>

                {/* Security Headers - WARNING */}
                <div className="bg-zinc-800/50 border border-yellow-600/30 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Security Headers</h4>
                      <p className="text-sm text-yellow-500">Partial</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Some headers missing: CSP, HSTS</p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-6">
                <h4 className="font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Recommendations
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Add DMARC record to protect against email spoofing</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Implement Content-Security-Policy header</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Enable HTTP Strict Transport Security (HSTS)</span>
                  </li>
                </ul>
              </div>

              {/* Rescan Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setScanComplete(false);
                    setEmail("");
                  }}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold"
                >
                  Scan Another Target
                </button>
              </div>
            </div>
          )}
        </div>

        {/* STATISTICS SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "1M+", label: "Scans Performed" },
            { value: "99.9%", label: "Accuracy Rate" },
            { value: "24/7", label: "Monitoring" },
            { value: "500+", label: "Vulnerabilities Detected" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PRIMARY CHECKS */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Security Checks</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our scanner performs comprehensive analysis across multiple security domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EnhancedCard 
              icon={<ShieldCheck className="w-6 h-6" />} 
              title="SSL Certificate" 
              desc="Validity, expiration & encryption strength"
              color="red"
            />
            <EnhancedCard 
              icon={<Bug className="w-6 h-6" />} 
              title="Malware Detection" 
              desc="Detect malicious scripts and threats"
              color="orange"
            />
            <EnhancedCard 
              icon={<MailCheck className="w-6 h-6" />} 
              title="DMARC Records" 
              desc="SPF & DKIM email authentication"
              color="blue"
            />
            <EnhancedCard 
              icon={<EyeOff className="w-6 h-6" />} 
              title="Dark Web Exposure" 
              desc="Check leaked credentials & data"
              color="purple"
            />
          </div>
        </div>

        {/* ADDITIONAL CHECKS */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Security Analysis</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Deep dive into potential vulnerabilities with our advanced detection algorithms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EnhancedCard 
              icon={<AlertTriangle className="w-6 h-6" />} 
              title="Blacklist Status" 
              desc="Check domain against major security vendors"
              color="yellow"
            />
            <EnhancedCard 
              icon={<ShieldAlert className="w-6 h-6" />} 
              title="Vulnerability Scan" 
              desc="Detect known CVEs & outdated software"
              color="red"
            />
            <EnhancedCard 
              icon={<ShieldCheck className="w-6 h-6" />} 
              title="Phishing Detection" 
              desc="Identify phishing & spoofing attempts"
              color="orange"
            />
            <EnhancedCard 
              icon={<Network className="w-6 h-6" />} 
              title="Port Security" 
              desc="Analyze open ports & network exposure"
              color="blue"
            />
            <EnhancedCard 
              icon={<Star className="w-6 h-6" />} 
              title="Domain Reputation" 
              desc="Reputation across threat databases"
              color="purple"
            />
            <EnhancedCard 
              icon={<Code className="w-6 h-6" />} 
              title="Security Headers" 
              desc="Analyze HTTP security headers"
              color="green"
            />
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get your security report in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe className="w-8 h-8" />, 
                title: "Enter Your Domain", 
                desc: "Simply provide your website URL or email address" 
              },
              { 
                icon: <Shield className="w-8 h-8" />, 
                title: "Run Security Scan", 
                desc: "Our system performs comprehensive security analysis" 
              },
              { 
                icon: <Lock className="w-8 h-8" />, 
                title: "Receive Report", 
                desc: "Get detailed findings and recommendations" 
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600/20 border border-red-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-600/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Continuous Protection?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Upgrade to our premium monitoring services for real-time threat detection and comprehensive security management.
          </p>
          <Link to="/contact">
          <button className="px-8 py-4 cursor-pointer bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold flex items-center gap-2 mx-auto">
            Contact Us Now 
            <ArrowRight className="w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function EnhancedCard({ icon, title, desc, color }) {
  const colorClasses = {
    red: "bg-red-600/20 border-red-600/30 text-red-500",
    orange: "bg-orange-600/20 border-orange-600/30 text-orange-500",
    blue: "bg-blue-600/20 border-blue-600/30 text-blue-500",
    purple: "bg-purple-600/20 border-purple-600/30 text-purple-500",
    yellow: "bg-yellow-600/20 border-yellow-600/30 text-yellow-500",
    green: "bg-green-600/20 border-green-600/30 text-green-500"
  };

  return (
    <div className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 hover:transform hover:-translate-y-1">
      <div className={`w-14 h-14 ${colorClasses[color]} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}