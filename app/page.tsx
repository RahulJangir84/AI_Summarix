import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/CTA-section";
export default function Home() {
  return (
    <main>
      <div className="relative w-full">
        <div>
        <HeroSection />
        <DemoSection/>
        <HowItWorksSection/>
        <PricingSection/>
        <CTASection/>
        </div>
      </div>
      {/* <LayoutTextFlip text="Build Amazing" words={["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"]} />
        <Button>Button</Button>
        <TypewriterEffect words={[{ text: "Hello World" }]} /> */}
    </main>
  );
}
