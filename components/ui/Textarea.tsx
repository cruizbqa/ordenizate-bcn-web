import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
    HTMLTextAreaElement,
    React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                "flex min-h-[100px] w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent hover:border-sand-300 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea }
