'use client';

import * as React from 'react';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const contentCardVariants = cva(
  'relative overflow-hidden rounded-[10px] transition-all flex-shrink-0 group',
  {
    variants: {
      variant: {
        image: 'bg-[#d0d0d0]',
        dark: 'bg-black shadow-[0px_1px_9px_0px_rgba(81,87,170,0.35)]',
      },
      size: {
        // Figma exact: 327x424 - responsive below xl
        default: 'h-[320px] sm:h-[360px] md:h-[400px] xl:h-[424px] w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] xl:max-w-[327px]',
        sm: 'h-[280px] sm:h-[300px] md:h-[320px] w-full max-w-[260px]',
        lg: 'h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-[400px]',
        fluid: 'h-[300px] sm:h-[350px] md:h-[380px] lg:h-[424px] w-full',
      },
    },
    defaultVariants: {
      variant: 'image',
      size: 'default',
    },
  }
);

export interface ContentCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentCardVariants> {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  onBookmark?: (e?: React.MouseEvent) => void;
  onMoreOptions?: (e?: React.MouseEvent) => void;
  onReadMore?: (e?: React.MouseEvent) => void;
}

// Bookmark Icon SVG
function BookmarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4.6C1 3.11984 1 2.37976 1.29065 1.81901C1.54631 1.32561 1.94249 0.929434 2.43589 0.673773C2.99665 0.383118 3.73672 0.383118 5.21689 0.383118H8.78311C10.2633 0.383118 11.0034 0.383118 11.5641 0.673773C12.0575 0.929434 12.4537 1.32561 12.7094 1.81901C13 2.37976 13 3.11984 13 4.6V17.3831L7 13.3831L1 17.3831V4.6Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Dots Vertical Icon SVG
function DotsVerticalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="1.5" fill="white" />
      <circle cx="2" cy="8" r="1.5" fill="white" />
      <circle cx="2" cy="14" r="1.5" fill="white" />
    </svg>
  );
}

// Arrow Right Icon SVG
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.20825 12.5H19.7916"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5833 7.29169L19.7916 12.5L14.5833 17.7084"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ContentCard = React.forwardRef<HTMLDivElement, ContentCardProps>(
  (
    {
      className,
      variant,
      size,
      title,
      subtitle,
      description,
      imageUrl,
      onBookmark,
      onMoreOptions,
      onReadMore,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <div
        ref={ref}
        className={cn(contentCardVariants({ variant, size, className }), 'hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-shadow duration-300')}
        {...props}
      >
        {/* Background Image with Gradient Overlay - Figma exact */}
        {imageUrl && (variant === 'image' || variant === undefined) && (
          <div className="absolute inset-0">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#c8c8c8] to-[#909090]" />
            )}
            {/* Dual gradient overlay: top covers title/icons, bottom covers arrow button */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)',
              }}
            />
          </div>
        )}

        {/* Top right icons container - Figma positioning: bookmark at left-[260px], dots at left-[288px] from 327px card = right-[67px] and right-[39px] */}
        <div className="absolute top-[20px] right-[12px] sm:right-[16px] lg:right-[11px] flex items-center gap-0">
          {/* Bookmark Icon - Figma node Component 185 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBookmark?.(e);
            }}
            className="flex h-[30px] w-[30px] items-center justify-center text-white transition-colors hover:opacity-80"
            aria-label="Bookmark"
          >
            <BookmarkIcon />
          </button>

          {/* Dots Menu Icon - Figma node 1:1353 */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoreOptions?.(e);
            }}
            className="flex h-[28px] w-[28px] items-center justify-center text-white transition-colors hover:opacity-80"
            aria-label="More options"
          >
            <DotsVerticalIcon />
          </button>
        </div>

        {/* Title + Subtitle — stacked so subtitle never overlaps title */}
        <div className="absolute left-[16px] sm:left-[20px] lg:left-[25px] top-[36px] sm:top-[40px] lg:top-[43px] right-[50px] sm:right-[60px]">
          <p
            className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-[1.3] text-white line-clamp-2"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontVariationSettings: "'wdth' 100",
            }}
          >
            {title}
          </p>
          {subtitle && (
            <p
              className="text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-white/70 mt-[5px] line-clamp-1"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontVariationSettings: "'wdth' 100",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Description (for dark variant) */}
        {description && variant === 'dark' && (
          <p className="absolute left-[25px] top-[92px] w-[252px] font-normal text-[17px] leading-[100%] text-white">
            {description}
          </p>
        )}

        {/* Arrow Icon - Figma: left-[260px] top-[382.5px] from 327x424 card = right-[42px] bottom-[16.5px] */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReadMore?.(e);
          }}
          className="absolute right-[42px] bottom-[16px] sm:bottom-[17px] flex h-[25px] w-[25px] items-center justify-center text-white transition-colors hover:opacity-80"
          aria-label="Read more"
        >
          <ArrowRightIcon />
        </button>

        {/* READ MORE text (for dark variant only) */}
        {variant === 'dark' && (
          <span className="absolute bottom-[17px] left-[25px] font-normal text-[15px] leading-[100%] text-white">
            READ MORE
          </span>
        )}
      </div>
    );
  }
);
ContentCard.displayName = 'ContentCard';

export { ContentCard, contentCardVariants };
