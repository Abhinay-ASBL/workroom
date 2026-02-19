const STRIPE_POSITIONS = [-171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632, 705, 778];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden" style={{ background: 'rgba(82, 77, 246, 0.1)' }}>
        <div className="absolute inset-0 hidden xl:block pointer-events-none">
          {STRIPE_POSITIONS.map((left, i) => (
            <div key={i} className="absolute w-[73px] top-0 bottom-0" style={{ left: `${left + 172}px`, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.2) 77.404%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(57.4px)', WebkitBackdropFilter: 'blur(57.4px)', mixBlendMode: 'overlay' }} />
          ))}
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-12 lg:pt-[74px] pb-10 lg:pb-[60px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-black leading-[1.1] mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>About The Workroom</h1>
          <p className="text-[16px] lg:text-[20px] font-normal text-black/60" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>The internal knowledge hub for ASBL</p>
        </div>
      </section>
      <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] py-12 lg:py-[80px]">
        <div className="max-w-[800px]">
          <div className="space-y-6" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>
            <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
              The Workroom is ASBL&apos;s internal repository for research, case studies, and working documents. It serves as a centralized platform where teams across the organization can access, share, and build upon collective knowledge.
            </p>
            <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
              Team members use The Workroom to share knowledge, publish findings, and collaborate on projects that drive better decision-making. From market analysis reports to construction documentation, every piece of insight finds its home here.
            </p>
            <p className="text-[16px] lg:text-[17px] text-black/80 leading-[1.7]">
              Browse curated content across categories, discover research from other teams, and contribute your own work to the growing library. The Workroom ensures that valuable knowledge is never siloed and always accessible to those who need it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
