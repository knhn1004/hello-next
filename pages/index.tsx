// styled-jsx
// import './main.css'; -> illegal

import { useState } from 'react';
import jwt from 'jsonwebtoken';

export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('you are not logged in');
  const [secretMessage, setSecretMessage] = useState<string>('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const resObject = await res.json();

    const token = resObject.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json);

      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? 'an admin' : 'not an admin'
        }`
      );

      const res = await fetch('/api/secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      }).then(t => t.json());

      if (res.secretAdminCode) {
        setSecretMessage(res.secretAdminCode);
      } else {
        setSecretMessage('nothing available');
      }
    } else {
      setMessage('oops, something went wrong');
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <h1>Secret: {secretMessage}</h1>
      <form method="POST" action="/api/login">
        <input
          name="username"
          type="text"
          // defaultValue="admin"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <br />
        <input
          name="password"
          type="password"
          // defaultValue="admin"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <input type="submit" value="login" onClick={handleSubmit} />
      </form>
    </div>
  );
}
