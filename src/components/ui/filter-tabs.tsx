'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FilterTab {
  id: string;
  label: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  defaultActiveId?: string;
  activeId?: string;
  onChange?: (tabId: string) => void;
}

export function FilterTabs({ tabs, defaultActiveId, activeId: controlledActiveId, onChange }: FilterTabsProps) {
  const [internalActiveId, setInternalActiveId] = useState(defaultActiveId || tabs[0]?.id);
  // Use controlled value if provided, otherwise internal state
  const activeId = controlledActiveId ?? internalActiveId;

  const handleTabClick = (tabId: string) => {
    setInternalActiveId(tabId);
    onChange?.(tabId);
  };

  return (
    <div className="flex items-center gap-3 flex-nowrap">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'px-[18px] py-[6px] rounded-[49px] text-[15px] leading-[20px] tracking-[0.1px] text-black text-center whitespace-nowrap transition-all duration-200',
              isActive
                ? 'bg-[rgba(82,77,246,0.17)] font-normal shadow-sm'
                : 'border border-[#cbcbcb] font-light hover:border-[#999] hover:bg-black/[0.03]'
            )}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
