import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

interface Blog {
  slug: string;
  title: string;
  description: string;
  author: string;
}


export  async function getServerSideProps(context: any) {
  // const router = useRouter();
  // let allBlogs = await data.json();
  // {console.log(allBlogs)}
  const { slug } = context.query;
  let data =  await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  let blog = await data.json();

  return {
    props: {blog},
  };
}

const BlogPost = (props: any) => {
  const [blog, setBlog] = useState<Blog>(props.blog);

  return (
    <div className={styles.main}>
      <h1>{blog.title}</h1>
      <p className={styles.blogtext}>{blog.description}</p>
    </div>
  );
};

export default BlogPost;
