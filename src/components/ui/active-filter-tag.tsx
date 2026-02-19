'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ActiveFilterTagProps {
  label: string;
  onRemove: () => void;
  className?: string;
}

export function ActiveFilterTag({ label, onRemove, className }: ActiveFilterTagProps) {
  return (
    <div
      className={cn(
        'bg-[#f2f2f2] flex items-center justify-center gap-[8px] px-[10px] py-[4px] rounded-[49px]',
        className
      )}
    >
      <span
        className="text-[13px] font-light text-black text-center tracking-[0.1px] leading-[20px] whitespace-nowrap"
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontVariationSettings: "'wdth' 100",
        }}
      >
        {label}
      </span>
      <button
        onClick={onRemove}
        className="flex items-center justify-center w-[7.5px] h-[7.5px] hover:opacity-70 transition-opacity"
        aria-label={`Remove ${label} filter`}
      >
        <X className="w-[7.5px] h-[7.5px] text-black" strokeWidth={2} />
      </button>
    </div>
  );
}

export interface ActiveFiltersBarProps {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearAll: () => void;
  className?: string;
}

export function ActiveFiltersBar({
  filters,
  onRemoveFilter,
  onClearAll,
  className,
}: ActiveFiltersBarProps) {
  if (filters.length === 0) return null;

  return (
    <div className={cn('flex items-center gap-[16px] flex-wrap', className)}>
      {filters.map((filter) => (
        <ActiveFilterTag
          key={filter}
          label={filter}
          onRemove={() => onRemoveFilter(filter)}
        />
      ))}
      <button
        onClick={onClearAll}
        className="flex items-center justify-center h-[27px] px-[8px] py-[6px]"
      >
        <span
          className="text-[15px] font-medium text-[#0061ff] text-center tracking-[0.1px] leading-[20px] whitespace-nowrap underline underline-offset-2 hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontVariationSettings: "'wdth' 100",
          }}
        >
          Clear All
        </span>
      </button>
    </div>
  );
}
