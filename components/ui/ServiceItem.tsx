interface ServiceItemProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export function ServiceItem({ title, description, icon }: ServiceItemProps) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 bg-sand-50 p-2 rounded-lg h-fit">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-charcoal-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    )
}
