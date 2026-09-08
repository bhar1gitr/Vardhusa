import PolicyLayout from "./PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      subtitle="How Vardhusa Pvt. Ltd. collects, protects, and manages your personal and corporate information."
    >
      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">1. Information We Collect</h3>
        <p>
          When you interact with our website, request project estimates, or submit inquiries through our contact and newsletter forms, we may collect personal details such as your name, corporate email address, phone number, company name, and specific project requirements.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">2. How We Use Your Information</h3>
        <p>We use the data collected strictly for legitimate business operations, including:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Responding to your project inquiries and engineering consultation requests.</li>
          <li>Sending administrative emails, proposals, and project status updates.</li>
          <li>Improving our website performance, user experience, and service offerings.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">3. Data Security</h3>
        <p>
          We implement robust technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Secure encrypted protocols (SSL/HTTPS) and protected database connections are maintained across our servers.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">4. Contact Us</h3>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or how your data is handled, feel free to reach out to us through our official contact page.
        </p>
      </section>
    </PolicyLayout>
  );
}