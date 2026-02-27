import Image from "next/image";

export function AboutSection() {
    return (
        <section id="our-place" className="py-20 bg-bg-dark">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Text */}
                    <div className="space-y-6">
                        <p className="font-heading text-brand-red text-xs uppercase tracking-[0.3em]">
                            OUR PLACE
                        </p>
                        <h2 className="font-heading text-off-white text-4xl md:text-5xl uppercase leading-tight">
                            Hole in the Wall.
                            <br />
                            Heart of the Base.
                        </h2>
                        <div className="space-y-4 text-zinc-300 text-base md:text-lg leading-relaxed">
                            <p>
                                Sam&apos;s Inn has been feeding and refreshing the Quantico community since 1974.
                                Tucked inside Marine Corps Base Quantico, we&apos;ve served generations of Marines,
                                civilians, and families who call this base home.
                            </p>
                            <p>
                                We&apos;re not a chain. We&apos;re not trying to be fancy. We&apos;re the kind of place
                                where generous portions come standard, the staff knows your name, and the atmosphere is
                                exactly what it should be after a hard day: easy and honest.
                            </p>
                            <p>
                                Half bar, half restaurant — all Sam&apos;s.
                            </p>
                        </div>

                        {/* Pull quote */}
                        <blockquote className="border-l-4 border-brand-red pl-6 py-2">
                            <p className="text-brand-red font-heading text-base md:text-lg italic">
                                &ldquo;Honoring the USMC Since 1974 &mdash; Semper Fi&rdquo;
                            </p>
                        </blockquote>
                    </div>

                    {/* Bulldog logo */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
                            <Image
                                src="/bulldog-logo-nobg.png"
                                alt="Sam's Inn Bulldog Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
