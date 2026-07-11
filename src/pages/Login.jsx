import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', email, password)
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
      </Link>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email or phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p>Need help?</p>
        </div>
        <div className="form-switch">
          New to Netflix? <Link to="/"><span>Sign up now</span></Link>
        </div>
      </form>
    </div>
  )
}

export default Login
