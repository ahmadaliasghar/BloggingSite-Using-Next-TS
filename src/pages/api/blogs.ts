// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next";
// import * as fs from "fs";
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import fs from 'fs';
// type Data = {
//   error: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   let data:any = await fs.promises.readdir("blogdata");
//   let myFile:any;
//   let allBlogs:any = [];
//   for (let index:number = 0; index < data.length; index++) {
//     const element = data[index];
//     // console.log(element);
    
//     myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
//     // console.log(myFile)
//     allBlogs.push(JSON.parse(myFile))    
//   }
//     const successResponse: any = { allBlogs };
//     // console.log(allBlogs);
//     res.status(200).json(successResponse);
// }
export async function getStaticProps(context:any) {
  let data = await fs.promises.readdir("blogdata");
  let myfile:any;
  let allBlogs:any = [];
  for (let index:number = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
      allBlogs.push(JSON.parse(myfile))
  }

  return {
      props: { allBlogs }, // will be passed to the page component as props
  }
}