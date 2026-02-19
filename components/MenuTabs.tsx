"use client";

import { useState } from "react";
import { MenuCard } from "@/components/MenuCard";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    badge: string | null;
    note: string | null;
    imageAlt: string;
    imageUrl?: string;
}

interface MenuCategory {
    category: string;
    title: string;
    items: MenuItem[];
}

interface MenuTabsProps {
    menus: MenuCategory[];
}

const TAB_LABELS: Record<string, string> = {
    breakfast: "BREAKFAST",
    todays_recommendations: "TODAY'S PICKS",
    all_day_special: "ALL DAY SPECIAL",
};

export function MenuTabs({ menus }: MenuTabsProps) {
    const [activeCategory, setActiveCategory] = useState(menus[0]?.category ?? "");
    const activeMenu = menus.find((m) => m.category === activeCategory);

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="font-heading text-zinc-900 text-2xl md:text-4xl uppercase tracking-widest text-center mb-10">
                    THE MENU
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center border-b border-zinc-200 mb-10">
                    {menus.map((menu) => (
                        <button
                            key={menu.category}
                            onClick={() => setActiveCategory(menu.category)}
                            className={`font-heading text-xs md:text-sm uppercase tracking-widest px-5 py-3 border-b-2 transition-colors ${activeCategory === menu.category
                                    ? "border-brand-red text-zinc-900"
                                    : "border-transparent text-zinc-400 hover:text-zinc-700"
                                }`}
                        >
                            {TAB_LABELS[menu.category] ?? menu.title}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                {activeMenu && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
                        {activeMenu.items.map((item) => (
                            <MenuCard
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                imageAlt={item.imageAlt}
                                imageUrl={item.imageUrl}
                                badge={item.badge}
                                note={item.note}
                            />
                        ))}
                    </div>
                )}

                {/* View Full Menu CTA */}
                <div className="text-center">
                    <a
                        href="#"
                        className="inline-block border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white font-heading tracking-widest text-sm px-10 py-4 uppercase transition-colors"
                    >
                        VIEW FULL MENU
                    </a>
                </div>
            </div>
        </section>
    );
}
