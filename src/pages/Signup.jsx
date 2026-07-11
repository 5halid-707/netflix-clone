import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signup } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password) { setError(t('auth.error.fill')); return }
    if (password.length < 4) { setError(t('auth.error.password')); return }
    if (!signup(name, email, password)) { setError(t('auth.error.exists')); return }
    navigate('/')
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix" />
      </Link>
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>{t('auth.signUp')}</h1>
        {error && <p className="form-error">{error}</p>}
        <input type="text" placeholder={t('auth.name')} value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder={t('auth.email')} value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder={t('auth.password')} value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">{t('auth.signUp')}</button>
        <div className="form-switch">
          {t('auth.already')} <Link to="/login"><span>{t('auth.signInNow')}</span></Link>
        </div>
        <div className="form-captcha">{t('auth.captcha')}</div>
      </form>
    </div>
  )
}

export default Signup
