"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowRight, ArrowUp, Sun, Moon, Mail, MapPin } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { CONTACT_INFO, MISC_LINKS, SOCIAL_LINKS } from "@/config/constants";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [timeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const socialLinks = useMemo(
    () => [
      {
        Icon: IconBrandInstagram,
        link: SOCIAL_LINKS.instagram,
        label: "Instagram",
      },
      {
        Icon: IconBrandGithub,
        link: SOCIAL_LINKS.github,
        label: "Github",
      },
      {
        Icon: IconBrandYoutube,
        link: SOCIAL_LINKS.youtube,
        label: "Youtube",
      },
      {
        Icon: IconBrandLinkedin,
        link: SOCIAL_LINKS.linkedin,
        label: "LinkedIn",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="bg-white dark:bg-neutral-800 dark:text-white py-16 transition-colors duration-300 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Huffy&apos;s World</h3>
            <p className="mb-6">
              Explore the world of web design with interactive and user-friendly
              experiences. This site is open-sourced and available for anyone to
              use.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(({ Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  aria-label={`Visit our ${label} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  {Icon && <Icon />}
                </a>
              ))}
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">
                Current Time ({timeZone})
              </h4>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-purple-600 text-transparent bg-clip-text animate-pulse">
                {currentTime.toLocaleTimeString(undefined, {
                  timeZone,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
                {
                  name: "Site Source Code",
                  href: `${MISC_LINKS.sourceCode}`,
                },
              ].map(({ name, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    aria-label={`Navigate to ${name}`}
                    className="hover:text-gray-400 transition duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:translate-x-2" />
                    <span className="relative">
                      {name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Learn More</h4>
            <div className="space-y-4">
              {[
                {
                  title: "My Mission",
                  icon: Sun,
                  content: `To further percussion education and performance throughout Oklahoma and to provide quality web design services to clients.`,
                },
                {
                  title: "Contact Me",
                  icon: Mail,
                  content: `Email me at: ${CONTACT_INFO.email}`,
                },
                {
                  title: "Location",
                  icon: MapPin,
                  content: CONTACT_INFO.location,
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="border dark:border-white/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={expandedSection === section.title}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition duration-300"
                  >
                    <span className="flex items-center">
                      <section.icon className="h-5 w-5 mr-2" />
                      {section.title}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expandedSection === section.title ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedSection === section.title ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 bg-white/5">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Huffy&apos;s World. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="text-gray-800 bg-gray-200 dark:bg-neutral-900 dark:text-white p-2 rounded-full hover:bg-gray-200 transition duration-300 transform hover:rotate-180"
            >
              {theme === "dark" ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="bg-gray-200 dark:bg-neutral-900 dark:text-white text-gray-800 p-2 rounded-full hover:bg-gray-200 transition duration-500 animate-bounce"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* <SourceCodeFAB /> */}
    </footer>
  );
}
