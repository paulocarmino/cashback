import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { programId } = req.query

  try {
    await prisma.program.delete({
      where: {
        id: Number(programId)
      },
    })

    res.status(200).json({})
  } catch (error) {
    res.status(400).json({ error: 'REMOVE_PROGRAM_ERROR', message: "Program not removed. Try again later" })
  }
}


