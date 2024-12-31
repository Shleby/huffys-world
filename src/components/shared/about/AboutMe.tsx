// components/about/AboutMe.tsx
"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

import AboutProfileImage from "@/assets/work_suit_huffy.jpg";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Compare } from "@/components/ui/compare";
import TechnicalResume from "../../../assets/technical_resume.jpg";
import MusicalResume from "../../../assets/musical_resume.jpg";
import { useState } from "react";

export function AboutMe() {
  const [viewMode, setViewMode] = useState("compare"); // 'compare', 'technical', or 'musical'

  const handleDownload = (type: "technical" | "musical") => {
    const link = document.createElement("a");
    link.href = type === "technical" ? TechnicalResume.src : MusicalResume.src;
    link.download = `${type}_resume.jpg`;
    link.click();
  };

  return (
    <Card className="bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-2xl">About Me</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-4">
        <div className="relative group">
          <Image
            src={AboutProfileImage}
            alt="Shelby Huffman"
            width={300}
            height={300}
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shelby Huffman</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Shelby Huffman is a dedicated software engineer and passionate music
            educator based in Oklahoma City. He expertly balances his role as a
            technical lead at Boeing, his dedication to the marching arts, and
            his role as a father.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Classically trained Software Engineer and Technical Lead with
            extensive experience in full-stack web development, specializing in
            Computational Perception and Robotics. Proven track record in
            managing complex projects, leading cross-functional teams, and
            implementing scalable solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Software Engineer",
              "Technical Lead",
              "Scrum Master",
              "Project Manager",
              "Front Ensemble Director",
            ].map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs dark:bg-emerald-900 hover:bg-neutral-300 dark:hover:bg-emerald-950"
              >
                {item}
              </Badge>
            ))}
          </div>
          <Modal>
            {/* Button to open the modal */}
            <ModalTrigger className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300 rounded-lg px-4 py-2">
              <Eye className="w-4 h-4 mr-2" />
              View Resume
            </ModalTrigger>

            {/* Modal Body */}
            <ModalBody className="h-full">
              <ModalContent className="h-full overflow-y-auto">
                <h2 className="text-2xl font-semibold mb-4">My Resume</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Here you can view or download my resume. Use the options below
                  to proceed.
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <Button
                    variant={viewMode === "technical" ? "secondary" : "outline"}
                    onClick={() => setViewMode("technical")}
                  >
                    Technical Only
                  </Button>
                  <Button
                    variant={viewMode === "musical" ? "secondary" : "outline"}
                    onClick={() => setViewMode("musical")}
                  >
                    Musical Only
                  </Button>
                  <Button
                    variant={viewMode === "compare" ? "secondary" : "outline"}
                    onClick={() => setViewMode("compare")}
                  >
                    Compare
                  </Button>
                </div>
                <div className="h-full p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 mt-4">
                  {viewMode === "compare" && (
                    <Compare
                      firstImage={TechnicalResume.src}
                      secondImage={MusicalResume.src}
                      firstImageClassName="object-cover object-left-top"
                      secondImageClassname="object-cover object-left-top"
                      className="w-full h-full"
                      slideMode="hover"
                    />
                  )}
                  {viewMode === "technical" && (
                    <Image
                      src={TechnicalResume}
                      alt="Technical Resume"
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                  {viewMode === "musical" && (
                    <Image
                      src={MusicalResume}
                      alt="Musical Resume"
                      className="w-full h-auto rounded-lg"
                    />
                  )}
                </div>
              </ModalContent>
              <ModalFooter className="flex justify-between">
                <Button
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
                  onClick={() => handleDownload("technical")}
                >
                  Download Technical Resume
                </Button>
                <Button
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-300"
                  onClick={() => handleDownload("musical")}
                >
                  Download Musical Resume
                </Button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </CardContent>
    </Card>
  );
}
