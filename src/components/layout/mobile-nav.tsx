'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  pathname: string;
}

// Company submenu links (same as navbar)
const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/careers', label: 'Careers' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

export function MobileNav({ isOpen, onClose, navItems, pathname }: MobileNavProps) {
  const [companyExpanded, setCompanyExpanded] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Check if any company link is active
  const isCompanyActive = companyLinks.some((link) => pathname.startsWith(link.href));

  return (
    <div
      className={cn(
        'md:hidden fixed inset-0 top-[60px] sm:top-[70px] z-40 transition-opacity duration-200',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
        className={cn(
          'relative bg-gray-900 border-b border-gray-800 shadow-xl transform transition-all duration-200',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {/* Company Accordion */}
          <button
            onClick={() => setCompanyExpanded(!companyExpanded)}
            className={cn(
              'flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors',
              isCompanyActive
                ? 'bg-white/10 text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            )}
          >
            Company
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                companyExpanded && 'rotate-180'
              )}
            />
          </button>
          {companyExpanded && (
            <div className="pl-4 space-y-1">
              {companyLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'block px-4 py-2 text-sm rounded-lg transition-colors',
                    pathname.startsWith(link.href)
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {/* Regular nav items (Projects, Publish) */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                isActive(item.href)
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
