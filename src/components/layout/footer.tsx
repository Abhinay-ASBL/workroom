import Link from 'next/link';
import Image from 'next/image';

// Footer link sections
const coreLinks = [
  { href: '/core', label: 'Core' },
  { href: '/about', label: 'About' },
  { href: '/collections', label: 'Collections' },
  { href: '/publish', label: 'Publish' },
  { href: '/browse', label: 'Browse' },
];

const companyLinks = [
  { href: '/company', label: 'Company' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/careers', label: 'Careers' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

// X (Twitter) Icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
    </svg>
  );
}

// YouTube Icon
function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
    </svg>
  );
}

// LinkedIn Icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/>
    </svg>
  );
}

// Instagram Icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="white"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section - Figma node I1:643;1:679: h-[448px] with content */}
      <div className="bg-[rgba(82,77,246,0.1)] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[175px] pt-12 sm:pt-16 md:pt-20 lg:pt-[108px] pb-10 sm:pb-14 md:pb-16 lg:pb-[78px]">
        <div className="max-w-[1378px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left Section - Logo & Description */}
            <div className="max-w-full sm:max-w-[400px] md:max-w-[450px] lg:max-w-[467px]">
              {/* Logo with WORKROOM text - Figma: logo at left-[175.66px] top-[108px], WORKROOM text alongside */}
              <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 lg:mb-[79px]">
                <Image
                  src="/logo.png"
                  alt="ASBL"
                  width={80}
                  height={40}
                  className="h-[32px] sm:h-[36px] md:h-[38px] lg:h-[40px] w-auto"
                />
                <div
                  className="font-extrabold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15.582px] text-[#454545] tracking-[0.8px] sm:tracking-[1px] leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[17px] whitespace-nowrap"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  <p className="m-0">WORK</p>
                  <p className="m-0">ROOM</p>
                </div>
              </div>

              {/* Description - Figma node I1:643;1:681 at left-[175px] top-[187px] */}
              <p
                className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-black leading-normal w-full"
                style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
              >
                The ASBL WORKROOM —<br />
                Internal knowledge repository. For internal use only.
              </p>
            </div>

            {/* Right Section - Link Columns - Figma: Core at left-[1172px], Company at left-[1468px] = 296px gap */}
            <div className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-[296px]">
              {/* Core Links - Figma node I1:643;1:682 at left-[1172px] top-[109px] */}
              <div className="flex flex-col gap-3 sm:gap-[14px] md:gap-[16px] lg:gap-[17px]">
                {coreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] sm:text-[14px] md:text-[15px] text-black hover:text-gray-600 transition-colors leading-normal"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Company Links - Figma node I1:643;1:688 at left-[1468px] top-[109px] */}
              <div className="flex flex-col gap-3 sm:gap-[14px] md:gap-[15px] lg:gap-[16px]">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] sm:text-[14px] md:text-[15px] text-black hover:text-gray-600 transition-colors leading-normal"
                    style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Figma node I1:643;1:699 */}
      <div className="bg-black min-h-[56px] sm:min-h-[60px] md:min-h-[64px] lg:h-[66px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[175px] py-3 sm:py-0">
        <div className="max-w-[1378px] mx-auto h-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Copyright - Figma node I1:643;1:701 */}
          <p
            className="text-[11px] sm:text-[12px] md:text-[13px] text-white text-center sm:text-left leading-[18px] sm:leading-[19.6px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}
          >
            © 2026 ASBL. All rights reserved.
          </p>

          {/* Social Links - Figma node I1:643;1:702 */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[39px]">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X">
              <XIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <YouTubeIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <LinkedInIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px] md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
