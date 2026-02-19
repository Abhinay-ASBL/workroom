'use client';

import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onFilterClick?: () => void;
}

export function SearchBar({
  placeholder = "Search anything...",
  onSearch,
  onFilterClick
}: SearchBarProps) {
  return (
    <div
      className="bg-white/5 rounded-[62px] shadow-[0px_0px_0px_1px_rgba(96,101,242,0.13)] w-full max-w-[928px]"
    >
      <div className="flex items-center justify-between h-[66px] px-[33px] py-[10px]">
        <div className="flex items-center gap-3">
          <Search className="w-6 h-6 text-[#4a4a4a]" strokeWidth={1.5} />
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent border-none outline-none text-[15px] text-[#4a4a4a] font-normal leading-[20px] placeholder:text-[#4a4a4a] w-[400px]"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <button
          onClick={onFilterClick}
          className="flex items-center justify-center w-[75px] h-[46px] rounded-[42px] border-2 border-white bg-gradient-to-r from-white to-[#f1f1f1] shadow-[0px_0px_5px_-1px_rgba(46,40,80,0.56)] hover:shadow-[0px_0px_8px_-1px_rgba(46,40,80,0.7)] transition-shadow"
        >
          <svg width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 12.67h19M12.67 19h12.66M15.83 25.33h6.34" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
