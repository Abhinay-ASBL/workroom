'use client';

import * as React from 'react';
import { Check, Square } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface FilterCategory {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface FilterOption {
  id: string;
  label: string;
  checked?: boolean;
}

export interface FilterDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  categories: FilterCategory[];
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  onOptionChange?: (categoryId: string, optionId: string, checked: boolean) => void;
  onClearAll?: () => void;
  onSelectAll?: (categoryId: string) => void;
}

const FilterDropdown = React.forwardRef<HTMLDivElement, FilterDropdownProps>(
  (
    {
      className,
      categories,
      selectedCategory,
      onCategoryChange,
      onOptionChange,
      onClearAll,
      onSelectAll,
      ...props
    },
    ref
  ) => {
    const [activeCategory, setActiveCategory] = React.useState(
      selectedCategory || categories[0]?.id
    );

    const handleCategoryClick = (categoryId: string) => {
      setActiveCategory(categoryId);
      onCategoryChange?.(categoryId);
    };

    const activeCategoryData = categories.find((c) => c.id === activeCategory);

    return (
      <div
        ref={ref}
        className={cn(
          'flex h-[266px] w-[451px] overflow-hidden rounded-[5px] bg-white',
          className
        )}
        {...props}
      >
        {/* Left Sidebar - Categories */}
        <div className="flex h-full w-[221px] flex-col overflow-hidden rounded-[3px] bg-[#EFEEF1]">
          {/* Clear All Header */}
          <div className="flex items-start gap-4 bg-white px-[25px] pb-3 pt-5">
            <button
              onClick={onClearAll}
              className="font-normal text-[13px] leading-4 text-[#005FF9] hover:underline"
            >
              CLEAR ALL
            </button>
          </div>
          <div className="h-px w-full bg-[#CECECE]" />

          {/* Category List */}
          {categories.map((category) => (
            <React.Fragment key={category.id}>
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={cn(
                  'flex w-full items-start gap-4 px-[25px] py-3 text-left transition-colors',
                  activeCategory === category.id
                    ? 'bg-white'
                    : 'bg-[#EFEEF1] hover:bg-[#E5E4E8]'
                )}
              >
                <span className="flex-1 font-normal text-sm leading-4 text-[#1C1C1C]">
                  {category.label}
                </span>
              </button>
              <div className="h-px w-full bg-[#CECECE]" />
            </React.Fragment>
          ))}
        </div>

        {/* Right Panel - Options */}
        <div className="flex h-full w-[230px] flex-col overflow-hidden rounded-[3px]">
          {/* Select All Header */}
          <div className="flex items-start gap-3 bg-white px-[25px] pb-[10px] pt-5">
            <button
              onClick={() => activeCategory && onSelectAll?.(activeCategory)}
              className="flex h-[15px] w-[15px] items-center justify-center"
            >
              <Square className="h-[11px] w-[11px] text-[#1C1C1C]" />
            </button>
            <span className="font-normal text-sm leading-4 text-[#1C1C1C]">
              Select All
            </span>
          </div>

          {/* Options List */}
          <div className="flex flex-1 flex-col overflow-y-auto bg-white">
            {activeCategoryData?.options.map((option) => (
              <button
                key={option.id}
                onClick={() =>
                  onOptionChange?.(activeCategory!, option.id, !option.checked)
                }
                className="flex items-start gap-3 bg-white px-[25px] py-[10px] text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  {option.checked && (
                    <Check className="h-[9px] w-[7px] text-[#1C1C1C]" />
                  )}
                </div>
                <span className="font-normal text-sm leading-4 text-[#1C1C1C]">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
FilterDropdown.displayName = 'FilterDropdown';

export { FilterDropdown };
