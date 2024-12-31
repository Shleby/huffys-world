// pages/index.tsx
import { AboutMe } from "@/components/shared/about/AboutMe";
import { Education } from "@/components/shared/about/Education";
import { MusicExperience } from "@/components/shared/about/MusicExperience";
import { QuickInfo } from "@/components/shared/about/QuickInfo";
import { SkillsOverview } from "@/components/shared/about/SkillsOverview";
import { WorkExperience } from "@/components/shared/about/WorkExperience";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <main className="2xl:container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <div className="col-span-1 md:col-span-3 lg:col-span-4 grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* About Me */}
            <AboutMe />

            {/* Quick Info */}
            <QuickInfo />
          </div>

          {/* Skills Overview */}
          <SkillsOverview />

          {/* Portfolio Showcase */}
          {/* <PortfolioShowcase /> */}

          {/* Work Experience & Education */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            <WorkExperience />
            <Education />
          </div>

          {/* Music Experience */}
          <MusicExperience />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
