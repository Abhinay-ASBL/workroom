const STRIPE_POSITIONS = [-171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632, 705, 778];

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden" style={{ background: 'rgba(82, 77, 246, 0.1)' }}>
        <div className="absolute inset-0 hidden xl:block pointer-events-none">
          {STRIPE_POSITIONS.map((left, i) => (
            <div key={i} className="absolute w-[73px] top-0 bottom-0" style={{ left: `${left + 172}px`, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.2) 77.404%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(57.4px)', WebkitBackdropFilter: 'blur(57.4px)', mixBlendMode: 'overlay' }} />
          ))}
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-12 lg:pt-[74px] pb-10 lg:pb-[60px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-black leading-[1.1] mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Guidelines</h1>
          <p className="text-[16px] lg:text-[20px] font-normal text-black/60" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>How to publish and contribute</p>
        </div>
      </section>
      <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] py-12 lg:py-[80px]">
        <div className="max-w-[800px]">
          <div className="space-y-10" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>
            <div>
              <h3 className="text-[20px] lg:text-[24px] font-medium text-black mb-3">Publishing Standards</h3>
              <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
                All content submitted to The Workroom should be accurate, well-structured, and relevant to ASBL&apos;s operations. Submissions must include a clear title, appropriate categorization, and any supporting materials.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] lg:text-[24px] font-medium text-black mb-3">Content Types</h3>
              <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
                The Workroom accepts research papers, case studies, project documentation, presentations, images, and videos. Each content type has specific formatting requirements to ensure consistency across the platform.
              </p>
            </div>
            <div>
              <h3 className="text-[20px] lg:text-[24px] font-medium text-black mb-3">Quality Guidelines</h3>
              <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
                The editorial team reviews all submissions for clarity, completeness, and adherence to ASBL standards. Feedback is provided within 48 hours, and revisions may be requested before content is published to the platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
