'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { SlidersHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

const filterButtonVariants = cva(
  'inline-flex items-center justify-center overflow-hidden border-2 border-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[42px]',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-br from-white to-[#F1F1F1] shadow-[0px_0px_5px_-1px_rgba(46,40,80,0.56)] hover:shadow-[0px_0px_7px_0px_rgba(46,40,80,0.56)]',
        active:
          'bg-gradient-to-tl from-white to-[#F1F1F1] shadow-[0px_0px_7px_0px_rgba(46,40,80,0.56)]',
      },
      size: {
        default: 'h-[46px] w-[75px] px-[20px] py-[10px]',
        sm: 'h-[38px] w-[60px] px-[14px] py-[8px]',
        lg: 'h-[54px] w-[90px] px-[24px] py-[12px]',
        icon: 'h-[46px] w-[46px] p-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof filterButtonVariants> {
  asChild?: boolean;
  iconSize?: number;
}

const FilterButton = React.forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ className, variant, size, asChild = false, iconSize = 19, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(filterButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <SlidersHorizontal
          className="text-gray-700"
          style={{ width: iconSize, height: iconSize }}
        />
      </Comp>
    );
  }
);
FilterButton.displayName = 'FilterButton';

export { FilterButton, filterButtonVariants };
