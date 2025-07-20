import { cn } from "@/utils/cn";

type Variant = 'primary' | 'success' | 'warning' | 'info' | 'neutral';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-emerald-600/10 text-emerald-700',
  warning: 'bg-yellow-400/10 text-yellow-600',
  info: 'bg-blue-500/10 text-blue-600',
  neutral: 'bg-gray-200 text-gray-700',
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
} 