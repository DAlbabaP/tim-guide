import { cn } from "@/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'search' | 'error';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = 'default', size = 'md', leftIcon, rightIcon, className, ...props }, ref) => {
    const baseClasses = "w-full border border-gray-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed bg-white";
    
    const variantClasses = {
      default: "text-gray placeholder-gray-400",
      search: "text-gray placeholder-gray-400",
      error: "border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500"
    };
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };
    
    const hasLeftIcon = leftIcon && "pl-10";
    const hasRightIcon = rightIcon && "pr-10";
    
    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={cn(
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            hasLeftIcon,
            hasRightIcon,
            className
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; 