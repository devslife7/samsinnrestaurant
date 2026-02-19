"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

const HREF_MAP: Record<string, string> = {
    "Home": "#home",
    "Menu": "#menu",
    "Our Place": "#our-place",
    "Contact": "#contact",
};

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navLinks = restaurantData.navigation;

    return (
        <nav className="bg-white border-b border-zinc-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between relative">

                {/* Mobile Menu Toggle */}
                <div className="md:hidden z-10">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-zinc-800 hover:text-brand-red transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Desktop Nav - Left */}
                <div className="hidden md:flex items-center space-x-8 font-heading text-sm tracking-widest">
                    {navLinks.map((label) => (
                        <Link
                            key={label}
                            href={HREF_MAP[label] ?? "#"}
                            className="text-zinc-800 hover:text-brand-red transition-colors uppercase"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="#home">
                        <div className="relative w-16 h-14 md:w-24 md:h-20">
                            <Image
                                src="/bulldog-logo.png"
                                alt="Sam's Inn Bulldog"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                </div>

                {/* ORDER ONLINE Button */}
                <div className="z-10">
                    <a
                        href="#menu"
                        className="bg-brand-red hover:bg-red-dark text-off-white font-heading tracking-widest text-xs md:text-sm px-3 py-2 md:px-5 md:py-3 uppercase transition-colors"
                    >
                        ORDER ONLINE
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-zinc-200 py-4 px-4 flex flex-col space-y-1">
                    {navLinks.map((label) => (
                        <Link
                            key={label}
                            href={HREF_MAP[label] ?? "#"}
                            className="text-zinc-800 hover:text-brand-red transition-colors font-heading text-base uppercase py-3 border-b border-zinc-100 block tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
