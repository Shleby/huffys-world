// components/education/Education.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap } from "lucide-react";

export function Education() {
  const educationHistory = [
    {
      degree: "Masters of Computer Science",
      school: "Georgia Institute of Technology",
      year: "Expected 2025",
      details: "Specialization in Computational Perception and Robotics",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Oklahoma",
      year: "2021",
      details:
        "Dean's Honor Roll, Hacklahoma Executive Director, Association of Computing Machinery",
    },
    {
      degree: "Bachelor of Art in Mathematics",
      school: "University of Oklahoma",
      year: "2021",
      details: "Focus on Advanced Calculus and Linear Algebra",
    },
    {
      degree: "High School Diploma",
      school: "Choctaw High School",
      year: "2016",
      details:
        "Valedictorian, Graduated with Honors, National Honor Society, Oklahoma Honor Society",
    },
  ];

  return (
    <Card className="bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Education</CardTitle>
        <CardDescription>
          A journey through academia and lifelong learning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-0 top-0 w-1 bg-purple-500 dark:bg-purple-400 h-full"></div>
          <div className="space-y-8 relative">
            <div className="ml-6">
              <Card className="px-4 bg-neutral-100 dark:bg-neutral-950">
                <Accordion type="single" collapsible className="w-full">
                  {educationHistory.map((edu, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
                          <div className="text-left">
                            <div>{edu.degree}</div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400">
                              {edu.school} | {edu.year}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300">
                          {edu.details}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
