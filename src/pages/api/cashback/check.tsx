import type { NextApiRequest, NextApiResponse } from 'next'

import { calculeCashbackHandler } from '@/utils/cashbackUtils'
import prisma from '@/utils/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { productIdentifier, productValue } = req.body

  const programFromDB = await prisma.program.findFirst({
    where: {
      productIdentifier: String(productIdentifier)
    }
  })

  if (!programFromDB) {
    return res.status(404).json({ error: 'PROGRAM_NOT_FOUND', message: 'Program not found.' })
  }

  if (programFromDB?.status === 'DISABLED') {
    return res.status(400).json({ error: 'PROGRAM_DISABLED', message: 'This program is disabled.' })
  }

  const cashbackValue = calculeCashbackHandler(programFromDB, productValue)

  return res.status(200).json({ cashbackValue })
}


