import { NextApiResponse, NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

const KEY = ' jaiosdjaiosdjio';

export default function (req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean };
  if (admin) {
    res.json({ secretAdminCode: 12345 });
  } else {
    res.json({ admin: false });
  }
}
