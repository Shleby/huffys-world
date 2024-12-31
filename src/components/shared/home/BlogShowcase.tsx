"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "10 Essential TypeScript Tips for React Developers",
    excerpt:
      "Boost your React development with these crucial TypeScript techniques. Learn how to leverage TypeScript's power in your React projects.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-15",
    readTime: "8 min read",
    category: "Web Development",
    slug: "typescript-tips-react-developers",
  },
  {
    title: "The Future of Front-End: What to Expect in 2024",
    excerpt:
      "Explore upcoming trends in front-end development. From new frameworks to innovative design patterns, stay ahead of the curve.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-10",
    readTime: "10 min read",
    category: "Tech Trends",
    slug: "future-of-frontend-2024",
  },
  {
    title: "Mastering CSS Grid: Advanced Layout Techniques",
    excerpt:
      "Take your CSS skills to the next level with advanced CSS Grid techniques. Learn how to create complex, responsive layouts with ease.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2023-06-05",
    readTime: "12 min read",
    category: "CSS",
    slug: "mastering-css-grid-advanced-techniques",
  },
];

export function BlogShowcase() {
  return (
    <section className="py-24 bg-neutral-100 dark:bg-neutral-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100"
        >
          Explore My Blog
        </motion.h2>
        <p className="text-xl text-center mb-16 text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
          Dive into a world of web development insights, coding tips, and
          industry trends. Stay updated with the latest in tech.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-600 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
