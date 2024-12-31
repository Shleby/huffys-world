"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Users,
  Briefcase,
  BookOpen,
  Music,
  ArrowRight,
  Clock,
  DollarSign,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Custom web apps, SaaS, and websites. Transform your ideas into powerful, scalable solutions.",
    icon: Code,
    cta: "Start Your Project",
    link: "/contact",
    timeComplexity: "Medium to High",
    pricing:
      "$5,000 - $50,000+ per project (simple websites are more around 800-2000)",
    accentColor: "bg-blue-500",
  },
  {
    title: "Software Architecture & Design Pattern Consulting",
    description:
      "Elevate your team's capabilities with expert advice on building maintainable, scalable software systems.",
    icon: Users,
    cta: "Book a Consultation",
    link: "/contact",
    timeComplexity: "Medium",
    pricing: "$100 - $200/hour or $2,000 - $5,000 per engagement",
    accentColor: "bg-green-500",
  },
  {
    title: "Scrum Master / Agile Coaching",
    description:
      "Boost your team's productivity with Scrum methodologies. Learn to run effective sprints and retrospectives.",
    icon: Briefcase,
    cta: "Improve Your Process",
    link: "/contact",
    timeComplexity: "Low to Medium",
    pricing: "$75 - $150/hour or $1,000 - $3,000 per workshop package",
    accentColor: "bg-yellow-500",
  },
  {
    title: "Technical Lead / Mentorship Sessions",
    description:
      "Accelerate your team's growth with personalized mentorship and technical leadership guidance.",
    icon: Users,
    cta: "Empower Your Team",
    link: "/contact",
    timeComplexity: "Low to Medium",
    pricing: "$80 - $150/hour (one-on-one or group sessions)",
    accentColor: "bg-pink-500",
  },
  {
    title: "Online Courses & Workshops",
    description:
      "Master design patterns, web development, and agile methodologies with comprehensive, hands-on courses.",
    icon: BookOpen,
    cta: "Start Learning",
    link: "/courses",
    timeComplexity: "Medium to High",
    pricing:
      "$30 - $100 for a single course, or more for a comprehensive bundle",
    accentColor: "bg-purple-500",
  },
  {
    title: "Mallet Keyboard Lessons",
    description:
      "Discover the joy of music with personalized percussion and mallet instrument tutorials.",
    icon: Music,
    cta: "Book a Lesson",
    link: "/contact",
    timeComplexity: "Low to Medium",
    pricing: "$30 - $60 per hour",
    accentColor: "bg-teal-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Offered Services
        </h1>
        <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
          From full-stack development to music education, I offer a range of
          services tailored to meet your unique needs and help you achieve your
          goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-white dark:bg-gray-800 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                <div className={`h-2 ${service.accentColor}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <service.icon
                      className={`h-8 w-8 ${service.accentColor} text-background p-1 rounded`}
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Clock className="h-4 w-4 mr-2" aria-hidden="true" />
                    <span>{service.timeComplexity}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <DollarSign className="h-4 w-4 mr-2" aria-hidden="true" />
                    <span>{service.pricing}</span>
                  </div>
                  <Link href={service.link}>
                    <Button
                      className="w-full justify-between bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                      variant="outline"
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      <span className="sr-only"> for {service.title}</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
