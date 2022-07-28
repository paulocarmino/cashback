import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/db/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { programId } = req.query
  const { productIdentifier, value, status, type, startDate, endDate } = req.body

  const updatedProgram = await prisma.program.update({
    where: {
      id: Number(programId)
    },
    data: {
      productIdentifier,
      value,
      status,
      type,
      startDate,
      endDate
    }
  })

  if (updatedProgram) {
    res.status(200).json(updatedProgram)
  } else {
    res.status(400).json({ error: 'UPDATE_PROGRAM_ERROR', message: "Program not updated. Try again later" })
  }
}
