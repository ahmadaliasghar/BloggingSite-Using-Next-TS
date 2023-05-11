// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  error: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data:any = await fs.promises.readdir("blogdata");
  let myFile:any;
  let allBlogs:any = [];
  for (let index:number = 0; index < data.length; index++) {
    const element = data[index];
    // console.log(element);
    
    myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))    
  }
    const successResponse: any = { allBlogs };
    // console.log(allBlogs);
    res.status(200).json(successResponse);
}
