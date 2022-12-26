import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import prisma from '../../../lib/prisma';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res
      .status(500)
      .json({ error: `Sorry something Happened! ${error.message}` });
  }
});

handler.get(async (req, res) => {
  try {
    // Get all points data
    const points = await prisma.points.findMany();
    res.json(points);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export default handler;