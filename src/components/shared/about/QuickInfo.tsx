// components/about/QuickInfo.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconChessKnight,
} from "@tabler/icons-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/config/constants";

export function QuickInfo() {
  const facts = [
    "I’ve taught mallet percussion to over 500 students!",
    "I coded my first app at 18.",
    "I play over 20 different musical instruments.",
    "I was a member of the National Honor Society and valedictorian in high school.",
    "I won the outstanding jazz musician award in high school as a drumset player.",
    "I’ve performed in front of tens of thousands as part of world-class ensembles!",
    "I won an award from Facebook and MongoDB for a project I built at a Hackathon.",
    "I love camping and was a boy scout.",
    "I’m fluent in two languages, and proficient in two.",
    "I’m a chess enthusiast and participated in local tournaments throughout middle school.",
    "I’m a bourbon aficionado and enjoy trying new whiskeys.",
    "I’ve participated in hackathons and won several awards.",
    "I’ve been a mentor for hackathons and helped students transition into tech careers.",
    "I’ve been a guest lecturer and clinician at several high schools and universities.",
    "I'm a new author and have published my first book.",
  ];
  const [fact, setFact] = useState(facts[0]);
  return (
    <Card className="bg-white dark:bg-neutral-800">
      <CardHeader>
        <CardTitle className="text-2xl">Quick Info</CardTitle>
        <q className="italic text-left text-sm mb-4 text-neutral-600 dark:text-neutral-300">
          If you do what you love, then you&apos;ll never work a day in your
          life.
        </q>{" "}
        - My Father
      </CardHeader>
      <CardContent className="flex flex-col justify-center">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <InfoItem
                icon={<MapPin className="w-4 h-4" />}
                text={CONTACT_INFO.location}
              />
              <InfoItem
                icon={<Mail className="w-4 h-4" />}
                text={CONTACT_INFO.email}
              />
              <InfoItem
                icon={<Globe className="w-4 h-4" />}
                text={
                  <a
                    href={CONTACT_INFO.website}
                    className="text-blue-600 hover:underline"
                  >
                    {CONTACT_INFO.website}
                  </a>
                }
              />
            </div>
            <div className="flex flex-col mb-2 space-y-1">
              {[
                "💻 Full-Stack Developer",
                "🎼 Music Educator",
                "👨‍👩‍👧 New Father",
                "🏢 Business Owner",
                "♟️ Chess Enthusiast",
              ].map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm dark:bg-stone-600 dark:hover:bg-stone-700 hover:bg-neutral-300"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />

          <motion.div
            key={fact}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg"
          >
            <div className="absolute left-0 top-0 w-1 bg-stone-500 dark:bg-stone-600 h-full rounded-lg"></div>
            <div className="space-y-4 relative">
              <p className="text-sm mb-2">{fact}</p>
              <Button
                variant="outline"
                size="sm"
                className="bg-stone-500 text-white hover:text-white dark:bg-stone-600 hover:bg-stone-600 dark:hover:bg-stone-700"
                onClick={() =>
                  setFact(facts[Math.floor(Math.random() * facts.length)])
                }
              >
                Show Another Fun Fact
              </Button>
            </div>
          </motion.div>
          <Separator />
          <div className="flex flex-row flex-wrap items-center space-x-2 space-y-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 ml-2"
            >
              <Button className="bg-neutral-900 hover:bg-neutral-950 text-white transition-colors duration-300 p-5">
                <IconBrandGithub className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
                <IconBrandLinkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                <IconBrandYoutube className="w-4 h-4 mr-2" />
                YouTube
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.chess}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">
                <IconChessKnight className="w-4 h-4 mr-2" />
                Chess
              </Button>
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-pink-600 hover:bg-pink-700 text-white transition-colors duration-300">
                <IconBrandInstagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}
