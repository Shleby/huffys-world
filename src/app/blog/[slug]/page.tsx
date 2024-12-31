"use client";

import React from "react";
import { useRouter } from "next/router";

const BlogPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
      {/* Add your blog content here */}
    </div>
  );
};

export default BlogPage;
