import PolicyLayout from "./PolicyLayout";

export default function Disclaimer() {
  return (
    <PolicyLayout 
      title="Disclaimer" 
      subtitle="Important legal terms and conditions regarding the use of Vardhusa Pvt. Ltd. website and services."
    >
      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">1. General Information</h3>
        <p>
          The information provided on <span className="font-semibold text-[#202020]">vardhusa.com</span> is for general informational and EPC project inquiry purposes only. All information on the site is provided in good faith; however, Vardhusa Pvt. Ltd. makes no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">2. Professional & Engineering Services</h3>
        <p>
          Engineering designs, MEP specifications, plumbing layouts, and firefighting estimations showcased on this website are subject to customized site surveys, structural validations, and statutory approvals. Content on this platform does not constitute formal engineering consultancy or a binding contractual agreement unless formalized through signed corporate documentation.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">3. External Links Disclaimer</h3>
        <p>
          Our website may contain links to third-party websites or services that are not owned or controlled by Vardhusa Pvt. Ltd. We assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">4. Limitation of Liability</h3>
        <p>
          Under no circumstance shall Vardhusa Pvt. Ltd. have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information is solely at your own risk.
        </p>
      </section>
    </PolicyLayout>
  );
}