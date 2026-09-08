import PolicyLayout from "./PolicyLayout";

export default function QualityPolicy() {
  return (
    <PolicyLayout 
      title="Quality Policy" 
      subtitle="Our unwavering commitment to engineering excellence, precision execution, and absolute client satisfaction."
    >
      <div className="bg-[#F3F3F3] p-6 sm:p-8 border-l-4 border-[#F6C62E] mb-8">
        <p className="text-[#202020] font-bold text-lg italic">
          "Vardhusa Pvt. Ltd. is committed to delivering world-class EPC, plumbing, firefighting, and MEP solutions that meet or exceed client expectations and regulatory standards."
        </p>
      </div>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">Core Quality Objectives</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="text-[#202020]">Zero Defect Execution:</strong> Implementing rigorous quality control procedures across all phases of planning, procurement, installation, and handover.</li>
          <li><strong className="text-[#202020]">Compliance & Standards:</strong> Adhering strictly to national and international building codes, safety regulations, and engineering standards.</li>
          <li><strong className="text-[#202020]">Continuous Improvement:</strong> Upgrading technical proficiencies, adopting advanced tools, and reviewing project metrics regularly to refine execution efficiency.</li>
          <li><strong className="text-[#202020]">Client Satisfaction:</strong> Fostering transparent communication and delivering reliable, snag-free infrastructure assets on schedule.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">Quality Assurance Framework</h3>
        <p>
          Every project undertaken by Vardhusa goes through multi-tier inspections—from raw material testing and pre-installation audits to pressure testing for plumbing and fire lines. Our quality management systems ensure complete accountability at every hierarchy level.
        </p>
      </section>
    </PolicyLayout>
  );
}