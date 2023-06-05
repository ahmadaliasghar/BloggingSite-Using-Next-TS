import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogs By Ahmad</title>
        <meta
          name="description"
          content="Blogs By Ahmad | Best Blogs About Programming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <h1>Welcome to my Blogs</h1>
          <br />
          <p>Welcome to our my blogging website. I hope yo like it.</p>
        </div>
        <div className={styles.blogs}>
          <h2 className={styles.popularBlogs}>Popular Blogs</h2>
          <div className={styles.blogitem}>
            <h3>What is Typescript?</h3>
            <p>
              TypeScript is a programming language that is used to solve
              problems in web.
            </p>
            
          </div>
          <div className={styles.blogitem}>
            <h3>What is Typescript?</h3>
            <p>
              TypeScript is a programming language that is used to solve
              problems in web.
            </p>
          </div>
          <div className={styles.blogitem}>
            <h3>What is Typescript?</h3>
            <p>
              TypeScript is a programming language that is used to solve
              problems in web.
            </p>
          </div>
          <div className={styles.blogitem}>
            <h3>What is Typescript?</h3>
            <p>
              TypeScript is a programming language that is used to solve
              problems in web.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
