import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-200 py-12 border-t border-zinc-300">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Left Column: Links */}
                <div className="flex flex-col space-y-2 font-heading text-lg">
                    <Link href="#" className="hover:text-primary transition-colors">Menu</Link>
                    <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Locations</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                {/* Center Column: Address and Info */}
                <div className="flex flex-col space-y-2 items-center">
                    <h4 className="font-heading text-lg font-bold">Contact Us</h4>
                    <p className="text-zinc-600 text-sm">123 Winner Dr</p>
                    <p className="text-zinc-600 text-sm">Conneos, VA 36405</p>
                    <Link href="https://www.samsinnbulldog.com" className="text-zinc-600 text-sm hover:underline">
                        www.samsinnbulldog.com
                    </Link>

                    <div className="mt-8">
                        <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center border border-zinc-300 mx-auto overflow-hidden">
                            <Image
                                src="/bulldog-logo.png"
                                alt="Sam's Inn Bulldog"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Socials */}
                <div className="flex justify-center md:justify-end gap-6">
                    <Link href="#" className="text-black hover:text-primary transition-colors"><Facebook size={24} /></Link>
                    <Link href="#" className="text-black hover:text-primary transition-colors"><Instagram size={24} /></Link>
                    <Link href="#" className="text-black hover:text-primary transition-colors"><Youtube size={24} /></Link>
                </div>

            </div>
            <div className="container mx-auto mt-12 pt-8 border-t border-zinc-300 text-center text-zinc-500 text-xs">
                &copy; {new Date().getFullYear()} Sam&apos;s Inn Restaurant. All rights reserved.
            </div>
        </footer>
    );
}
