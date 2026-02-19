'use client';

import * as React from 'react';
import {
  ExternalLink,
  Download,
  Printer,
  BookmarkPlus,
  ChevronRight,
  Share2,
  AlertTriangle,
} from 'lucide-react';

import { cn } from '@/lib/utils';

export interface ActionDropdownMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  hasSubmenu?: boolean;
  disabled?: boolean;
}

export interface ActionDropdownMenuProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items?: ActionDropdownMenuItem[];
  footer?: React.ReactNode;
}

const defaultItems: ActionDropdownMenuItem[] = [
  {
    id: 'open-new-tab',
    label: 'Open in new tab',
    icon: <ExternalLink className="h-[15px] w-[15px]" />,
  },
  {
    id: 'download',
    label: 'Download file',
    icon: <Download className="h-[15px] w-[15px]" />,
  },
  {
    id: 'print',
    label: 'Print document',
    icon: <Printer className="h-[15px] w-[15px]" />,
  },
  {
    id: 'add-collection',
    label: 'Add to collection',
    icon: <BookmarkPlus className="h-[15px] w-[15px]" />,
    hasSubmenu: true,
  },
  {
    id: 'share',
    label: 'Share File',
    icon: <Share2 className="h-[15px] w-[15px]" />,
  },
  {
    id: 'report',
    label: 'Report issue',
    icon: <AlertTriangle className="h-[15px] w-[15px]" />,
  },
];

const ActionDropdownMenu = React.forwardRef<
  HTMLDivElement,
  ActionDropdownMenuProps
>(({ className, items = defaultItems, footer, ...props }, ref) => {
  // Group items by separator (after print, after share)
  const groupedItems = React.useMemo(() => {
    const groups: ActionDropdownMenuItem[][] = [];
    let currentGroup: ActionDropdownMenuItem[] = [];

    items.forEach((item, index) => {
      currentGroup.push(item);
      // Add separator after print (index 2) and after share (index 4)
      if (index === 2 || index === 4) {
        groups.push(currentGroup);
        currentGroup = [];
      }
    });

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  }, [items]);

  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)]',
        className
      )}
      {...props}
    >
      <div className="flex flex-col py-2">
        {groupedItems.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {group.map((item) => (
              <button
                key={item.id}
                onClick={item.onClick}
                disabled={item.disabled}
                className={cn(
                  'flex w-full items-center gap-2 bg-white px-4 py-2 text-left transition-colors hover:bg-gray-50',
                  item.disabled && 'cursor-not-allowed opacity-50'
                )}
              >
                <span className="text-[#444]">{item.icon}</span>
                <span className="flex-1 font-['IBM_Plex_Sans'] text-sm leading-4 text-[#444]">
                  {item.label}
                </span>
                {item.hasSubmenu && (
                  <ChevronRight className="h-4 w-4 text-[#444]" />
                )}
              </button>
            ))}
            {groupIndex < groupedItems.length - 1 && (
              <div className="my-[7px] h-px bg-black/10" />
            )}
          </React.Fragment>
        ))}
        {/* Footer */}
        {footer && (
          <>
            <div className="my-[7px] h-px bg-black/10" />
            <div className="px-4 py-2">
              <p className="font-['IBM_Plex_Sans'] text-sm leading-5 text-[#777]">
                {footer}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
});
ActionDropdownMenu.displayName = 'ActionDropdownMenu';

export { ActionDropdownMenu };
