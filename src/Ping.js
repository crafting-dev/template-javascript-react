import React, { useState } from 'react'
import './Ping.css'

function Ping() {
  const [ping, setPing] = useState('')
  const [pong, setPong] = useState({
    ping: '',
    received_at: '',
  })

  const createBaseUrl = () => {
    const locationToMatchRegex = new RegExp('^http://localhost:[0-9]*')
    if (locationToMatchRegex.test(window.location.origin)) {
      // The host:port serving backend in a two endpoint setup
      return 'http://localhost:3000'
    }
    // The current window in a single endpoint setup
    // /ping path_prefix serves the backend
    return window.location.origin
  }

  const handleChange = (e) => {
    setPing(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const pingServer = async (ping) => {
      const baseUrl = createBaseUrl()
      const response = await fetch(`${baseUrl}/ping?ping=${ping}`)
      const data = await response.json()
      setPong(data)
    }

    pingServer(ping)
  }

  return (
    <div className="Ping">
      <form>
        <input
          type="text"
          onKeyDown={handleChange}
          onChange={handleChange}
          placeholder="Ping server with some text..."
        />
        <div className="code-display">
          <code>
            {JSON.stringify(
              {
                ping,
              },
              null,
              2
            )}
          </code>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
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
  )
}

export default Ping
