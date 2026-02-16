import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Feature } from "@/components/Feature";
import { MenuCard } from "@/components/MenuCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  const menuItems = [
    {
      title: "Bulldog Burger",
      description: "Bulldog Burger with colby/jack cheese, custom sauce, lettuce, tomato and grilled with charcoal smoke.",
      price: "$13.99",
      imageAlt: "Burger",
    },
    {
      title: "Tough Steak Tacos",
      description: "Loaded with our signature smoked tacos, onions, cilantro, salsa and sour cream.",
      price: "$13.99",
      imageAlt: "Tacos",
    },
    {
      title: "Iron Skillet Mac & Cheese",
      description: "Delicious secret, trash skillet, & cheese, and cornbread; Iron skillet mac & cheese.",
      price: "$14.99",
      imageAlt: "Mac & Cheese",
    },
    {
      title: "Firehouse Wings",
      description: "Secret twist, Firehouse wings wings, tossed with choice of hot, mild, or sweet tangy sauce.",
      price: "$18.99",
      imageAlt: "Wings",
    },
    {
      title: "Braner Burger",
      description: "Bulldog Burger topped chicken and with savory am notices, strippers and molasses.",
      price: "$20.99",
      imageAlt: "Pizza",
    },
    {
      title: "Body Burger",
      description: "We don't just serve food, we conquer hungers with bold, hearty dishes designed for the toughest appetites.",
      price: "$12.99",
      imageAlt: "Chicken Sandwich",
    },
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <Feature />

      {/* Menu Grid Section */}
      <section className="py-16 bg-white container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
