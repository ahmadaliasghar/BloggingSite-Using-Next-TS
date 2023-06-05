import React, { useState} from "react";
import styles from "../../styles/Blogpost.module.css";
import fs from "fs/promises";

interface Blog {
  slug: string;
  title: string;
  description: string;
  author: string;
}

export async function getStaticPaths() {
  return {
      paths: [
          { params: { slug: 'learn-flask' } },
          { params: { slug: 'learn-java' } },
          { params: { slug: 'learn-cpp' } },
          { params: { slug: 'learn-typescript' } },
      ],
      fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context:any) {
  const { slug } = context.params;
  let myBlog = await fs.readFile(`blogdata/${slug}.json`, 'utf-8')
  return {
      props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  }
}

const BlogPost = (props: any) => {
  function createMarkup(c:string) {
    return { __html: c };
}
  console.log("blog", props.myBlog)
  const [blog, setBlog] = useState<Blog>(props.myBlog);

  return (
    <div className={styles.main}>
      <h1>{blog.title}</h1>
      {blog && <p  className={styles.blogtext} dangerouslySetInnerHTML={createMarkup(blog.description)}></p>}
    </div>
  );
};

export default BlogPost;
