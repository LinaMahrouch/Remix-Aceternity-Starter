import { MetaFunction } from "@remix-run/node";
import { AnimatedPinDemo } from "~/components/AnimatedCard";
import { SparklesCore } from "~/components/ui/sparkles";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Example card data
const cards = [
  { id: 1, title: "Card 1 Title", description: "Description for Card 1." },
  { id: 2, title: "Card 2 Title", description: "Description for Card 2." },
  { id: 3, title: "Card 3 Title", description: "Description for Card 3." },
];

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="z-10 text-center">
        <h1 className="text-7xl md:text-7xl lg:text-6xl font-bold text-white m-12">
          Remix Acertenity Starter
        </h1>
        {/* Adjust the container here to align cards horizontally */}
        <div className="flex justify-center items-center gap-10">
          {cards.map((card) => (
            <AnimatedPinDemo key={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}
