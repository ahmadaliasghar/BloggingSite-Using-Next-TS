// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

// http://localhost:3000/api/getblogs?slug=learn-java 

type Data = {
  data: string[];
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      const errorResponse: any = "No such data Found";
      res.status(500).json(errorResponse);
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
