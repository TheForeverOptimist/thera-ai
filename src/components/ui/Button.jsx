import { cn } from "../../lib/utils";
import { Loader2 } from "lucide-react";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offest-2 disable:opacity-50 dark:focus:ring-stone-400 disabled:pointer-events-none dark:focus:ring-offset-stone-900",
  {
    variants: {
      variant: {
        default:
          "bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100",
        outline:
          "bg-stone-900 text-white hover:bg-stone-900 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-100 border-stone-200 hover:bg-stone-100 dark:border-stone-700",
        ghost:
          "bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 dark:text-stone-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-stone-900 dark:text-stone-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
