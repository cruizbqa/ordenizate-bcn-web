import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    spacing?: "none" | "sm" | "md" | "lg";
}

export function Section({ children, className, spacing = "lg", ...props }: SectionProps) {
    const spacings = {
        none: "",
        sm: "py-8 md:py-12",
        md: "py-12 md:py-20",
        lg: "py-16 md:py-24", // Premium generous spacing
    };

    return (
        <section
            className={cn("w-full", spacings[spacing], className)}
            {...props}
        >
            {children}
        </section>
    );
}
