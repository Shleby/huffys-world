"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Code,
  Server,
  Search,
  Palette,
  Lock,
  GitGraphIcon as Git,
  Terminal,
  Cpu,
  Monitor,
  Database,
  Users,
  Settings,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";

const SkillBar = ({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) => (
  <div className="space-y-1">
    <div className="flex justify-between items-center text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

export function SkillsOverview() {
  const [searchTerm, setSearchTerm] = useState("");

  // =========================================================
  //  Final color assignments (no two adjacent are the same).
  // =========================================================
  const skillCategories = [
    {
      title: "Music & Performance",
      //-purple
      icon: (
        <Palette className="w-5 h-5 mr-2 text-purple-500 dark:text-purple-400" />
      ),
      color: "bg-purple-500 dark:bg-purple-400",
      skills: [
        { name: "Mallet Percussion (Marimba, Vibes)", level: 95 },
        { name: "Drumset Performance", level: 80 },
        { name: "Keyboard & Synth (Piano, Synth)", level: 90 },
        { name: "World Percussion Techniques", level: 70 },
        { name: "Front Ensemble Composition", level: 85 },
        { name: "Audio Technology (Front Setup)", level: 80 },
        { name: "Music Education & Mentoring", level: 90 },
        { name: "Ensemble Leadership", level: 90 },
        { name: "Master Classes & Clinics", level: 95 },
        { name: "Scoring & Arranging (Sibelius)", level: 75 },
      ],
    },
    {
      title: "Frontend Development",
      // Blue
      icon: <Code className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />,
      color: "bg-blue-500 dark:bg-blue-400",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Material UI", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "Angular", level: 65 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      // Green
      icon: (
        <Server className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
      ),
      color: "bg-green-500 dark:bg-green-400",
      skills: [
        { name: "ASP.NET Core", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Laravel (PHP)", level: 70 },
        { name: "SQL Server", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "Django (Python)", level: 65 },
        { name: "FastAPI (Python)", level: 60 },
        { name: "Spring Boot (Java)", level: 75 },
        { name: "Firebase", level: 65 },
      ],
    },
    {
      title: "Object-Oriented Programming",
      // Indigo
      icon: (
        <Cpu className="w-5 h-5 mr-2 text-indigo-500 dark:text-indigo-400" />
      ),
      color: "bg-indigo-500 dark:bg-indigo-400",
      skills: [
        { name: "C#", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python (OOP)", level: 80 },
        { name: "C", level: 70 },
        { name: "Rust (OOP/Systems)", level: 65 },
        { name: "Inheritance & Polymorphism", level: 85 },
        { name: "Abstraction & Encapsulation", level: 90 },
        { name: "Interfaces & Abstract Classes", level: 80 },
        { name: "Refactoring Legacy Code", level: 75 },
      ],
    },
    {
      title: "Soft Skills & Leadership",
      // Pink
      icon: <Users className="w-5 h-5 mr-2 text-pink-500 dark:text-pink-400" />,
      color: "bg-pink-500 dark:bg-pink-400",
      skills: [
        { name: "Empathy", level: 85 },
        { name: "Team Coordination", level: 90 },
        { name: "Conflict Resolution", level: 80 },
        { name: "Delegation", level: 75 },
        { name: "Mentoring & Coaching", level: 85 },
        { name: "Public Speaking", level: 70 },
        { name: "Negotiation", level: 65 },
        { name: "Adaptability", level: 90 },
        { name: "Decision Making", level: 80 },
        { name: "Emotional Intelligence", level: 85 },
      ],
    },
    {
      title: "Agile & Project Management",
      // Teal
      icon: (
        <Settings className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
      ),
      color: "bg-teal-500 dark:bg-teal-400",
      skills: [
        { name: "Scrum Framework", level: 90 },
        { name: "Kanban", level: 80 },
        { name: "Sprint Planning", level: 85 },
        { name: "Retrospective Facilitation", level: 80 },
        { name: "JIRA / Azure Boards", level: 85 },
        { name: "User Story Writing", level: 75 },
        { name: "Backlog Prioritization", level: 85 },
        { name: "Risk Management", level: 70 },
        { name: "Budgeting & Scheduling", level: 65 },
        { name: "Stakeholder Communication", level: 90 },
      ],
    },
    {
      title: "Design Patterns & Architecture",
      // Orange
      icon: (
        <Landmark className="w-5 h-5 mr-2 text-orange-500 dark:text-orange-400" />
      ),
      color: "bg-orange-500 dark:bg-orange-400",
      skills: [
        { name: "SOLID Principles", level: 85 },
        { name: "MVC / MVVM", level: 90 },
        { name: "Factory Pattern", level: 80 },
        { name: "Observer Pattern", level: 85 },
        { name: "Mediator Pattern", level: 75 },
        { name: "Microservices Architecture", level: 80 },
        { name: "Event-Driven Architecture", level: 70 },
        { name: "Domain-Driven Design", level: 65 },
        { name: "Dependency Injection", level: 90 },
        { name: "Clean Architecture", level: 85 },
      ],
    },
    {
      title: "AI & Robotics",
      // Red
      icon: <Cpu className="w-5 h-5 mr-2 text-red-500 dark:text-red-400" />,
      color: "bg-red-500 dark:bg-red-400",
      skills: [
        { name: "Kalman Filters", level: 70 },
        { name: "SLAM", level: 65 },
        { name: "PID Control", level: 80 },
        { name: "Path Planning", level: 75 },
        { name: "Obstacle Avoidance", level: 70 },
        { name: "ROS (Robot Operating System)", level: 60 },
        { name: "Computer Vision (OpenCV)", level: 65 },
        { name: "Neural Networks (Basics)", level: 60 },
        { name: "Reinforcement Learning (Intro)", level: 55 },
        { name: "Raspberry Pi / Arduino Robotics", level: 70 },
      ],
    },
    {
      title: "DevOps & Version Control",
      // sky again, but separated by a red category in between
      icon: <Git className="w-5 h-5 mr-2 text-lime-500 dark:text-lime-400" />,
      color: "bg-lime-500 dark:bg-lime-400",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Azure DevOps (Pipelines)", level: 80 },
        { name: "GitLab CI/CD", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "AWS / Azure / Vercel Deployments", level: 75 },
        { name: "CI/CD Best Practices", level: 80 },
        { name: "Monitoring & Logging", level: 65 },
        { name: "Shell Scripting for Automation", level: 70 },
      ],
    },
    {
      title: "IDEs & Tools",
      // Pink again, but separated from Soft Skills by multiple categories
      icon: (
        <Terminal className="w-5 h-5 mr-2 text-pink-500 dark:text-pink-400" />
      ),
      color: "bg-pink-500 dark:bg-pink-400",
      skills: [
        { name: "Visual Studio", level: 90 },
        { name: "Visual Studio Code", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "PyCharm", level: 80 },
        { name: "Postman", level: 85 },
        { name: "SQL Management Studio", level: 80 },
        { name: "Eclipse", level: 70 },
        { name: "Notepad++", level: 80 },
      ],
    },
    {
      title: "Linux Systems",
      // Green again, but separated from the prior green categories by several entries
      icon: (
        <Terminal className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
      ),
      color: "bg-green-500 dark:bg-green-400",
      skills: [
        { name: "Bash Scripting", level: 80 },
        { name: "Filesystem Management", level: 85 },
        { name: "Disk Imaging (Clonezilla)", level: 70 },
        { name: "Systemd & Services", level: 65 },
        { name: "Network Configuration", level: 75 },
        { name: "Cron Jobs & Automation", level: 80 },
        { name: "SSH & Remote Access", level: 85 },
        { name: "Package Management (apt, yum)", level: 75 },
        { name: "Linux Kernel Basics", level: 65 },
      ],
    },
    {
      title: "Augmented Reality",
      // Blue again, but separated from Frontend’s blue
      icon: (
        <Monitor className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
      ),
      color: "bg-blue-500 dark:bg-blue-400",
      skills: [
        { name: "HoloLens", level: 70 },
        { name: "Unity (AR & Game Dev)", level: 80 },
        { name: "Vuforia", level: 60 },
        { name: "Microsoft MRTK", level: 65 },
        { name: "PiXYZ (3D Modeling)", level: 70 },
        { name: "UI/UX for AR", level: 60 },
        { name: "Spatial Mapping", level: 70 },
        { name: "Shader Programming", level: 55 },
        { name: "3D Asset Optimization", level: 65 },
      ],
    },
    {
      title: "Authentication & Security",
      // Yellow
      icon: (
        <Lock className="w-5 h-5 mr-2 text-yellow-500 dark:text-yellow-400" />
      ),
      color: "bg-yellow-500 dark:bg-yellow-400",
      skills: [
        { name: "JWT (JSON Web Tokens)", level: 80 },
        { name: "OAuth 2.0 / OpenID Connect", level: 75 },
        { name: "SAML", level: 65 },
        { name: "Role-Based Access Control", level: 70 },
        { name: "Encryption (AES/RSA)", level: 60 },
        { name: "Secure Coding Practices", level: 80 },
        { name: "Vulnerability Scanning", level: 65 },
        { name: "API Security (OWASP)", level: 75 },
        { name: "Secrets Management (Vault)", level: 70 },
        { name: "Multi-Factor Authentication", level: 80 },
      ],
    },
    {
      title: "Other Specialized Skills",
      // Teal (not directly after Agile & PM, so no adjacency conflict)
      icon: (
        <Database className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
      ),
      color: "bg-teal-500 dark:bg-teal-400",
      skills: [
        { name: "Agent-Based Modeling (NetLogo)", level: 75 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Quantum Computing Basics", level: 60 },
        { name: "IoT Device Integration", level: 70 },
        { name: "Voice Assistants (Alexa, Google)", level: 60 },
        { name: "Data Visualization", level: 65 },
      ],
    },
  ];

  // Filter logic
  const filteredCategories = skillCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.skills.some((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Card className="col-span-1 md:col-span-3 lg:col-span-4 bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Skills Overview</CardTitle>
        <CardDescription>
          A comprehensive look at my technical, leadership, and musical
          expertise
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-neutral-100 dark:bg-neutral-950 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg flex items-center">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-2 p-4">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skillIndex}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
