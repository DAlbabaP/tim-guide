'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  openItems: Set<string>;
  toggleItem: (id: string) => void;
} | null>(null);

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = React.useCallback((id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn('space-y-2', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ children, className }) => {
  return (
    <div className={cn('border rounded-lg', className)}>
      {children}
    </div>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className }) => {
  const context = React.useContext(AccordionContext);
  const [id] = React.useState(() => Math.random().toString(36).substr(2, 9));
  const isOpen = context?.openItems.has(id) ?? false;

  if (!context) {
    throw new Error('AccordionTrigger must be used within an Accordion');
  }

  return (
    <button
      onClick={() => context.toggleItem(id)}
      className={cn(
        'flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-gray-50',
        className
      )}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className }) => {
  const context = React.useContext(AccordionContext);
  const [id] = React.useState(() => Math.random().toString(36).substr(2, 9));
  const isOpen = context?.openItems.has(id) ?? false;

  if (!context) {
    throw new Error('AccordionContent must be used within an Accordion');
  }

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}
    >
      <div className={cn('p-4 pt-0', className)}>
        {children}
      </div>
    </div>
  );
};
