import React from 'react'
import './styles.css'

const Login = ({
  handleSubmit,
  email,
  pass,
  error,
  handleEmailChange,
  handlePassChange
}) => (
  <div className="loginForm">
    <form onSubmit={handleSubmit} noValidate>
      <div>
      <label>
        Email:
      <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      </div>
      <div>
      <label>
        Pass:
      <input type="password" value={pass} onChange={handlePassChange} />
      </label>
      </div>
      <div>
      <input type="submit" value="Ok" />
      </div>
      {
        error &&
        <p>{error}</p>
      }
    </form>
  </div>
)

export default Login