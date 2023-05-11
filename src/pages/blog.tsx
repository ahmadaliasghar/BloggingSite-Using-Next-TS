import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

type Blog = {
  slug: string;
  title: string;
  description: string;
};

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data.allBlogs));      
  }, []);

  // console.log(blogs);
  return (
    <div>
     {blogs.map((blog) => ( 
        <div className={styles.blogs} key={blog.slug}>
          <div className={styles.blogitem}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.description.substr(0, 150)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
