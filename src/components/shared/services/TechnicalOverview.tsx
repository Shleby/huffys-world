"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cpu,
  Settings,
  Landmark,
  Search,
  Server,
  GitBranch,
  Shield,
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
  pricing,
  ctaText,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
  pricing: string;
  ctaText: string;
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
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Pricing:
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {pricing}
              </p>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Services Include:
            </h4>
            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400">
              {details.map((detail, index) => (
                <li key={index} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

export function TechnicalServicesOverview() {
  const [searchTerm, setSearchTerm] = useState("");

  const serviceCategories = [
    {
      title: "Software Development",
      icon: <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
      description:
        "Custom software solutions tailored to your needs, from web and mobile apps to enterprise systems.",
      details: [
        "Frontend Development with React and TypeScript",
        "Backend Development using Node.js, ASP.NET Core",
        "Full-Stack Solutions",
        "Mobile App Development (iOS and Android)",
        "Database Design and Optimization",
      ],
      ctaText: "Discuss Your Software Project",
      pricing:
        "Starting at $5,000 for small projects. Custom quotes available for larger projects.",
    },
    {
      title: "AI & Robotics",
      icon: <Cpu className="w-6 h-6 text-red-500 dark:text-red-400" />,
      description:
        "Cutting-edge AI and robotics solutions to automate processes and enhance decision-making.",
      details: [
        "Machine Learning Model Development",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Robotics Consulting and Implementation",
        "AI Integration with Existing Systems",
      ],
      ctaText: "Explore AI & Robotics Options",
      pricing:
        "Consulting: $200/hour. Implementation projects start at $10,000.",
    },
    {
      title: "DevOps & Cloud Services",
      icon: <Server className="w-6 h-6 text-green-500 dark:text-green-400" />,
      description:
        "Streamline your development and operations with our expert DevOps and cloud services.",
      details: [
        "Cloud Infrastructure Setup (AWS, Azure, GCP)",
        "CI/CD Pipeline Implementation",
        "Container Orchestration with Docker and Kubernetes",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Cloud Cost Optimization",
      ],
      ctaText: "Optimize Your Infrastructure",
      pricing:
        "Monthly retainer starting at $2,500. Project-based pricing available.",
    },
    {
      title: "Project Management",
      icon: <Settings className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
      description:
        "Efficient project management to ensure your technical projects are delivered on time and within budget.",
      details: [
        "Agile Project Management (Scrum, Kanban)",
        "Risk Management and Mitigation",
        "Stakeholder Communication",
        "Project Planning and Estimation",
        "Quality Assurance and Testing Strategies",
      ],
      ctaText: "Get Project Management Support",
      pricing: "$150/hour or fixed project fee based on scope.",
    },
    {
      title: "Software Architecture",
      icon: <Landmark className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      description:
        "Design robust and scalable software architectures that stand the test of time and growth.",
      details: [
        "System Design and Architecture Planning",
        "Microservices Architecture Design",
        "API Design (RESTful, GraphQL)",
        "Performance Optimization",
        "Scalability and High Availability Solutions",
      ],
      ctaText: "Consult on Software Architecture",
      pricing:
        "Consultation: $250/hour. Architecture design projects start at $7,500.",
    },
    {
      title: "Version Control & Collaboration",
      icon: (
        <GitBranch className="w-6 h-6 text-purple-500 dark:text-purple-400" />
      ),
      description:
        "Implement effective version control and collaboration strategies for your development team.",
      details: [
        "Git Workflow Optimization",
        "Code Review Process Implementation",
        "Collaboration Tool Integration (JIRA, Confluence, Slack)",
        "Documentation Management",
        "Team Productivity Enhancement",
      ],
      ctaText: "Improve Team Collaboration",
      pricing:
        "Team training: $1,500/day. Workflow optimization projects start at $5,000.",
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
      description:
        "Protect your digital assets with our comprehensive cybersecurity services and solutions.",
      details: [
        "Security Audits and Vulnerability Assessments",
        "Penetration Testing",
        "Secure Coding Practices Training",
        "Incident Response Planning",
        "Compliance (GDPR, HIPAA, PCI DSS) Consulting",
      ],
      ctaText: "Enhance Your Security",
      pricing:
        "Security audits start at $3,000. Ongoing security services: custom quote based on needs.",
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
          Technical Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-16 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Explore our range of technical services and let us know how we can
          help bring your projects to life.
        </motion.p>
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search technical services..."
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
                pricing={category.pricing}
                ctaText={category.ctaText}
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
            Not sure what you need?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our team of experts is here to help you find the right solution for
            your project.
          </p>
          <Button size="lg">Schedule a Free Consultation</Button>
        </motion.div>
      </div>
    </section>
  );
}
