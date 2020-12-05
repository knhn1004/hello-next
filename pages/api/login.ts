import { NextApiResponse, NextApiRequest } from 'next';
import jwt from 'jsonwebtoken';

const KEY = ' jaiosdjaiosdjio';

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    res.statusCode = 404;
    return res.end('Error');
  }

  const { username, password } = req.body;
  console.log(req.body);
  console.log('username: ', username);

  res.json({
    token: jwt.sign(
      {
        username,
        admin: username === 'admin' && password === 'admin',
      },
      KEY
    ),
  });
}
