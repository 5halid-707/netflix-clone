import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields')
      return
    }
    if (isSignUp && !form.name) {
      setError('Please enter your name')
      return
    }
    if (form.password.length < 4) {
      setError('Password must be at least 4 characters')
      return
    }
    navigate('/')
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
      </Link>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        {error && <p className="form-error">{error}</p>}
        {isSignUp && (
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email or phone number"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p>Need help?</p>
        </div>
        <div className="form-switch">
          {isSignUp ? (
            <>Already have an account?{' '}
              <span onClick={() => { setIsSignUp(false); setError('') }}>Sign in now</span>
            </>
          ) : (
            <>New to Netflix?{' '}
              <span onClick={() => { setIsSignUp(true); setError('') }}>Sign up now</span>
            </>
          )}
        </div>
        <div className="form-captcha">
          This page is protected by Google reCAPTCHA to ensure you are not a bot.
        </div>
      </form>
    </div>
  )
}

export default Login
