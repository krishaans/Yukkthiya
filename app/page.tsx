import { HeroSection } from '@/components/sections/hero';
import { DemoVideoSection } from '@/components/sections/demo-video';
import { MarketingVideoSection } from '@/components/sections/marketing-video';
import { ProblemSection } from '@/components/sections/problem';
import { FeaturesSection } from '@/components/sections/features';
import { VisionSection } from '@/components/sections/vision';
import { WhyChooseSection } from '@/components/sections/why-choose';
import { ComparisonSection } from '@/components/sections/comparison';
import { TeamSection } from '@/components/sections/team';
import { FeedbackSection } from '@/components/sections/feedback';
import { DownloadSection } from '@/components/sections/download';
import { ContactSection } from '@/components/sections/contact';
import { CTASection } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MarketingVideoSection />
      <ProblemSection />
      <FeaturesSection />
      <DemoVideoSection />
      <VisionSection />
      <WhyChooseSection />
      <ComparisonSection />
      <TeamSection />
      <FeedbackSection />
      <DownloadSection />
      <ContactSection />
      <CTASection />
    </div>
  );
}