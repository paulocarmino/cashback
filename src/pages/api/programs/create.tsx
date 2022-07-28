import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/db/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { productIdentifier, value, status, type, startDate, endDate } = req.body

  const createdProgram = await prisma.program.create({
    data: {
      productIdentifier,
      value,
      status,
      type,
      startDate,
      endDate
    }
  })

  if (createdProgram) {
    res.status(200).json(createdProgram)
  } else {
    res.status(400).json({ error: 'CREATE_PROGRAM_ERROR', message: "Program not created. Try again later" })
  }
}
