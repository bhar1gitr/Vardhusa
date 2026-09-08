import PolicyLayout from "./PolicyLayout";

export default function HsePolicies() {
  return (
    <PolicyLayout 
      title="Health, Safety & Environment (HSE) Policies" 
      subtitle="Ensuring zero-harm work environments, worker safety, and environmental protection across all project sites."
    >
      <div className="bg-[#F3F3F3] p-6 sm:p-8 border-l-4 border-[#F6C62E] mb-8">
        <p className="text-[#202020] font-bold text-lg italic">
          "Safety is not just a priority at Vardhusa—it is a core value. We are dedicated to maintaining a 'Zero Harm' culture across all construction and MEP sites."
        </p>
      </div>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">1. Occupational Health & Safety</h3>
        <p>
          We prioritize the physical well-being of our engineers, technicians, contractors, and site visitors. Our standard operating procedures mandate the proper usage of Personal Protective Equipment (PPE), mandatory safety briefings, regular equipment safety audits, and strict adherence to industrial hazard protocols.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">2. Environmental Responsibility</h3>
        <p>
          As an EPC contractor, Vardhusa is committed to sustainable construction methodologies. We actively work to minimize waste, manage resource consumption efficiently, ensure responsible disposal of construction debris, and integrate eco-friendly practices into our plumbing and MEP installations.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-[#202020] mb-3">3. Incident Prevention & Training</h3>
        <p>
          Continuous training programs are conducted for all site personnel to identify potential risks, execute emergency responses effectively, and maintain a proactive safety culture from pre-planning through project handover.
        </p>
      </section>
    </PolicyLayout>
  );
}