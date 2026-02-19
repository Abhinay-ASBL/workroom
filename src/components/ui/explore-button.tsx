'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const exploreButtonVariants = cva(
  'inline-flex items-center justify-center gap-[3px] whitespace-nowrap font-normal text-[15px] tracking-[0.1px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-white text-black border border-black/10 shadow-sm hover:bg-gray-50 hover:shadow-md',
        light:
          'bg-gradient-to-r from-[rgba(82,77,246,0.17)] to-[rgba(82,77,246,0.17)] text-black hover:from-[rgba(82,77,246,0.25)] hover:to-[rgba(82,77,246,0.25)]',
        dark: 'bg-[#524DF6]/20 text-white hover:bg-[#524DF6]/30',
      },
      size: {
        default: 'h-[32px] w-[117px] px-[12px]',
        sm: 'h-[28px] w-[100px] px-[10px] text-sm',
        lg: 'h-[38px] w-[140px] px-[16px] text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ExploreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof exploreButtonVariants> {
  asChild?: boolean;
  showIcon?: boolean;
}

const ExploreButton = React.forwardRef<HTMLButtonElement, ExploreButtonProps>(
  (
    { className, variant, size, asChild = false, showIcon = true, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(exploreButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="leading-[20px]">{children || 'explore all'}</span>
        {showIcon && <ChevronRight className="h-[11px] w-[11px]" />}
      </Comp>
    );
  }
);
ExploreButton.displayName = 'ExploreButton';

export { ExploreButton, exploreButtonVariants };
