// components/experience/WorkExperience.tsx
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
import { Briefcase } from "lucide-react";

export function WorkExperience() {
  const jobs = [
    {
      title: "Co-Founder & Technical Director",
      company: "Community Pledge",
      period: "2024 - Present",
      responsibilities: [
        "Developed a web platform for telethon fundraising, supporting non-profits and community organizations.",
      ],
    },
    {
      title: "Founder & Lead Developer",
      company: "Huffy's Web Solutions",
      period: "2023 - Present",
      responsibilities: [
        "Providing web development services to small businesses, focusing on building scalable, secure, and modern web applications.",
      ],
    },
    {
      title: "Technical Lead Engineer - Software Engineer",
      company: "The Boeing Company",
      period: "2023 - Present",
      responsibilities: [
        "Built an enterprise rostering system with RFID scanning and data analytics.",
        "Developed tools for 3D scanning/printing services and non-conformance reports.",
        "Created enterprise sites with dynamic career path-building features.",
        "Engineered C# WPF apps for system engineering data visualization.",
        "Developed Java plugins for MSOSA to automate systems engineering workflows.",
        "Managed Linux systems for VC25A projects.",
      ],
    },
    {
      title: "Software Engineer - Level 2",
      company: "The Boeing Company",
      period: "2022 - 2023",
      responsibilities: [
        "Specialized in AR/VR visualizations for aircraft design recovery.",
        "Developed AR apps for Hololens 2 using Unity C# and MRTK.",
        "Managed Linux systems for VC25A, handling imaging and filesystem management.",
      ],
    },
    {
      title: "Software Engineer - Level 1",
      company: "The Boeing Company",
      period: "2020 - 2022",
      responsibilities: [
        "Worked on mission-critical computing software in Java, C, and C++.",
        "Diagnosed and repaired software simulation equipment.",
        "Utilized Coverity for static code analysis.",
        "Led Scrum ceremonies and advocated for Agile practices across teams.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Power Costs Inc",
      period: "2020",
      responsibilities: [
        "Solved bugs and optimized performance in a Java Spring Boot Web App.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Oseberg",
      period: "2020",
      responsibilities: [
        "Developed a messaging portal using React and TypeScript to send software updates and changelogs to users for oil and gas data software.",
      ],
    },
  ];

  return (
    <Card className="bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Work Experience</CardTitle>
        <CardDescription>
          A detailed look at my professional background
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-0 top-0 w-1 bg-orange-500 dark:bg-orange-400 h-full"></div>
          <div className="space-y-8 relative">
            <div className="ml-6">
              <Card className="px-4 bg-neutral-100 dark:bg-neutral-950">
                <Accordion type="single" collapsible className="w-full">
                  {jobs.map((job, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>
                        <div className="flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-orange-500 dark:text-orange-400" />
                          <div className="text-left">
                            <div>{job.title}</div>
                            <div className="text-sm text-neutral-500 dark:text-neutral-400">
                              {job.company} | {job.period}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
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
