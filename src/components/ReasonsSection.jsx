import { useLanguage } from '../context/LanguageContext'

function TvIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="64" height="40" rx="4" stroke="#e50914" strokeWidth="2" fill="none"/>
      <path d="M28 50L36 58L44 50" stroke="#e50914" strokeWidth="2" fill="none"/>
      <line x1="36" y1="58" x2="36" y2="62" stroke="#e50914" strokeWidth="2"/>
      <line x1="30" y1="62" x2="42" y2="62" stroke="#e50914" strokeWidth="2"/>
      <rect x="10" y="16" width="8" height="6" rx="1" fill="#e50914" opacity="0.3"/>
      <circle cx="54" cy="16" r="2" fill="#e50914" opacity="0.3"/>
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="8" width="40" height="56" rx="4" stroke="#e50914" strokeWidth="2" fill="none"/>
      <line x1="24" y1="16" x2="48" y2="16" stroke="#e50914" strokeWidth="1.5"/>
      <line x1="24" y1="22" x2="40" y2="22" stroke="#e50914" strokeWidth="1.5"/>
      <line x1="24" y1="28" x2="36" y2="28" stroke="#e50914" strokeWidth="1.5"/>
      <path d="M36 38V54M36 54L28 46M36 54L44 46" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 38H42" stroke="#e50914" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function AnywhereIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="28" stroke="#e50914" strokeWidth="2" fill="none"/>
      <ellipse cx="36" cy="36" rx="14" ry="28" stroke="#e50914" strokeWidth="1.5" fill="none"/>
      <line x1="22" y1="36" x2="50" y2="36" stroke="#e50914" strokeWidth="1.5"/>
      <line x1="8" y1="28" x2="64" y2="28" stroke="#e50914" strokeWidth="1.5" opacity="0.5"/>
      <line x1="8" y1="44" x2="64" y2="44" stroke="#e50914" strokeWidth="1.5" opacity="0.5"/>
      <circle cx="36" cy="36" r="5" fill="#e50914" opacity="0.3"/>
    </svg>
  )
}

function KidsIcon() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="26" r="12" stroke="#e50914" strokeWidth="2" fill="none"/>
      <path d="M18 62C18 50 26 40 36 40C46 40 54 50 54 62" stroke="#e50914" strokeWidth="2" fill="none"/>
      <circle cx="28" cy="26" r="2" fill="#e50914" opacity="0.5"/>
      <circle cx="44" cy="26" r="2" fill="#e50914" opacity="0.5"/>
      <path d="M32 32L36 36L40 32" stroke="#e50914" strokeWidth="2" fill="none"/>
      <rect x="44" y="46" width="16" height="14" rx="3" stroke="#e50914" strokeWidth="1.5" fill="none"/>
      <circle cx="52" cy="52" r="1.5" fill="#e50914"/>
    </svg>
  )
}

function ReasonsSection() {
  const { t } = useLanguage()
  const reasons = [
    { title: t('reasons.tv.title'), desc: t('reasons.tv.desc'), icon: <TvIcon /> },
    { title: t('reasons.download.title'), desc: t('reasons.download.desc'), icon: <DownloadIcon /> },
    { title: t('reasons.anywhere.title'), desc: t('reasons.anywhere.desc'), icon: <AnywhereIcon /> },
    { title: t('reasons.kids.title'), desc: t('reasons.kids.desc'), icon: <KidsIcon /> },
  ]

  return (
    <div className="reasons-section">
      <h2>{t('reasons.title')}</h2>
      <div className="reasons-grid">
        {reasons.map((r, i) => (
          <div key={i} className="reason-card">
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <span className="reason-icon">{r.icon}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReasonsSection
