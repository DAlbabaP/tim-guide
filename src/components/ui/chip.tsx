"use client";

import { cn } from "@/utils/cn";

type Variant = 'primary' | 'success' | 'warning' | 'info' | 'neutral';

const chipVariants: Record<Variant, string> = {
  primary: 'text-primary border-primary',
  success: 'text-emerald-700 border-emerald-600',
  warning: 'text-yellow-600 border-yellow-500',
  info: 'text-blue-600 border-blue-500',
  neutral: 'text-gray border-gray-300',
};

interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: Variant;
}

export const Chip: React.FC<ChipProps> = ({ label, active, onClick, variant = 'neutral' }) => (
  <button
    onClick={onClick}
    className={cn(
      'px-4 py-1 rounded-full border text-sm transition-colors',
      chipVariants[variant],
      active ? 'bg-primary text-white' : 'bg-white hover:bg-light'
    )}
  >
    {label}
  </button>
); 