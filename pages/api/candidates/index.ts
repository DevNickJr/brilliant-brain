import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnection';
import Candidate from '@/models/CandidateModel';
import { ICandidate } from '@/interfaces';
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"



// ----------------------------------------------------------------------

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const session = await getServerSession(req, res, authOptions)
    console.log({candidate: session})

    if (!session) {
      return res.status(401).json({ message: "You must be signed in to access this" });
    } 
    
    if (req.method === 'GET') {
      const candidates = await Candidate.find({}).sort('-createdAt').lean();
      return res.status(200).json(candidates);
    }
    if (req.method === 'DELETE') {
      console.log('id', req.body)
      if (!req.body.id) {
        return res.status(400).json({ message: 'ID is required' })
      }
      const candidate = await Candidate.findByIdAndDelete(req.body.id).lean();
      console.log({ candidate })
      return res.status(200).json(candidate);
    }
    else {

      if (req.method !== 'POST') {
        return res.status(400).json({ message: 'Request Method Not allowed' })
      }

      if (!req.body.email || !req.body.name || !req.body.category || !req.body.number) {
        return res.status(400).json({ message: 'Fill all required fields' })
      }
  
      const data: ICandidate = {
        email: req.body.email,
        name: req.body.name,
        category: req.body.category,
        number: req.body.number,
    }

      const candidate = await Candidate.create(data);
  
      if (!candidate) throw new Error('Post Failed')
  
      // console.log('candidate', candidate)
      return res.status(200).json(candidate);
    }

  } catch (error: any) {
    console.error(error);
    return res.status(error?.status || 500).json({ message: error?.message || 'Internal server error' });
  }
}