import Link from "next/link";
import { Button } from "@/components/ui/button";

const LogoDesign = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="max-w-[800px] mx-auto">
          {/* Headline */}
          <h1 className="h1 text-center mb-8">Logo Design</h1>
          
          {/* Intro */}
          <p className="text-primary/80 dark:text-white/80 mb-12 text-center">
            A logo is the foundation of your brand identity. I design distinctive logos that communicate your brand's essence, making a strong first impression and ensuring consistency across all platforms.
          </p>

          {/* What I Offer */}
          <div className="mb-12">
            <h2 className="h3 mb-4">What I Offer</h2>
            <ul className="list-disc pl-6 text-primary/80 dark:text-white/80 space-y-2">
              <li>Custom logo design (text, icon, or combination)</li>
              <li>Logo redesigns and brand refreshes</li>
              <li>Color palette and typography selection</li>
              <li>Scalable logos for all use cases (print, web, etc.)</li>
              <li>Branding consultation to align with your brand story</li>
            </ul>
          </div>

          {/* How I Work */}
          <div className="mb-12">
            <h2 className="h3 mb-4">How I Work</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Discovery:</span> We discuss your business, values, and target audience to craft a logo that resonates with your market.</p>
              <p><span className="font-semibold">Concept Creation:</span> I create 3-5 initial logo concepts, each exploring a different design direction.</p>
              <p><span className="font-semibold">Refinement:</span> After receiving feedback, I refine the logo until it aligns perfectly with your brand identity.</p>
              <p><span className="font-semibold">Final Delivery:</span> I provide vector files and other necessary formats for various uses.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="h3 mb-4">Pricing</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Basic Logo Design:</span> R3,000 - R7,000</p>
              <p><span className="font-semibold">Premium Logo Design:</span> R7,000 - R15,000 (includes branding guidelines)</p>
              <p><span className="font-semibold">Logo & Brand Identity Package:</span> R10,000 - R25,000</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 dark:bg-white/5 py-12 rounded-2xl">
            <h2 className="h3 mb-4">Ready to Build Your Brand?</h2>
            <p className="text-primary/80 dark:text-white/80 mb-6">
              Let's create a logo that perfectly represents your brand and makes you stand out from the competition.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesign; 