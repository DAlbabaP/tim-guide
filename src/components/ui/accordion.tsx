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

const AccordionItemContext = React.createContext<{
  itemId: string;
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
  const [itemId] = React.useState(() => Math.random().toString(36).substr(2, 9));

  return (
    <AccordionItemContext.Provider value={{ itemId }}>
      <div className={cn('border rounded-lg', className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className }) => {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);
  const isOpen = context?.openItems.has(itemContext?.itemId ?? '') ?? false;

  if (!context || !itemContext) {
    throw new Error('AccordionTrigger must be used within an Accordion and AccordionItem');
  }

  return (
    <button
      onClick={() => context.toggleItem(itemContext.itemId)}
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
  const itemContext = React.useContext(AccordionItemContext);
  const isOpen = context?.openItems.has(itemContext?.itemId ?? '') ?? false;

  if (!context || !itemContext) {
    throw new Error('AccordionContent must be used within an Accordion and AccordionItem');
  }

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-[2000px]' : 'max-h-0'
      )}
    >
      <div className={cn('p-4 pt-0', className)}>
        {children}
      </div>
    </div>
  );
};
