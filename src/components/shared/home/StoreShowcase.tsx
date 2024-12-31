"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Category {
  title: string;
  description: string;
  accentColor: string;
  features: string[];
}

const categories: Category[] = [
  {
    title: "Books",
    description:
      "Comprehensive guides for modern web development and software engineering.",
    accentColor: "bg-blue-500",
    features: [
      "In-depth tutorials",
      "Best practices",
      "Code examples",
      "Industry insights",
    ],
  },
  {
    title: "Compositions",
    description:
      "Original musical pieces and arrangements for various ensembles and instruments.",
    accentColor: "bg-purple-500",
    features: [
      "Sheet music",
      "Audio previews",
      "Multiple genres",
      "Customization options",
    ],
  },
  {
    title: "Front Ensemble Warmups",
    description:
      "Educational exercises for front ensemble percussionists and keyboardists.",
    accentColor: "bg-green-500",
    features: [
      "Progressive difficulty",
      "Technique focus",
      "Ensemble coordination",
      "Video demonstrations",
    ],
  },
  {
    title: "UI Libraries",
    description:
      "Customizable and accessible UI components to accelerate front-end development.",
    accentColor: "bg-teal-500",
    features: [
      "Responsive design",
      "Accessibility compliant",
      "Customizable themes",
      "Documentation",
    ],
  },
  {
    title: "Website Templates",
    description:
      "Professional and responsive website templates for various purposes.",
    accentColor: "bg-amber-500",
    features: [
      "Mobile-first design",
      "SEO optimized",
      "Easy customization",
      "Multiple layouts",
    ],
  },
  {
    title: "SaaS Templates",
    description:
      "Ready-to-use templates and boilerplates for launching your next SaaS project.",
    accentColor: "bg-rose-500",
    features: [
      "Authentication system",
      "Billing integration",
      "User dashboard",
      "API examples",
    ],
  },
];

export function StoreShowcase() {
  const [, setSelectedCategory] = useState<Category | null>(null);

  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          Explore My Store
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Elevate your projects with our curated collection of tools, templates,
          and creative works. From code to music, we&apos;ve got you covered.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className={`h-2 ${category.accentColor}`} />
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {category.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full justify-between bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                    onClick={() => setSelectedCategory(category)}
                  >
                    Explore {category.title}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
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
            Visit Store
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
