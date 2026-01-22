import React, { useState } from "react";
import { Bell, Mail, Clock, Shield, Users, ChevronRight } from "lucide-react";

export default function CyberMonitoring({ serviceName = "Cyber Monitoring" }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">
              Coming Soon
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {serviceName} <span className="text-red-500">Service</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
            We're working hard to bring you advanced {serviceName.toLowerCase()}{" "}
            capabilities. Be the first to know when we launch.
          </p>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Advanced Protection",
                description:
                  "State-of-the-art security features to safeguard your digital assets",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Dedicated security professionals available around the clock",
              },
              {
                icon: Bell,
                title: "Real-time Alerts",
                description:
                  "Instant notifications for any detected threats or vulnerabilities",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-red-500/50 transition"
              >
                <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pricing Plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Coming Soon",
                description: "Perfect for small businesses and individuals",
                features: [
                  "Basic monitoring features",
                  "Email support",
                  "Monthly reports",
                  "Standard alerts",
                ],
              },
              {
                name: "Professional",
                price: "Coming Soon",
                description: "Ideal for growing businesses with advanced needs",
                features: [
                  "Advanced monitoring features",
                  "Priority support",
                  "Weekly reports",
                  "Custom alerts",
                  "API access",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Coming Soon",
                description: "Comprehensive solution for large organizations",
                features: [
                  "Full feature set",
                  "24/7 dedicated support",
                  "Real-time reports",
                  "Advanced analytics",
                  "Custom integrations",
                  "SLA guarantee",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-zinc-900 border ${
                  plan.popular ? "border-red-500 scale-105" : "border-zinc-800"
                } rounded-2xl p-8 hover:border-red-500/50 transition relative`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-black text-sm px-4 py-1 rounded-full font-semibold">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-red-500 mb-1">
                  {plan.price}
                </p>

                <p className="text-gray-400 mt-6 mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-red-500 text-red-500 hover:bg-red-600 hover:text-white"
                  }`}
                  disabled
                >
                  Notify When Available
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notification Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Notified at Launch</h2>
          <p className="text-gray-400 mb-8">
            Be the first to know when our {serviceName} service goes live. Early
            subscribers will receive an exclusive launch discount.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                Notify Me
              </button>
            </div>
          </form>

          {subscribed && (
            <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
              <p className="text-green-500">
                Thank you! We'll notify you when we launch.
              </p>
            </div>
          )}

          <p className="text-gray-500 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "When will the service be available?",
                answer:
                  "We're working hard to launch our {serviceName} service as soon as possible. While we don't have a specific date yet, we expect to launch in the coming months.",
              },
              {
                question: "Will there be a free trial?",
                answer:
                  "Yes, we plan to offer a free trial period for all new users to experience the full capabilities of our {serviceName} service.",
              },
              {
                question: "Can I request early access?",
                answer:
                  "We're currently running a closed beta program. You can request early access by contacting our sales team, and we'll consider your application based on your needs.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
