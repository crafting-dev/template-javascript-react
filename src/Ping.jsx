import React, { useState } from 'react';
import './Ping.css';

export function Ping() {
  const [ping, setPing] = useState('');
  const [pong, setPong] = useState();

  const baseUrl = /^http:\/\/localhost:[0-9]*$/.test(window.location.origin)
    ? 'http://localhost:3000'
    : process.env.REACT_APP_BACKEND_API_URL;

  const handleChange = (event) => {
    setPing(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(`${baseUrl}/ping?ping=${ping}`);
    const data = await resp.json();
    setPong(data);
  };

  return (
    <div className="Ping">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onKeyDown={() => handleChange}
          onChange={handleChange}
          placeholder="Ping server with some text..."
        />
        <div className="code-display">
          <code>{JSON.stringify({ ping }, null, 2)}</code>
        </div>
        <button type="submit">Submit</button>
      </form>

      {pong && (
        <div>
          <code>
            {JSON.stringify(
              {
                ping: pong.ping,
                received_at: new Date(pong.received_at).toLocaleString(),
              },
              null,
              2
            )}
          </code>
        </div>
      )}
    </div>
  );
}
