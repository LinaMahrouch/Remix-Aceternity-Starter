import { MetaFunction } from "@remix-run/node";
import { AnimatedPinDemo } from "~/components/ui/animated-card";
import { FloatingNavDemo } from "~/components/ui/navbar-demo";
import { SparklesCore } from "~/components/ui/sparkles";



// Example card data
const cards = [
  { id: 1, title: "Card 1 Title", description: "Description for Card 1." },
  { id: 2, title: "Card 2 Title", description: "Description for Card 2." },
  { id: 3, title: "Card 3 Title", description: "Description for Card 3." },
];

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      {/* Ensure SparklesCore covers the entire page */}
      <FloatingNavDemo/>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full z-10"
        particleColor="#FFFFFF"
      />
      {/* Content container */}
      <div className="z-10 flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-7xl md:text-7xl lg:text-6xl font-bold text-white mt-12">
          Discover More
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {cards.map((card) => (
            <AnimatedPinDemo key={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

