import { Beer, Mic2 } from "lucide-react";
import Image from "next/image";

export function BarSection() {
    return (
        <section id="bar" className="relative py-24 bg-bg-dark overflow-hidden">
            {/* Stone wall texture — subtle overlay */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url('/random-rubble-stone-wall.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content Column */}
                    <div>
                        {/* Big label + subline */}
                        <div className="mb-8">
                            <p className="font-heading text-off-white text-7xl md:text-[9rem] uppercase leading-none tracking-tight">
                                THE BAR
                            </p>
                            <p className="text-cream text-lg md:text-2xl font-light mt-3">
                                Cold Beer. Good People. On-Base Since &apos;74.
                            </p>
                        </div>

                        {/* Body copy */}
                        <p className="text-off-white/75 text-base md:text-lg mb-12 leading-relaxed">
                            After a long day on base, there&apos;s one place regulars know to go. Sam&apos;s Inn Bar is the
                            community hub of Quantico — cold pints, good company, karaoke nights, and the kind of no-nonsense
                            atmosphere that&apos;s been welcoming Marines and their families since 1974.
                        </p>

                        {/* Two feature cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="border border-white/15 bg-surface-dark p-8">
                                <Beer className="text-off-white/60 w-9 h-9 mb-4" />
                                <h3 className="font-heading text-off-white text-xl uppercase tracking-wide mb-3">
                                    DRINKS
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Cold domestic and imported beers on tap and in the bottle. Cocktails, mixed drinks,
                                    and all the bar staples you need. Ask your server what&apos;s on special.
                                </p>
                            </div>

                            <div className="border border-white/15 bg-surface-dark p-8">
                                <Mic2 className="text-off-white/60 w-9 h-9 mb-4" />
                                <h3 className="font-heading text-off-white text-xl uppercase tracking-wide mb-3">
                                    KARAOKE
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Regular karaoke nights open to all. Want to reserve the bar for your private party or
                                    unit event? Contact the manager to book your night.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-block border-2 border-white/60 text-off-white hover:bg-white hover:text-zinc-900 font-heading tracking-widest text-sm px-10 py-4 uppercase transition-colors"
                        >
                            RESERVE KARAOKE NIGHT
                        </a>
                    </div>

                    {/* Image Column */}
                    <div className="relative h-[600px] w-full hidden lg:block">
                        <div className="absolute inset-0 border border-white/10 p-4">
                            <div className="relative w-full h-full bg-surface-dark overflow-hidden">
                                <Image
                                    src="/bar-interior.png"
                                    alt="Sam's Inn Bar Interior"
                                    fill
                                    className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
