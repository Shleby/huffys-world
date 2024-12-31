"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import WorkShelby from "@assets/work_suit_huffy.jpg";
import Image from "next/image";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/constants";

const faqs = [
  {
    question: "Do you offer virtual services?",
    answer:
      "Yes, I offer virtual services for clients worldwide. This includes remote consultations, online mentoring, and virtual workshops.",
  },
  {
    question: "What are your working hours?",
    answer:
      "My standard working hours are Monday to Friday, 9 after 5 PM Central Time. However, I'm flexible and can accommodate different time zones for virtual meetings.",
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "I aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please indicate so in your message.",
  },
  {
    question: "Do you offer in-person services in Oklahoma City?",
    answer:
      "Yes, I offer in-person services for clients in the Oklahoma City area. This includes face-to-face consultations, on-site training, and local workshops.",
  },
];

export function ContactMe() {
  return (
    <section id="contact" className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100"
        >
          Let's Connect
        </motion.h2>
        <p className="text-xl text-center mb-16 text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          Whether you're in Oklahoma City or anywhere else in the world, I'm
          here to help. Reach out for collaborations, consultations, or just to
          say hello!
        </p>
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="overflow-hidden shadow-lg relative bg-white dark:bg-neutral-900">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700 flex-shrink-0">
                    <Image
                      src={WorkShelby}
                      alt="Shelby Huffman"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                      Shelby Huffman
                    </h3>
                    <p className="text-xl mb-4 text-neutral-600 dark:text-neutral-400">
                      Software Engineer & Music Educator
                    </p>
                    <div className="space-y-3 text-neutral-700 dark:text-neutral-300">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="hover:underline"
                        >
                          {CONTACT_INFO.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                        <span>{CONTACT_INFO.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-3 text-purple-600 dark:text-purple-400" />
                        <span>Virtual services available worldwide</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href={`${SOCIAL_LINKS.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </a>
                  <a
                    href={`${SOCIAL_LINKS.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-neutral-800 dark:text-neutral-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
