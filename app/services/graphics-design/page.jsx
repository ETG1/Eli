import Link from "next/link";
import { Button } from "@/components/ui/button";

const GraphicsDesign = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="max-w-[800px] mx-auto">
          {/* Headline */}
          <h1 className="h1 text-center mb-8">Graphics Design</h1>
          
          {/* Intro */}
          <p className="text-primary/80 dark:text-white/80 mb-12 text-center">
            I offer professional graphic design services to help businesses create compelling visual identities. From logos and branding materials to marketing collateral, I design custom graphics that are visually appealing and align with your brand values.
          </p>

          {/* What I Offer */}
          <div className="mb-12">
            <h2 className="h3 mb-4">What I Offer</h2>
            <ul className="list-disc pl-6 text-primary/80 dark:text-white/80 space-y-2">
              <li>Logo design</li>
              <li>Brand identity design (business cards, letterheads, etc.)</li>
              <li>Marketing materials (brochures, flyers, posters)</li>
              <li>Social media graphics</li>
              <li>Website graphics and UI design</li>
            </ul>
          </div>

          {/* How I Work */}
          <div className="mb-12">
            <h2 className="h3 mb-4">How I Work</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Concept & Brainstorming:</span> We discuss your brand vision, preferences, and target audience to guide the design process.</p>
              <p><span className="font-semibold">Design & Revisions:</span> I present initial design concepts, and together we refine them until the final design is perfect.</p>
              <p><span className="font-semibold">Final Deliverables:</span> I provide print-ready and web-optimized files in the necessary formats.</p>
              <p><span className="font-semibold">Ongoing Branding Support:</span> I can offer updates or adjustments as your brand evolves.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <h2 className="h3 mb-4">Pricing</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Logo Design:</span> R5,000 - R10,000</p>
              <p><span className="font-semibold">Brand Identity Package</span> (Logo + Business Card + Letterhead): R12,000 - R25,000</p>
              <p><span className="font-semibold">Social Media Pack</span> (Cover photos, post templates, etc.): R3,000 - R8,000</p>
            </div>
          </div>

          {/* Pricing and Terms */}
          <div className="mb-16">
            <h2 className="h3 mb-4">Pricing and Terms</h2>
            
            <div className="space-y-6 text-primary/80 dark:text-white/80">
              <div>
                <h3 className="font-semibold mb-2">Tailored Solutions for Every Budget</h3>
                <p>Each project is unique, and I strive to provide custom solutions that meet your specific needs and objectives. The prices listed are estimates, and the final cost may vary based on the complexity of the project, additional features, or revisions required.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Payment Structure</h3>
                <p>To ensure a smooth workflow, I require a 50% deposit before starting work on any project. The remaining balance is due upon completion and before the final deliverables are provided. For long-term projects, we can arrange a suitable payment schedule.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Hourly Rates</h3>
                <p>For ongoing services such as maintenance, updates, or revisions, my hourly rate ranges from R500 to R1,500, depending on the scope of the work.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Project Timeline</h3>
                <p>I aim to provide realistic timelines and will work closely with you to ensure your project is completed to your satisfaction, within the agreed-upon timeframe. If any significant changes or delays occur, I will inform you promptly.</p>
              </div>

              <p className="italic">If you have any questions about pricing or would like a personalized quote, please don't hesitate to get in touch.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 dark:bg-white/5 py-12 rounded-2xl">
            <h2 className="h3 mb-4">Let's Create Something Amazing</h2>
            <p className="text-primary/80 dark:text-white/80 mb-6">
              Ready to elevate your brand with stunning visuals? Let's bring your vision to life.
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

export default GraphicsDesign; 