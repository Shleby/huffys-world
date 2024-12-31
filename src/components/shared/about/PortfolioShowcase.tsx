"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Enterprise Rostering System",
    description:
      "Built an enterprise-level rostering system with RFID scanning and data analytics capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "TypeScript", "ASP.NET Core", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Scanning/Printing Service Portal",
    description:
      "Developed a web portal for managing 3D scanning and printing services, including non-conformance reporting.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "Three.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AR Visualization for Aircraft Design",
    description:
      "Created an augmented reality application for visualizing aircraft designs using HoloLens 2.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Unity", "C#", "MRTK", "Azure Spatial Anchors"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dynamic Career Path Builder",
    description:
      "Engineered an interactive tool for employees to explore and plan their career paths within the company.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "GraphQL", "Node.js", "Neo4j"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function PortfolioShowcase() {
  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100"
        >
          Portfolio Showcase
        </motion.h2>
        <p className="text-xl text-center mb-16 text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          A selection of my software projects and websites, demonstrating my
          skills in various technologies and domains.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <Button asChild variant="outline" className="flex-1 mr-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 ml-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
