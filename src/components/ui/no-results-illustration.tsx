'use client';

/**
 * No Results Illustration - Figma node 1:396
 * Shows a document with magnifying glass and X marks indicating no search results
 */
export function NoResultsIllustration({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="218"
      height="218"
      viewBox="0 0 218 218"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document/Paper background */}
      <g>
        {/* Main document */}
        <rect x="49" y="36" width="108" height="142" rx="8" fill="#F5F5F5" stroke="#E0E0E0" strokeWidth="2" />

        {/* Document lines */}
        <rect x="65" y="55" width="76" height="6" rx="3" fill="#E0E0E0" />
        <rect x="65" y="70" width="60" height="6" rx="3" fill="#E0E0E0" />
        <rect x="65" y="85" width="70" height="6" rx="3" fill="#E0E0E0" />
        <rect x="65" y="100" width="50" height="6" rx="3" fill="#E0E0E0" />
        <rect x="65" y="115" width="65" height="6" rx="3" fill="#E0E0E0" />
        <rect x="65" y="130" width="55" height="6" rx="3" fill="#E0E0E0" />

        {/* Magnifying glass */}
        <circle cx="140" cy="140" r="35" fill="white" stroke="#494949" strokeWidth="4" />
        <circle cx="140" cy="140" r="28" stroke="#E0E0E0" strokeWidth="2" />
        <rect x="165" y="165" width="12" height="45" rx="6" transform="rotate(45 165 165)" fill="#494949" />

        {/* X mark inside magnifying glass */}
        <path d="M128 128L152 152" stroke="#494949" strokeWidth="4" strokeLinecap="round" />
        <path d="M152 128L128 152" stroke="#494949" strokeWidth="4" strokeLinecap="round" />

        {/* Small red X marks around */}
        {/* Top left X */}
        <path d="M25 50L40 65" stroke="#FF4747" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 50L25 65" stroke="#FF4747" strokeWidth="3" strokeLinecap="round" />

        {/* Top right X */}
        <path d="M175 55L188 68" stroke="#FF4747" strokeWidth="3" strokeLinecap="round" />
        <path d="M188 55L175 68" stroke="#FF4747" strokeWidth="3" strokeLinecap="round" />

        {/* Bottom X */}
        <path d="M70 185L82 197" stroke="#FF4747" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M82 185L70 197" stroke="#FF4747" strokeWidth="2.5" strokeLinecap="round" />

        {/* Decorative dots */}
        <circle cx="95" cy="45" r="4" fill="#E0E0E0" />
        <circle cx="190" cy="115" r="5" fill="#E0E0E0" />
        <circle cx="30" cy="140" r="3" fill="#E0E0E0" />

        {/* Shadow under document */}
        <ellipse cx="103" cy="200" rx="60" ry="8" fill="#E8E8E8" />
      </g>
    </svg>
  );
}
