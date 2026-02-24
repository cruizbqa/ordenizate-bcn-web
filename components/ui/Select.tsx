'use client';

import * as React from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    className?: string;
}

export function Select({
    options,
    value,
    onChange,
    placeholder = 'Selecciona una opción',
    error,
    disabled = false,
    className
}: SelectProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    // Mobile detection & Mounting state
    React.useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            const userAgent = typeof window.navigator !== 'undefined' ? window.navigator.userAgent : '';
            const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
            setIsMobile(mobile);
        };

        checkMobile();
    }, []);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={cn('relative w-full', className)} ref={containerRef}>
            <div className="relative group">
                {/* Visual Button */}
                <button
                    type="button"
                    onClick={() => !disabled && (!mounted || !isMobile) && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={cn(
                        'flex h-11 w-full items-center justify-between rounded-xl border bg-white px-4 py-2 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent',
                        error ? 'border-red-300 bg-red-50' : 'border-sand-200 group-hover:border-sand-300',
                        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                        isOpen && 'ring-2 ring-sage-500 border-transparent shadow-sm'
                    )}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <span className={cn('block truncate', !selectedOption && 'text-gray-400')}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <ChevronDown className={cn('h-4 w-4 text-gray-400 transition-transform duration-300 ease-in-out', isOpen && 'rotate-180 text-sage-600')} />
                </button>

                {/* Native Select Overlay for Mobile - only rendered after mount for stability */}
                {mounted && isMobile && (
                    <select
                        value={value}
                        onChange={(e) => handleSelect(e.target.value)}
                        disabled={disabled}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none z-10"
                    >
                        <option value="" disabled>{placeholder}</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                )}
            </div>

            {/* Custom Dropdown for Desktop */}
            {(!isMobile || !mounted) && isOpen && (
                <div
                    className="absolute z-[100] left-0 right-0 mt-2 max-h-72 overflow-auto rounded-2xl bg-white p-2 text-base shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm animate-in fade-in slide-in-from-top-3 duration-300 custom-scrollbar border border-sand-100"
                >
                    <ul role="listbox" className="space-y-1">
                        {options.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    'relative cursor-pointer select-none rounded-xl py-3 pl-4 pr-10 transition-all duration-200',
                                    value === option.value
                                        ? 'bg-sage-50 text-sage-700 border-l-4 border-sage-500'
                                        : 'text-gray-700 hover:bg-sand-50 hover:text-charcoal-900'
                                )}
                                role="option"
                                aria-selected={value === option.value}
                            >
                                <span className={cn('block truncate', value === option.value ? 'font-semibold' : 'font-normal')}>
                                    {option.label}
                                </span>

                                {value === option.value && (
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-sage-600">
                                        <Check className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {error && <p className="text-[10px] text-red-500 font-medium ml-1">{error}</p>}
        </div>
    );
}
