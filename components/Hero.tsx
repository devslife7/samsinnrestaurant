import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative bg-black text-white py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 z-10 space-y-6">
                    <h1 className="font-heading text-5xl md:text-7xl uppercase leading-tight tracking-tight">
                        <span className="block text-white">Sam&apos;s Inn:</span>
                        <span className="block text-[#E63946]">Bulldog Edition</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-sans font-light">
                        Bold Flavors. Uncompromising Quality.
                    </p>
                    <Button className="bg-[#E63946] hover:bg-[#d62839] text-white font-heading tracking-wider text-xl px-8 py-6 rounded-sm shadow-lg mt-4">
                        ORDER NOW
                    </Button>
                </div>

                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                    {/* <Image src="/steak-hero.jpg" alt="Steak on Grill" fill className="object-cover rounded-lg shadow-2xl" /> */}
                    <div className="absolute inset-0 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
                        <span className="text-zinc-500 font-heading text-2xl">Steak Image Placeholder</span>
                    </div>
                    {/* Smoke effect could be added with CSS or an image overlay */}
                </div>
            </div>

            {/* Background patterns or gradients could be added here */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50 pointer-events-none" />
        </section>
    );
}
