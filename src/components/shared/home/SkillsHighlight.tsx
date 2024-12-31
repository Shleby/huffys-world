"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Code, Music, Brain, Cpu, Users, Cog } from "lucide-react";

const SkillCircle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={`z-10 flex w-16 h-16 md:w-20 md:h-20 items-center justify-center rounded-full border-2 bg-white dark:bg-neutral-800 p-3 md:p-4 shadow-lg ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
});

SkillCircle.displayName = "SkillCircle";

export function SkillsHighlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const webDevRef = useRef<HTMLDivElement>(null);
  const musicRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const systemsRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          Bridging Technology and Creativity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          As a versatile professional, I bring a unique blend of software
          engineering expertise and musical prowess to every project.
        </motion.p>
        <Card className="bg-white dark:bg-gray-800 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
              <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-800 dark:text-neutral-200">
                  Versatile Expertise
                </h3>
                <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I have a diverse background in technology and the arts. My
                  skills and experience include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                    <Code className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
                    <span>
                      Object Oriented Programming & Full-stack web development
                    </span>
                  </li>
                  <li className="flex items-center text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                    <Music className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                    <span>Music education and performance</span>
                  </li>
                  <li className="flex items-center text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                    <Cpu className="w-6 h-6 mr-3 text-red-500 flex-shrink-0" />
                    <span>AI and Machine Learning</span>
                  </li>
                  <li className="flex items-center text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                    <Cog className="w-6 h-6 mr-3 text-yellow-500 flex-shrink-0" />
                    <span>Systems engineering and DevOps</span>
                  </li>
                  <li className="flex items-center text-base md:text-lg text-neutral-800 dark:text-neutral-200">
                    <Users className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0" />
                    <span>Project management and leadership</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div
                  className="relative flex h-[350px] w-full items-center justify-center overflow-hidden rounded-lg"
                  ref={containerRef}
                >
                  <div className="flex w-full max-w-lg items-center justify-center">
                    <SkillCircle
                      ref={centerRef}
                      className="w-24 h-24 dark:bg-gray-900 bg-white"
                    >
                      <Brain className="w-12 h-12 text-purple-500" />
                    </SkillCircle>
                  </div>
                  <div className="absolute top-5 left-5 md:top-10 md:left-10">
                    <SkillCircle ref={webDevRef} className="dark:bg-gray-900">
                      <Code className="w-8 h-8 text-blue-500" />
                    </SkillCircle>
                  </div>
                  <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10">
                    <SkillCircle ref={musicRef} className="dark:bg-gray-900">
                      <Music className="w-8 h-8 text-green-500" />
                    </SkillCircle>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-20">
                    <SkillCircle ref={aiRef} className="dark:bg-gray-900">
                      <Cpu className="w-8 h-8 text-red-500" />
                    </SkillCircle>
                  </div>
                  <div className="absolute bottom-5 right-5 md:bottom-10 md:right-10">
                    <SkillCircle ref={systemsRef} className="dark:bg-gray-900">
                      <Cog className="w-8 h-8 text-yellow-500" />
                    </SkillCircle>
                  </div>
                  <div className="absolute top-5 right-5 md:top-10 md:right-10">
                    <SkillCircle
                      ref={leadershipRef}
                      className="dark:bg-gray-900"
                    >
                      <Users className="w-8 h-8 text-indigo-500" />
                    </SkillCircle>
                  </div>

                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={webDevRef}
                    gradientStartColor="#8B5CF6"
                    gradientStopColor="#3B82F6"
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={musicRef}
                    gradientStartColor="#8B5CF6"
                    gradientStopColor="#10B981"
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={aiRef}
                    gradientStartColor="#8B5CF6"
                    gradientStopColor="#EF4444"
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={systemsRef}
                    gradientStartColor="#8B5CF6"
                    gradientStopColor="#F59E0B"
                  />
                  <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={leadershipRef}
                    gradientStartColor="#8B5CF6"
                    gradientStopColor="#6366F1"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
