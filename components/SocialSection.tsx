import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function SocialSection() {
    return (
        <section className="py-20 bg-bg-dark">
            <div className="container mx-auto px-4 text-center">
                <p className="font-heading text-brand-red text-xs uppercase tracking-[0.3em] mb-4">
                    Stay Connected
                </p>
                <h2 className="font-heading text-off-white text-4xl md:text-5xl uppercase leading-tight mb-4">
                    Follow Us
                </h2>
                <p className="text-stone text-base md:text-lg mb-10 max-w-md mx-auto">
                    Keep up with our daily specials, events, and everything happening at Sam&apos;s Inn.
                </p>

                <div className="flex justify-center gap-8">
                    {/* Facebook */}
                    <Link
                        href="#"
                        aria-label="Follow us on Facebook"
                        className="group flex flex-col items-center gap-3 text-off-white hover:text-red-light transition-colors"
                    >
                        <div className="border border-brand-red/40 group-hover:border-red-light rounded-full p-5 transition-colors">
                            <Facebook size={32} />
                        </div>
                        <span className="font-heading text-xs uppercase tracking-widest">Facebook</span>
                    </Link>

                    {/* Instagram */}
                    <Link
                        href="#"
                        aria-label="Follow us on Instagram"
                        className="group flex flex-col items-center gap-3 text-off-white hover:text-red-light transition-colors"
                    >
                        <div className="border border-brand-red/40 group-hover:border-red-light rounded-full p-5 transition-colors">
                            <Instagram size={32} />
                        </div>
                        <span className="font-heading text-xs uppercase tracking-widest">Instagram</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
