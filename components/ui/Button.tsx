import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

// next-intl types href as the app's pathname union; Button is a generic boundary
const LocalizedLink = Link as unknown as React.ComponentType<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string }
>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    className?: string;
    target?: string;
    rel?: string;
}

export function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    className,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary:
            "bg-sage-600 text-white hover:bg-sage-700 shadow-md hover:shadow-lg focus:ring-sage-600",
        secondary:
            "bg-sand-200 text-charcoal-900 hover:bg-sand-300 shadow-sm hover:shadow-md focus:ring-sand-400",
        outline:
            "border border-sage-500 text-sage-600 hover:bg-sage-50 focus:ring-sage-500",
        ghost:
            "text-charcoal-900 hover:bg-sand-100/50 hover:text-sage-600",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
    };

    const styles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        const linkProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;

        // External links must bypass the locale-aware router
        if (/^[a-z]+:/i.test(href) || href.startsWith('//')) {
            return (
                <a href={href} className={styles} {...linkProps}>
                    {children}
                </a>
            );
        }

        return (
            <LocalizedLink href={href} className={styles} {...linkProps}>
                {children}
            </LocalizedLink>
        );
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    );
}
