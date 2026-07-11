import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function EmailCtaSection() {
  const [email, setEmail] = useState('')
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleStart = (e) => {
    e.preventDefault()
    navigate(`/signup?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="email-cta-section">
      <p className="email-cta-text">{t('emailCta.ready')}</p>
      <form className="hero-email-form" onSubmit={handleStart}>
        <input
          type="email"
          placeholder={t('emailCta.emailPlaceholder')}
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">{t('hero.getStarted')}</button>
      </form>
    </div>
  )
}

export default EmailCtaSection
