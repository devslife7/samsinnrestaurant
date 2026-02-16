import { Button } from "@/components/ui/button";

interface MenuCardProps {
    title: string;
    description: string;
    price: string;
    imageAlt: string;
}

export function MenuCard({ title, description, price, imageAlt }: MenuCardProps) {
    return (
        <div className="group bg-white rounded-none overflow-hidden hover:shadow-xl transition-shadow border border-zinc-100">
            <div className="relative h-48 sm:h-64 bg-zinc-200">
                {/* <Image src={imageSrc} alt={imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-white opacity-90">
                    <span>{imageAlt} Placeholder</span>
                </div>
            </div>
            <div className="p-6 space-y-3">
                <h3 className="font-heading text-2xl font-bold">{title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="pt-2 font-heading text-xl font-bold text-black border-t border-zinc-100 mt-4 pt-4 flex justify-between items-center">
                    <span>{price}</span>
                    {/* Optional Add Button */}
                    {/* <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-red-50">+</Button> */}
                </div>
            </div>
        </div>
    );
}
