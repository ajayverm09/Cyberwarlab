export default function TrustedExperts() {
  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="https://cybertested.com/assets/img/core-img/blue_team.png"
              alt="Trusted Experts"
              className="w-full max-w-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold text-white leading-tight">
              We Are The Trusted Experts & <br />
              We Keep Things Simple
            </h2>

            <p className="mt-6 text-white leading-relaxed">
              We introduce software that scans the vulnerabilities of websites,
              mobile applications, and cloud server equipment. With the help of
              this software, we will check SQL injection, XSS, GDPR compliance,
              incorrect configurations, and other security issues.
            </p>

            <p className="mt-4 text-white leading-relaxed">
              An automatic penetration test, supported by artificial
              intelligence (AI), will be carried out 24/7, on the basis of which
              periodic reports will be generated, each time including
              instructions for debugging!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
