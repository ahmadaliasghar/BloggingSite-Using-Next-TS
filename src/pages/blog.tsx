import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <>
      <div className={styles.blogs}>
        <div className={styles.blogitem}>
          <Link href={"/blogpost/learn-typescript"}>
            <h3>What is Typescript?</h3>
          </Link>
          <p>
            TypeScript is a programming language that is used to solve problems
            in web.
          </p>
        </div>
        <div className={styles.blogitem}>
          <h3>What is Typescript?</h3>
          <p>
            TypeScript is a programming language that is used to solve problems
            in web.
          </p>
        </div>
        <div className={styles.blogitem}>
          <h3>What is Typescript?</h3>
          <p>
            TypeScript is a programming language that is used to solve problems
            in web.
          </p>
        </div>
        <div className={styles.blogitem}>
          <h3>What is Typescript?</h3>
          <p>
            TypeScript is a programming language that is used to solve problems
            in web.
          </p>
        </div>
      </div>
    </>
  );
};

export default blog;
