import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import fs from 'fs/promises';

type Blog = {
  slug: string;
  title: string;
  author: string;
  description: string;
  metadesc: string;
};

interface BlogProps {
  allBlogs: Blog[];
}

const Blog: React.FC<BlogProps> = (props) => {
  const [blogs, setBlogs] = useState<Blog[]>(props.allBlogs);
  

  return (
    <div>
      {blogs.map((blog) => (
        <div className={styles.blogs} key={blog.slug}>
          <div className={styles.blogitem}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
            </Link>
            <p>{blog.metadesc.substr(0, 150)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async (context) => {
  const data = await fs.readdir("blogdata");
  const allBlogs: Blog[] = await Promise.all(data.map(async (item) => {
    const myfile = await fs.readFile(('blogdata/' + item), 'utf-8');
    return JSON.parse(myfile);
  }));

  return {
    props: {
      allBlogs,
    },
  };
};

export default Blog;
