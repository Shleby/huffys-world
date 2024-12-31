import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Enterprise Rostering System",
    description:
      "Built an enterprise-level rostering system with RFID scanning and data analytics capabilities.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "ASP.NET Core", "SQL Server"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "3D Scanning/Printing Service Portal",
    description:
      "Developed a web portal for managing 3D scanning and printing services, including non-conformance reporting.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "Three.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AR Visualization for Aircraft Design",
    description:
      "Created an augmented reality application for visualizing aircraft designs using HoloLens 2.",
    image: "/placeholder.svg",
    tags: ["Unity", "C#", "MRTK", "Azure Spatial Anchors"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dynamic Career Path Builder",
    description:
      "Engineered an interactive tool for employees to explore and plan their career paths within the company.",
    image: "/placeholder.svg",
    tags: ["Vue.js", "GraphQL", "Node.js", "Neo4j"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function PortfolioShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-video relative mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
