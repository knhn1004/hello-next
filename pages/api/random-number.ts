import { NextApiRequest, NextApiResponse } from 'next';

// similar to express
export default function (req: NextApiRequest, res: NextApiResponse) {
  // console.log('req body: ', req.body);
  // console.log('req cookies: ', req.cookies);
  // console.log('req headers: ', req.headers);
  // console.log('req query: ', req.query);

  // this should not be a react component
  // res.json({
  // status: 'ok',
  // number: Math.floor(Math.random() * 10),
  // });
  res.setHeader('X-Custom-Header', 'we are open to hire people!');
  // res.statusCode(404);
  // this is how you set cookie
  // useful for authentication
  res.setHeader('Set-Cookie', 'isProgrammer=true;');
  res.send('hello world!');

  // we can also use middlewares
}

// http://localhost:3000/api/random-number
