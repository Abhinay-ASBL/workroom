'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const primaryButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-normal text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded bg-gradient-to-r from-[#524DF6] to-[#524DF6] text-white hover:from-[#4842E0] hover:to-[#4842E0]',
        gradient:
          'rounded border-2 border-[#524DF6] bg-gradient-to-r from-[#524DF6] to-[#3E39D2] text-white hover:from-[#4842E0] hover:to-[#3531C0]',
        dark: 'rounded bg-black text-white shadow-[0px_0px_7.1px_0px_#5157aa] hover:shadow-[0px_0px_10px_0px_#5157aa]',
        outline:
          'rounded border-2 border-[#524DF6] bg-transparent text-[#524DF6] hover:bg-[#524DF6]/10',
      },
      size: {
        default: 'px-[30px] py-[10px]',
        sm: 'px-[20px] py-[8px] text-sm',
        lg: 'px-[40px] py-[12px] text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(primaryButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton, primaryButtonVariants };
