import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import About from '@/models/AboutModel';
import { IAboutUs } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const session = await getServerSession(req, res, authOptions)
    // console.log({session})


    if (req.method === 'GET') {
      const about = await About.find({}).lean();
      res.status(200).json(about);
    }
    else {

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!session) {
        return res.status(401).json({ message: "You must be signed in to access this" });
      } 

      const data: IAboutUs = {
        first_section: {
          image: req.body?.first_section?.image,
          text: req.body?.first_section?.text,
        },
        second_section: {
          image: req.body?.second_section?.image,
          text: req.body?.second_section?.text,
        },
        third_section: req.body?.third_section,
      }

      const about = await About.create(data);

      if (!About) throw new Error('Post Failed')

      // console.log('About', About)
      return res.status(200).json(about);
    }
  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}