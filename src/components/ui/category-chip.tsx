'use client';

interface CategoryChipProps {
  label: string;
  onClick?: () => void;
  showDivider?: boolean;
}

export function CategoryChip({ label, onClick, showDivider = false }: CategoryChipProps) {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className="px-[10px] py-[6px] text-[17px] text-black font-normal leading-[20px] tracking-[0.1px] hover:opacity-70 transition-opacity"
      >
        {label}
      </button>
      {showDivider && (
        <div className="w-[1px] h-[15px] bg-black/20 mx-1" />
      )}
    </div>
  );
}

interface CategoryChipsProps {
  categories: string[];
  onCategoryClick?: (category: string) => void;
  showMoreLink?: boolean;
  onMoreClick?: () => void;
}

export function CategoryChips({
  categories,
  onCategoryClick,
  showMoreLink = true,
  onMoreClick
}: CategoryChipsProps) {
  return (
    <div className="flex items-center gap-0 flex-wrap">
      {categories.map((category, index) => (
        <CategoryChip
          key={category}
          label={category}
          onClick={() => onCategoryClick?.(category)}
          showDivider={index < categories.length - 1}
        />
      ))}
      {showMoreLink && (
        <button
          onClick={onMoreClick}
          className="px-2 py-[6px] text-[15px] text-[#0061ff] font-medium leading-[20px] tracking-[0.1px] underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          more
        </button>
      )}
    </div>
  );
}
