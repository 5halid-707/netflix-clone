import { useLanguage } from '../context/LanguageContext'

function ReasonsSection() {
  const { t } = useLanguage()
  const reasons = [
    { title: t('reasons.tv.title'), desc: t('reasons.tv.desc'), icon: '📺' },
    { title: t('reasons.download.title'), desc: t('reasons.download.desc'), icon: '⬇️' },
    { title: t('reasons.anywhere.title'), desc: t('reasons.anywhere.desc'), icon: '🌐' },
    { title: t('reasons.kids.title'), desc: t('reasons.kids.desc'), icon: '👶' },
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
