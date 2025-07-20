import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg motion-safe:transition-all motion-safe:duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "bg-primary text-white hover:bg-primary-600 focus:ring-primary shadow-soft hover:shadow-medium motion-safe:hover:-translate-y-0.5",
      secondary: "bg-secondary text-dark hover:bg-secondary-600 focus:ring-secondary",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
      ghost: "text-gray hover:text-dark hover:bg-gray-100 focus:ring-gray"
    };
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-4 py-2 text-base gap-2",
      lg: "px-6 py-3 text-lg gap-2"
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; 