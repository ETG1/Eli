import Link from "next/link";
import { Button } from "@/components/ui/button";

const WebDevelopment = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="max-w-[800px] mx-auto">
          {/* Headline */}
          <h1 className="h1 text-center mb-8">Web Development</h1>
          
          {/* Intro */}
          <p className="text-primary/80 dark:text-white/80 mb-12 text-center">
            I specialize in creating responsive, user-friendly websites tailored to your business needs. Whether you're looking for a simple landing page, a blog, or a robust e-commerce platform, I ensure that your website provides an excellent user experience and meets your business objectives.
          </p>

          {/* What I Offer */}
          <div className="mb-12">
            <h2 className="h3 mb-4">What I Offer</h2>
            <ul className="list-disc pl-6 text-primary/80 dark:text-white/80 space-y-2">
              <li>Custom website design and development</li>
              <li>Front-end and back-end development</li>
              <li>Mobile-friendly (responsive) websites</li>
              <li>CMS-based websites (WordPress, etc.)</li>
              <li>E-commerce website development (Shopify, WooCommerce, etc.)</li>
              <li>Website maintenance and support</li>
            </ul>
          </div>

          {/* How I Work */}
          <div className="mb-12">
            <h2 className="h3 mb-4">How I Work</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Discovery & Planning:</span> We start by understanding your goals, target audience, and features required for the website.</p>
              <p><span className="font-semibold">Design & Development:</span> I create mockups, develop the website structure, and integrate necessary functionalities.</p>
              <p><span className="font-semibold">Testing & Launch:</span> I ensure the website works smoothly across all devices, conducting quality assurance before launching.</p>
              <p><span className="font-semibold">Ongoing Support:</span> I offer continuous support for updates, troubleshooting, and maintaining your website post-launch.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="h3 mb-4">Pricing</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Basic Website</span> (up to 5 pages, no custom features): R10,000 - R15,000</p>
              <p><span className="font-semibold">E-commerce Website</span> (up to 50 products, payment integration): R25,000 - R40,000</p>
              <p><span className="font-semibold">Custom Web Development</span> (large-scale projects, custom features): R50,000 and up, depending on complexity</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 dark:bg-white/5 py-12 rounded-2xl">
            <h2 className="h3 mb-4">Let's Work Together</h2>
            <p className="text-primary/80 dark:text-white/80 mb-6">
              Ready to bring your web project to life? Let's discuss how I can help you achieve your goals.
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

export default WebDevelopment; 