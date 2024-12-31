"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Music,
  Cpu,
  Users,
  Settings,
  Landmark,
  Search,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const ServiceItem = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => (
  <div className="mb-4 flex items-start">
    <ChevronRight className="w-4 h-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
    <div>
      <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

export function ServicesOverview() {
  const [searchTerm, setSearchTerm] = useState("");

  const serviceCategories = [
    {
      title: "Music & Performance",
      icon: (
        <Music className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
      ),
      accentColor: "bg-purple-500",
      services: [
        {
          name: "Mallet Percussion Lessons",
          description:
            "Expert instruction in marimba, vibraphone, and other mallet instruments.",
        },
        {
          name: "Drumset Performance",
          description:
            "Professional drumming for various musical genres and events.",
        },
        {
          name: "Music Education & Mentoring",
          description:
            "Comprehensive music education and mentoring programs for aspiring musicians.",
        },
      ],
      link: "/services/musical-services",
    },
    {
      title: "Software Development",
      icon: <Code className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />,
      accentColor: "bg-blue-500",
      services: [
        {
          name: "Frontend Development",
          description:
            "Creating responsive and interactive user interfaces using React, TypeScript, and modern web technologies.",
        },
        {
          name: "Backend Development",
          description:
            "Building robust server-side applications with ASP.NET Core, Node.js, and other technologies.",
        },
        {
          name: "Full-Stack Solutions",
          description:
            "End-to-end development of web applications, from database to user interface.",
        },
      ],
      link: "/services/technical-services",
    },
    {
      title: "AI & Robotics",
      icon: <Cpu className="w-5 h-5 mr-2 text-red-500 dark:text-red-400" />,
      accentColor: "bg-red-500",
      services: [
        {
          name: "Robotics Consulting",
          description:
            "Expert advice on robotics projects, including path planning and obstacle avoidance.",
        },
        {
          name: "AI Integration",
          description:
            "Implementing AI solutions in existing systems or new projects.",
        },
        {
          name: "Computer Vision Solutions",
          description:
            "Developing computer vision applications using OpenCV and other technologies.",
        },
      ],
      link: "/services/technical-services",
    },
    {
      title: "Leadership & Management",
      icon: (
        <Users className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
      ),
      accentColor: "bg-green-500",
      services: [
        {
          name: "Team Leadership",
          description:
            "Effective team management and leadership for software development projects.",
        },
        {
          name: "Agile Coaching",
          description:
            "Guiding teams in implementing and optimizing Agile methodologies.",
        },
        {
          name: "Technical Mentoring",
          description:
            "Mentoring junior developers and helping teams improve their technical skills.",
        },
      ],
      link: "/services/technical-services",
    },
    {
      title: "Project Management",
      icon: (
        <Settings className="w-5 h-5 mr-2 text-amber-500 dark:text-amber-400" />
      ),
      accentColor: "bg-amber-500",
      services: [
        {
          name: "Agile Project Management",
          description:
            "Managing software projects using Scrum, Kanban, and other Agile frameworks.",
        },
        {
          name: "Risk Management",
          description:
            "Identifying and mitigating risks in complex technical projects.",
        },
        {
          name: "Stakeholder Communication",
          description:
            "Effective communication with stakeholders at all levels of the organization.",
        },
      ],
      link: "/services/technical-services",
    },
    {
      title: "Architecture & Design",
      icon: (
        <Landmark className="w-5 h-5 mr-2 text-rose-500 dark:text-rose-400" />
      ),
      accentColor: "bg-rose-500",
      services: [
        {
          name: "Software Architecture",
          description:
            "Designing scalable and maintainable software architectures for complex systems.",
        },
        {
          name: "Design Patterns Consultation",
          description:
            "Advising on the appropriate use of design patterns in software development.",
        },
        {
          name: "Code Review & Refactoring",
          description:
            "Reviewing and improving existing codebases for better performance and maintainability.",
        },
      ],
      link: "/services/technical-services",
    },
  ];

  // Filter logic
  const filteredCategories = serviceCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.services.some(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Explore our range of technical and musical services designed to
          elevate your projects and skills.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <Button asChild>
            <Link href="/services/technical-services">Technical Services</Link>
          </Button>
          <Button asChild>
            <Link href="/services/musical-services">Musical Services</Link>
          </Button>
        </motion.div>
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search services..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className={`h-2 ${category.accentColor}`} />
                <CardHeader className="p-6">
                  <CardTitle className="text-2xl font-bold flex items-center text-gray-900 dark:text-gray-100">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceItem
                      key={serviceIndex}
                      name={service.name}
                      description={service.description}
                    />
                  ))}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                  >
                    <Link href={category.link}>
                      Explore {category.title}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
