import { prisma } from '../../lib/prisma'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {description, lat, long, name, organizer} = req.body
  
  try {
    await prisma.event.create({
      data: {
        description,
        lat,
        long,
        name,
        organizer
      }
    })

    res.status(200).json({
      message: 'Successful'
    })

  } catch (err) {
    res.status(400).json({error: err})
  }
}