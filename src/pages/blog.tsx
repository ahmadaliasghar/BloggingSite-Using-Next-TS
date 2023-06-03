import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import { GetServerSideProps } from "next";
// import { log } from "console";

type Blog = {
  title: string;
  description: string;
  slug: string;
  author: string;
};

export  async function getServerSideProps(context: any) {
  let data = await fetch('http://localhost:3000/api/blogs');
  let allBlogs = await data.json();
  // {console.log(allBlogs)}
  return {
    props: {allBlogs},
  };
}


const Blog = (props: any) => {

  const [blogs, setBlogs] = useState<Blog[]>(props.allBlogs.allBlogs);
  
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
