import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

export default forwardRef<
HTMLSelectElement, 
React.HTMLProps<HTMLSelectElement>
>(function Select({ className, ...props }, ref){
    return (
    <div className="relative">
    <select
    className={cn(
        "h-10 w-full rounded-md appearance-none truncate border bg-background border-input py-2 pl-3 pr-8 text-sm ring-offset-background focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
        className,
    )}
    ref={ref}
    {...props}
    />
    <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
    </div>
    );
});