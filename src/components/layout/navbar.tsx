'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Menu, X, LogOut, Settings } from 'lucide-react';
import { MobileNav } from './mobile-nav';

// ASBL Logo (white version for dark navbar) - Figma node 1:718
const ASBL_LOGO = '/logo.png';

// Company submenu links
const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/guidelines', label: 'Guidelines' },
  { href: '/careers', label: 'Careers' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
];

// Mobile nav items - matches Figma design
const mobileNavItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/publish', label: 'Publish' },
];

// Mock data
const mockUser = { name: 'John Doe', email: 'john@asbl.com' };
const mockNotifications = [
  { id: '1', title: 'New article published', time: '5 min ago' },
  { id: '2', title: 'Comment on your article', time: '1 hour ago' },
];

// Bell Icon - Figma node 1:1505 (Property 1=bell)
function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="17"
      height="19"
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 6.33333C13.5 5.09493 13.0259 3.90752 12.182 3.03141C11.3381 2.15529 10.1935 1.66667 9 1.66667C7.80653 1.66667 6.66193 2.15529 5.81802 3.03141C4.97411 3.90752 4.5 5.09493 4.5 6.33333C4.5 11.8333 2.25 13.5 2.25 13.5H15.75C15.75 13.5 13.5 11.8333 13.5 6.33333Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2975 16.5C10.1655 16.7526 9.9771 16.9622 9.74925 17.1078C9.5214 17.2533 9.26235 17.3304 8.99813 17.3304C8.7339 17.3304 8.47485 17.2533 8.247 17.1078C8.01915 16.9622 7.83075 16.7526 7.69875 16.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Person Icon - Figma node 1:1509 (Property 1=person)
function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93477 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Nav button text style - Figma exact
const navButtonStyle = {
  fontFamily: "'Roboto', sans-serif",
  fontVariationSettings: "'wdth' 100",
};

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header - Figma node 1:716: bg-black h-[80px] shadow */}
      <header className="fixed top-0 inset-x-0 z-50 bg-black shadow-[0px_-1px_5.5px_1px_rgba(0,0,0,0.25)] border-b border-white/[0.06]">
        {/* Nav container - Figma: h-[38px] centered at top-[25px] */}
        <nav className="flex items-center justify-between h-[60px] sm:h-[70px] lg:h-[80px] px-4 sm:px-8 md:px-12 lg:px-[69px]">
          {/* Logo - Figma node 1:718: h-[33px] w-[65.477px] */}
          <Link href="/" className="flex items-center">
            <Image
              src={ASBL_LOGO}
              alt="ASBL"
              width={66}
              height={33}
              className="h-[28px] sm:h-[30px] lg:h-[33px] w-auto"
            />
          </Link>

          {/* Desktop Nav - Right side - Figma node 1:722: w-[374px] h-[38px] */}
          <div className="hidden md:flex items-center h-[38px]">
            {/* Nav Links Container - Figma spacing: Company(0), Projects(112), Publish(215) */}
            <div className="flex items-center">
              {/* Company Dropdown - Figma node 1:1493 */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center justify-center h-[38px] px-[15px] py-[7px] rounded-[4px] text-[16px] font-normal text-white hover:text-white/80 transition-colors"
                    style={navButtonStyle}
                  >
                    Company
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-48 bg-gray-800 border-gray-700"
                >
                  {companyLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      asChild
                      className="text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white cursor-pointer"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Projects - Figma: at left-[112px] from container */}
              <Link
                href="/projects"
                className={`flex items-center justify-center h-[38px] px-[15px] py-[7px] rounded-[4px] text-[16px] font-normal transition-colors ${
                  pathname.startsWith('/projects')
                    ? 'text-white bg-white/10'
                    : 'text-white hover:text-white/80'
                }`}
                style={navButtonStyle}
              >
                Projects
              </Link>

              {/* Publish - Figma: at left-[215px] from container */}
              <Link
                href="/publish"
                className={`flex items-center justify-center h-[38px] px-[15px] py-[7px] rounded-[4px] text-[16px] font-normal transition-colors ${
                  pathname === '/publish'
                    ? 'text-white bg-white/10'
                    : 'text-white hover:text-white/80'
                }`}
                style={navButtonStyle}
              >
                Publish
              </Link>
            </div>

            {/* Icons Container - Figma: Bell at left-[312px], Person at left-[350px] = 38px gap */}
            <div className="flex items-center ml-[12px] gap-[14px]">
              {/* Bell Icon - Figma node 1:1505: size-[24px] */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="w-[24px] h-[24px] flex items-center justify-center text-white hover:text-white/80 transition-colors overflow-hidden"
                    aria-label="Notifications"
                  >
                    <BellIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-80 bg-gray-800 border-gray-700"
                >
                  <DropdownMenuLabel className="text-white">
                    Notifications
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  {mockNotifications.length > 0 ? (
                    mockNotifications.map((notification) => (
                      <DropdownMenuItem
                        key={notification.id}
                        className="flex flex-col items-start gap-1 text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white cursor-pointer"
                      >
                        <span className="font-medium">{notification.title}</span>
                        <span className="text-xs text-gray-500">
                          {notification.time}
                        </span>
                      </DropdownMenuItem>
                    ))
                  ) : (
                    <div className="px-2 py-4 text-center text-gray-400">
                      No notifications
                    </div>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Person Icon - Figma node 1:1509: size-[24px] */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="w-[24px] h-[24px] flex items-center justify-center text-white hover:text-white/80 transition-colors overflow-hidden"
                    aria-label="Profile"
                  >
                    <PersonIcon />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 bg-gray-800 border-gray-700"
                >
                  <div className="px-2 py-2">
                    <p className="text-sm font-medium text-white">{mockUser.name}</p>
                    <p className="text-xs text-gray-400">{mockUser.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    asChild
                    className="text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white cursor-pointer"
                  >
                    <Link href="/profile" className="flex items-center">
                      <PersonIcon className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className="text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-700 focus:text-white cursor-pointer"
                  >
                    <Link href="/settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-gray-700 focus:bg-gray-700 focus:text-red-300 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={mobileNavItems}
        pathname={pathname}
      />

      {/* Spacer - matches responsive navbar height */}
      <div className="h-[60px] sm:h-[70px] lg:h-[80px]" />
    </>
  );
}
