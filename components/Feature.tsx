import Image from "next/image";
import Link from "next/link";

export function Feature() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Illustration Placeholder */}
                <div className="w-full md:w-5/12 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                        <Image
                            src="/bulldog-logo.png"
                            alt="Sam's Inn Bulldog"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                <div className="w-full md:w-7/12 space-y-6 text-center md:text-left">
                    <h2 className="text-black font-heading text-2xl uppercase tracking-widest font-bold">
                        Tough on Hunger
                    </h2>
                    <h3 className="text-[#E04F3A] font-heading text-4xl md:text-6xl uppercase leading-none font-bold">
                        Crushing Cravings,<br />One Bite at a Time.
                    </h3>
                    <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
                        We don&apos;t just serve food; we conquer hunger with bold, hearty dishes designed for the toughest appetites.
                    </p>
                </div>
            </div>
        </section>
    );
}
