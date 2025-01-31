import Link from "next/link";
import { Button } from "@/components/ui/button";

const AppDevelopment = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <div className="max-w-[800px] mx-auto">
          {/* Headline */}
          <h1 className="h1 text-center mb-8">App Development</h1>
          
          {/* Intro */}
          <p className="text-primary/80 dark:text-white/80 mb-12 text-center">
            I develop custom mobile apps for iOS, Android, and cross-platform solutions. From intuitive design to powerful functionality, I ensure your app meets your users' needs and provides a seamless experience.
          </p>

          {/* What I Offer */}
          <div className="mb-12">
            <h2 className="h3 mb-4">What I Offer</h2>
            <ul className="list-disc pl-6 text-primary/80 dark:text-white/80 space-y-2">
              <li>Native mobile apps (iOS, Android)</li>
              <li>Cross-platform apps (using frameworks like Flutter or React Native)</li>
              <li>App UI/UX design</li>
              <li>Integration with APIs and third-party services</li>
              <li>App maintenance and updates</li>
            </ul>
          </div>

          {/* How I Work */}
          <div className="mb-12">
            <h2 className="h3 mb-4">How I Work</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Concept & Planning:</span> We define your app's objectives, key features, and target audience to ensure it meets user needs.</p>
              <p><span className="font-semibold">Design & Development:</span> I build the app, focusing on both design and functionality for an intuitive experience.</p>
              <p><span className="font-semibold">Testing & QA:</span> Rigorous testing to ensure your app performs flawlessly across all devices.</p>
              <p><span className="font-semibold">Launch & Maintenance:</span> Once the app is live, I continue to provide support and updates to ensure optimal performance.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="h3 mb-4">Pricing</h2>
            <div className="space-y-4 text-primary/80 dark:text-white/80">
              <p><span className="font-semibold">Basic App Development:</span> R50,000 - R80,000 (for simple apps with core functionality)</p>
              <p><span className="font-semibold">Complex App Development:</span> R100,000 and up (for apps with advanced features, custom integrations, etc.)</p>
              <p><span className="font-semibold">App Maintenance:</span> R500 - R1,500 per hour, or a monthly retainer based on app complexity</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/5 dark:bg-white/5 py-12 rounded-2xl">
            <h2 className="h3 mb-4">Transform Your App Idea into Reality</h2>
            <p className="text-primary/80 dark:text-white/80 mb-6">
              Ready to build your next great app? Let's discuss how we can bring your vision to life.
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

export default AppDevelopment; 