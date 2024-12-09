import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Slides from "@/components/Slides";
import Subhero from "@/components/Subhero";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section aria-labelledby="hero-section">
        <Hero />
      </section>

      {/* SubHero Section */}
      <section aria-labelledby="subhero-section" className="py-12">
        <Subhero />
      </section>

      {/* Products Section */}
      <section aria-labelledby="products-section" className="py-12">
        <Product />
      </section>

      {/* Slides Section */}
      <section aria-labelledby="slides-section" className="py-12">
        <Slides />
      </section>
    </main>
  );
}
