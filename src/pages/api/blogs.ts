// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  data: string[];
  error: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fs.readdir("blogdata", (err, data) => {
    if (err) {
      const errorResponse: any = { error: err.message };
      res.status(500).json(errorResponse);
      return;
    }
    const successResponse: any = { data };
    res.status(200).json(successResponse);
  });
}
