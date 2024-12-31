import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  image: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col bg-neutral-100 dark:bg-neutral-950">
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
        <p className="text-sm mb-4 text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardContent className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Code
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
