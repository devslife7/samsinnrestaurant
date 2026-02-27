import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

const HREF_MAP: Record<string, string> = {
    "Home": "#home",
    "Menu": "#menu",
    "Our Place": "#our-place",
    "Contact": "#contact",
};

export function Footer() {
    return (
        <footer className="bg-bg-dark border-t border-brand-red/30 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                {/* Left: Nav Links */}
                <div className="flex flex-col space-y-3 font-heading">
                    {restaurantData.navigation.map((label) => (
                        <Link
                            key={label}
                            href={HREF_MAP[label] ?? "#"}
                            className="text-off-white hover:text-red-light transition-colors uppercase tracking-wide text-sm"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Center: Logo + Address */}
                <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-14 h-14">
                        <Image
                            src="/bulldog-logo-nobg.png"
                            alt="Sam's Inn Bulldog"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-off-white font-heading text-sm uppercase tracking-wide">
                        Sam&apos;s Inn Bar Restaurant
                    </p>
                    <p className="text-muted-foreground text-sm">{restaurantData.address}</p>
                    <p className="text-stone text-xs italic">Inside Quantico Marine Corps Base</p>
                </div>

                {/* Right: Social */}
                <div className="flex justify-center md:justify-end gap-6 items-start pt-1">
                    {restaurantData.social.facebook && (
                        <Link href="#" className="text-off-white hover:text-red-light transition-colors" aria-label="Facebook">
                            <Facebook size={22} />
                        </Link>
                    )}
                    {restaurantData.social.instagram && (
                        <Link href="#" className="text-off-white hover:text-red-light transition-colors" aria-label="Instagram">
                            <Instagram size={22} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Bottom strip */}
            <div className="container mx-auto px-4 mt-10 pt-6 border-t border-brand-red/20 text-center space-y-1">
                <p className="text-zinc-500 font-heading italic text-sm tracking-wide">Semper Fi</p>
                <p className="text-muted-foreground text-xs">
                    &copy; {new Date().getFullYear()} Sam&apos;s Inn Bar Restaurant. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
