import * as fs from 'fs';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    let data: any = await fs.promises.readdir('contactdata');
    await fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body) // Convert req.body to a string using JSON.stringify
    );
    res.status(200).json(req.body);
  } else {
    // Handle any other HTTP method
    res.status(200).json(['allBlogs']);
  }
}
