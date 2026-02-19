import Image from "next/image";

interface MenuCardProps {
    name: string;
    description: string;
    price: number;
    imageAlt: string;
    imageUrl?: string;
    badge?: string | null;
    note?: string | null;
}

export function MenuCard({ name, description, price, imageAlt, imageUrl, badge, note }: MenuCardProps) {
    return (
        <div className="group bg-white border border-zinc-200 hover:border-zinc-400 overflow-hidden transition-colors">
            {/* Image placeholder or actual image */}
            <div className="relative h-44 bg-zinc-100 flex items-center justify-center border-b border-zinc-200 overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-zinc-400 text-xs font-heading uppercase tracking-wide px-3 text-center">
                        {imageAlt}
                    </span>
                )}
            </div>

            <div className="p-5 space-y-2">
                {/* Badge */}
                {badge && (
                    <span className="inline-block bg-brand-red text-white text-xs font-heading tracking-wide px-2 py-1 uppercase">
                        {badge}
                    </span>
                )}

                <h3 className="font-heading text-zinc-900 text-base uppercase leading-snug">{name}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed line-clamp-3">{description}</p>

                {/* Note */}
                {note && (
                    <p className="text-zinc-400 text-xs italic">{note}</p>
                )}

                <div className="pt-3 border-t border-zinc-100 flex items-center">
                    <span className="font-heading text-zinc-900 text-xl">
                        ${price.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
}
