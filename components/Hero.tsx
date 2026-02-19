import Image from "next/image";

export function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                backgroundImage: "url('/hero-stone-wall.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark red overlay */}
            <div className="absolute inset-0 bg-bg-dark/85" />



            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-6 max-w-4xl">
                {/* Location label */}
                <p className="font-heading text-stone tracking-[0.3em] text-xs md:text-sm uppercase">
                    QUANTICO, VA &bull; EST. 1974
                </p>

                {/* Main headline */}
                <h1 className="font-heading text-off-white uppercase leading-none tracking-tight">
                    <span className="block text-6xl md:text-9xl">SAM&apos;S INN</span>
                    <span className="block text-4xl md:text-6xl text-cream mt-2">BAR &amp; RESTAURANT</span>
                </h1>

                {/* Tagline */}
                <p className="text-off-white/80 text-base md:text-xl font-light max-w-lg">
                    Honoring the USMC Since 1974 &mdash; Semper Fi
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                        href="#menu"
                        className="bg-brand-red hover:bg-red-dark text-off-white font-heading tracking-widest text-sm px-8 py-4 uppercase transition-colors"
                    >
                        SEE THE MENU
                    </a>
                    <a
                        href="#bar"
                        className="border-2 border-white/60 text-off-white hover:bg-white hover:text-zinc-900 font-heading tracking-widest text-sm px-8 py-4 uppercase transition-colors"
                    >
                        THE BAR
                    </a>
                </div>
            </div>

            {/* Bottom red line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-red" />
        </section>
    );
}
