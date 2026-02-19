import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureStrip } from "@/components/Feature";
import { BarSection } from "@/components/BarSection";
import { MenuTabs } from "@/components/MenuTabs";
import { AboutSection } from "@/components/AboutSection";
import { HoursTable } from "@/components/HoursTable";
import { Footer } from "@/components/Footer";
import restaurantData from "@/data/restaurant.json";
import menuData from "@/data/menu.json";

export default function Home() {
    return (
        <main className="min-h-screen bg-bg-dark flex flex-col">
            <Navbar />
            <Hero />
            <FeatureStrip features={restaurantData.features} />
            <BarSection />
            <MenuTabs menus={menuData.menus} />
            <AboutSection />
            <HoursTable
                hours={restaurantData.hours}
                address={restaurantData.address}
                social={restaurantData.social}
            />
            <Footer />
        </main>
    );
}
