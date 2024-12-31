"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RotatingProfilePicture } from "@/components/shared/home/RotatingProfilePicture";
import { StatCounter } from "@/components/shared/home/StatCounter";
import { Button } from "@/components/ui/button";
import WorkHuffy from "@assets/work_suit_huffy.jpg";
import CarnegieHuffy from "@assets/carnegie_huffy.png";
import PitTechHuffy from "@assets/pit_tech_huffy.jpg";
import Footer from "@/components/shared/footer";
import { ServicesSection } from "@/components/shared/home/ServicesSection";
import { PortfolioShowcase } from "@/components/shared/about/PortfolioShowcase";
import { SkillsHighlight } from "@/components/shared/home/SkillsHighlight";
import { StoreShowcase } from "@/components/shared/home/StoreShowcase";
import { BlogShowcase } from "@/components/shared/home/BlogShowcase";
import { ContactMe } from "@/components/shared/home/ContactMe";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ArrowRight } from "lucide-react";
import { WarpBackground } from "@/components/ui/warp-background";
import Globe from "@/components/ui/globe";

export default function HomePage() {
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const profileImages = [WorkHuffy, CarnegieHuffy, PitTechHuffy];
  const customConfig = {
    baseColor: [0.294, 0.3, 0.51] as [number, number, number], // Red base color
    markerColor: [1, 0.8, 0.2] as [number, number, number], // Green markers
    glowColor: [0.5, 0.5, 1] as [number, number, number], // Blue glow
  };
  return (
    <div className="bg-neutral-100 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="relative min-h-screen overflow-hidden">
        <WarpBackground>
          {/* <Ripple /> */}
          {/* Hero Card */}
          <div className="sm:relative z-10 min-h-screen flex items-center sm:justify-center p-0  sm:p-4">
            <Globe
              className="hidden lg:block lg:top-0 xl:top-0 z-[-1]"
              config={customConfig}
            />
            <div className="sm:container max-w-5xl rounded-3xl bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left column: Profile picture and name */}
                <div className="p-2 sm:p-8 text-center md:text-left">
                  <RotatingProfilePicture
                    images={profileImages}
                    size={200}
                    interval={7000}
                  />
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl text-center lg:text-left font-bold bg-clip-text text-transparent mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700"
                  >
                    Shelby Huffman
                  </motion.h1>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-center lg:text-left font-semibold text-gray-700 dark:text-gray-300 mt-2"
                  >
                    Software Engineer & Music Educator
                  </motion.h2>
                </div>

                {/* Right column: Stats and buttons */}
                <div className="p-2 sm:p-8 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-l-3xl">
                  {/* <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
                    <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"> */}
                  {/* </span> */}
                  {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                  </div> */}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="grid grid-cols-3 gap-4 mb-8"
                  >
                    <StatCounter
                      end={10}
                      duration={5}
                      label="Years Experience"
                      plus
                    />
                    <StatCounter
                      end={47}
                      duration={5}
                      label="Projects Completed"
                    />
                    <StatCounter
                      end={500}
                      duration={5}
                      label="Students Taught"
                      around
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col space-y-4"
                  >
                    <Link href="#services" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-neutral-50 dark:hover:text-neutral-950 transition-all duration-300"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </WarpBackground>
      </section>
      <TracingBeam>
        <SkillsHighlight />
        <ServicesSection />
        <StoreShowcase />
        <BlogShowcase />
        <PortfolioShowcase />
        <ContactMe />
      </TracingBeam>
      <Footer />
    </div>
  );
}
