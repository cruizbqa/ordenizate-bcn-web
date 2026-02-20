'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface ContactItemProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    copyable?: boolean;
}

export function ContactItem({ icon, title, content, copyable }: ContactItemProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard API failed silently — user can still read the value on screen
        }
    };

    return (
        <div className="flex gap-4">
            <div className="bg-sand-50 p-3 rounded-lg h-fit">
                {icon}
            </div>
            <div className="flex flex-col flex-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</span>
                {copyable ? (
                    <div className="flex items-center gap-2">
                        <span className="text-charcoal-900 font-medium">{content}</span>
                        <button
                            onClick={handleCopy}
                            className="p-1.5 rounded-md hover:bg-sand-100 transition-colors text-gray-500 hover:text-sage-600"
                            title="Copiar al portapapeles"
                            aria-label={`Copiar ${title}`}
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                ) : (
                    <span className="text-charcoal-900 font-medium">{content}</span>
                )}
            </div>
        </div>
    );
}
