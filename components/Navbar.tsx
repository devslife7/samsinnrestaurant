"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 md:h-32 flex items-center justify-between relative">
                {/* Mobile Menu Toggle - Left on Mobile */}
                <div className="md:hidden z-10">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMobileMenu}
                        className="px-2"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Desktop Navigation - Left */}
                <div className="hidden md:flex items-center space-x-8 font-heading text-lg tracking-wide">
                    <Link href="#" className="hover:text-primary transition-colors">Menu</Link>
                    <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Locations</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Center Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-24 h-16 md:w-40 md:h-32 flex items-center justify-center">
                        <Link href="/">
                            <Image
                                src="/bulldog-logo.png"
                                alt="Sam's Inn Bulldog"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-4 z-10">
                    <Button className="bg-[#E63946] hover:bg-[#d62839] text-white font-heading tracking-wider text-sm md:text-lg px-3 py-1 md:px-6 md:py-2 h-auto rounded-sm shadow-md">
                        ORDER ONLINE
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors font-heading text-lg block py-2 border-b border-border/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Menu
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors font-heading text-lg block py-2 border-b border-border/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors font-heading text-lg block py-2 border-b border-border/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Locations
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors font-heading text-lg block py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
