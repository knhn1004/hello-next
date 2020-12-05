import { NextApiRequest, NextApiResponse } from 'next';

// similar to express
export default function (req: NextApiRequest, res: NextApiResponse) {
  // this should not be a react component
  res.json({
    status: 'ok',
    number: Math.floor(Math.random() * 10),
  });
}

// http://localhost:3000/api/random-number
