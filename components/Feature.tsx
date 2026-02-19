import { QrCode, UtensilsCrossed, Mic2, Beer } from "lucide-react";

interface Feature {
    title: string;
    description: string;
}

interface FeatureStripProps {
    features: Feature[];
}

const ICONS = [QrCode, UtensilsCrossed, Mic2, Beer] as const;

const BAR_FEATURE: Feature = {
    title: "The Bar",
    description: "Cold beer, cocktails, and bar staples. The community hub of Quantico since '74.",
};

export function FeatureStrip({ features }: FeatureStripProps) {
    const allFeatures = [...features, BAR_FEATURE];

    return (
        <section className="py-16 bg-white border-b border-zinc-100">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-brand-red text-2xl md:text-3xl uppercase tracking-widest text-center mb-12">
                    MORE THAN A MEAL
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allFeatures.map((feature, index) => {
                        const Icon = ICONS[index];
                        return (
                            <div
                                key={feature.title}
                                className="bg-white border border-zinc-200 p-6 flex flex-col gap-4"
                            >
                                <Icon className="text-zinc-500 w-7 h-7" />
                                <h3 className="font-heading text-zinc-900 text-lg uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
