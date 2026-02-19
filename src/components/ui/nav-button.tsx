'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const navButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-normal text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded',
  {
    variants: {
      variant: {
        default: 'text-white hover:text-white/80',
        active:
          'text-[#B2B5F4] [text-shadow:0px_0px_4.989px_rgba(255,255,255,0.52)]',
        muted: 'text-white/70 hover:text-white',
      },
      size: {
        default: 'h-[38px] px-[15px] py-[7px]',
        sm: 'h-[32px] px-[12px] py-[5px] text-sm',
        lg: 'h-[44px] px-[20px] py-[10px] text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navButtonVariants> {
  asChild?: boolean;
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(navButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
NavButton.displayName = 'NavButton';

export { NavButton, navButtonVariants };
