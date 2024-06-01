// pages/api/scrape-instagram.tsx
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Make an HTTP request to Instagram using Axios or any other HTTP library
    const response = await axios.get('https://www.instagram.com/explore/tags/snackible/?__a=1');

    // Parse and filter the data you need from the Instagram response
    const data = response.data;

    // Return the filtered data
    if(data && data.length) {
      console.log("it works ! : ", data);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape Instagram data' });
  }
};
