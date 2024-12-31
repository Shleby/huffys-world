"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Music,
  Search,
  Mic2,
  BookOpen,
  Users,
  Radio,
  Clapperboard,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ServiceCategory = ({
  title,
  icon,
  description,
  details,
  ctaText,
  pricing,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  ctaText: string;
  pricing: string;
}) => (
  <div className="mb-8 rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 ml-2">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <Button className="w-full mb-4">{ctaText}</Button>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details">
          <AccordionTrigger className="text-sm text-gray-500 dark:text-gray-400">
            View Service Details
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              {details.map((detail, index) => (
                <li key={index} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              <strong>Pricing:</strong> {pricing}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export function MusicalServicesOverview() {
  const [searchTerm, setSearchTerm] = useState("");

  const serviceCategories = [
    {
      title: "Percussion Performance",
      icon: <Music className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
      description:
        "Professional percussion performances for recordings, live events, and specialized projects.",
      details: [
        "Mallet Percussion (Marimba, Vibraphone)",
        "Drumset Performance across various genres",
        "World Percussion instruments",
        "Percussion Ensemble performances",
        "Custom percussion arrangements",
      ],
      ctaText: "Book a Percussion Performance",
      pricing:
        "Solo performance: Starting at $500. Ensemble performance: Starting at $1,500.",
    },
    {
      title: "Music Education",
      icon: <BookOpen className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      description:
        "Comprehensive music education services including private lessons, workshops, and masterclasses.",
      details: [
        "One-on-one percussion lessons",
        "Music theory and composition classes",
        "Group workshops on various musical topics",
        "Masterclasses for advanced students",
        "Online courses and webinars",
      ],
      ctaText: "Explore Music Education Options",
      pricing:
        "Private lessons: $75/hour. Workshops: $500 for a 3-hour session.",
    },
    {
      title: "Composition & Arranging",
      icon: <Mic2 className="w-6 h-6 text-green-500 dark:text-green-400" />,
      description:
        "Custom music composition and arranging services for various ensembles and media projects.",
      details: [
        "Original compositions for ensembles",
        "Arranging existing music for different instrumentations",
        "Film and TV scoring",
        "Jingle creation for advertising",
        "Educational music composition",
      ],
      ctaText: "Commission a Composition",
      pricing:
        "Custom compositions start at $1,000. Arranging services: $200 per minute of music.",
    },
    {
      title: "Ensemble Direction",
      icon: <Users className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      description:
        "Expert direction and coaching for percussion ensembles, marching bands, and chamber groups.",
      details: [
        "Percussion ensemble direction",
        "Marching band front ensemble instruction",
        "Chamber music coaching",
        "Workshop facilitation for ensembles",
        "Performance preparation for groups",
      ],
      ctaText: "Get Ensemble Direction",
      pricing:
        "Single rehearsal: $300. Full production direction: Starting at $2,500.",
    },
    {
      title: "Music Production",
      icon: <Headphones className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      description:
        "Professional music production services including recording, mixing, and mastering.",
      details: [
        "Studio recording sessions",
        "Mixing and mastering tracks",
        "Live sound engineering",
        "Music production for podcasts and videos",
        "Remote recording coordination",
      ],
      ctaText: "Start Your Production Project",
      pricing:
        "Studio time: $100/hour. Full album production: Custom quote based on project scope.",
    },
    {
      title: "Performance Preparation",
      icon: (
        <Clapperboard className="w-6 h-6 text-teal-500 dark:text-teal-400" />
      ),
      description:
        "Comprehensive performance preparation services including audition coaching and anxiety management.",
      details: [
        "Audition coaching for music schools and professional opportunities",
        "Performance anxiety management techniques",
        "Repertoire selection and preparation",
        "Mock performances and feedback sessions",
        "Physical and mental preparation strategies",
      ],
      ctaText: "Prepare for Your Performance",
      pricing:
        "Individual coaching: $100/hour. Intensive preparation package: $1,000 for 5 sessions.",
    },
    {
      title: "Music Technology",
      icon: <Radio className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      description:
        "Guidance and training in music software, electronic music creation, and audio equipment setup.",
      details: [
        "Music software training (Pro Tools, Logic Pro, Ableton Live)",
        "Electronic music production techniques",
        "MIDI programming and sound design",
        "Audio equipment consultation and setup",
        "Integration of technology in live performances",
      ],
      ctaText: "Explore Music Tech Services",
      pricing:
        "Software training: $150/hour. Custom electronic music creation: Starting at $750 per track.",
    },
  ];

  // Filter logic
  const filteredCategories = serviceCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.details.some((detail) =>
        detail.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          Musical Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Discover how our musical services can enhance your projects and bring
          your musical vision to life.
        </motion.p>
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search musical services..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCategory
                title={category.title}
                icon={category.icon}
                description={category.description}
                details={category.details}
                ctaText={category.ctaText}
                pricing={category.pricing}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Have a unique musical project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Let&apos;s discuss how we can tailor our services to meet your
            specific musical needs.
          </p>
          <Button size="lg">Request a Custom Quote</Button>
        </motion.div>
      </div>
    </section>
  );
}
