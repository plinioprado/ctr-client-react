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
  <div className="form loginForm">
    <form onSubmit={handleSubmit} noValidate>
      <div>
      <label>
        Email:
      <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      </div>
      <div>
      <label>
        <br />
        Pass:
      <input type="password" value={pass} onChange={handlePassChange} />
      </label>
      </div>
      <div>
      <br />
      <button type="submit" value="Ok" className="btn btn-primary">Ok</button>
      </div>
      {
        error &&
        <p className="error-message">{error}</p>
      }
    </form>
  </div>
)

export default Login