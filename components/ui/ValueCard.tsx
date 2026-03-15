
import * as React from "react"

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export function ValueCard({ icon, title, desc }: ValueCardProps) {
    return (
        <div className="bg-white p-8 rounded-xl border border-sand-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="bg-sage-50 p-3 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    )
}
