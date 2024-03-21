import { MetaFunction } from "@remix-run/node";
import { AnimatedPinDemo } from "~/components/ui/animated-card";
import { HeroParallaxDemo } from "~/components/ui/parellel-hero";
import { Navbar } from "~/components/ui/navbar";
import { FloatingNavDemo } from "~/components/ui/navbar-demo";
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
      <Navbar/>
      <FloatingNavDemo/>
      <HeroParallaxDemo/>
    </div>
  );
    ;
  }



