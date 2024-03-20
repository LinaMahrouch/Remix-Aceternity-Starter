import { MetaFunction } from "@remix-run/node";
import { AnimatedPinDemo } from "~/components/AnimatedCard";
import { HeroParallaxDemo } from "~/components/HeroParallel";
import { Navbar } from "~/components/Navbar";
//import { products } from "~/components/HeroParallel";
import { Header, HeroParallax } from "~/components/ui/hero-parralel";
import { SparklesCore } from "~/components/ui/sparkles";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix-Aceternity" },
    { name: "description", content: "Welcome to Remix-Acertenity" },
  ];
};

export default function Index() {
  
  return (
    <div>
      <Navbar />
      <HeroParallaxDemo/>
    </div>
  );
    ;
  }
// Example card da

export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
  
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
  
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
  
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

// export default function Test() {
//   return (
//     <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
//       <div className="w-full absolute inset-0">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>
//       <div className="z-10 text-center">
//         <h1 className="text-7xl md:text-7xl lg:text-6xl font-bold text-white m-12">
//           Remix Acertenity Starter
//         </h1>
//         {/* Adjust the container here to align cards horizontally */}
//         <div className="flex justify-center items-center gap-10">
//           {cards.map((card) => (
//             <AnimatedPinDemo key={card.id} title={card.title} description={card.description} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
