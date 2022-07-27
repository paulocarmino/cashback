import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const programsList = await prisma.program.findMany()

  if (programsList.length <= 0) {
    //TODO: put a better error message
    return res.status(400).json({ error: 'LIST_PROGRAMS_ERROR', message: "LIST_PROGRAMS_ERROR" })
  }

  return res.status(200).json(programsList)
}
