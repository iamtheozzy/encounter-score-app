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

handler.post(async (req, res) => {
  const { points, reason, team } = req.body;
  try {
    const scoreUpdate = await prisma.points.create({
      data: {
        team,
        reason,
        value: Number(points)
      }
    });
    res.json(scoreUpdate);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export default handler;
