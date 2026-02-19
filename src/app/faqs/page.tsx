const STRIPE_POSITIONS = [-171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632, 705, 778];

const FAQ_ITEMS = [
  {
    question: 'Who can publish?',
    answer: 'Any ASBL team member.',
  },
  {
    question: 'What content types are allowed?',
    answer: 'Research, case studies, documents, presentations, images.',
  },
  {
    question: 'How do I submit?',
    answer: 'Use the Publish page to upload your files.',
  },
  {
    question: 'Who reviews submissions?',
    answer: 'The editorial team reviews all submissions within 48 hours.',
  },
  {
    question: 'Can I edit after publishing?',
    answer: 'Contact the admin team for edits.',
  },
];

export default function FaqsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden" style={{ background: 'rgba(82, 77, 246, 0.1)' }}>
        <div className="absolute inset-0 hidden xl:block pointer-events-none">
          {STRIPE_POSITIONS.map((left, i) => (
            <div key={i} className="absolute w-[73px] top-0 bottom-0" style={{ left: `${left + 172}px`, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.2) 77.404%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(57.4px)', WebkitBackdropFilter: 'blur(57.4px)', mixBlendMode: 'overlay' }} />
          ))}
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-12 lg:pt-[74px] pb-10 lg:pb-[60px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-black leading-[1.1] mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>FAQs</h1>
          <p className="text-[16px] lg:text-[20px] font-normal text-black/60" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Frequently asked questions</p>
        </div>
      </section>
      <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] py-12 lg:py-[80px]">
        <div className="max-w-[800px]">
          <div className="space-y-8" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border-b border-black/10 pb-6">
                <h3 className="text-[18px] lg:text-[20px] font-medium text-black mb-2">{item.question}</h3>
                <p className="text-[16px] lg:text-[17px] text-black/70 leading-[1.7]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
