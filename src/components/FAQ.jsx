import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const faqKeys = ['faq.q1', 'faq.q2', 'faq.q3', 'faq.q4', 'faq.q5', 'faq.q6']

function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(null)

  return (
    <div className="faq-section">
      <h2>{t('faq.title')}</h2>
      <div className="faq-list">
        {faqKeys.map((q, i) => {
          const answerKey = q.replace('.q', '.a')
          return (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                {t(q)}
                <span className="faq-toggle">{open === i ? '✕' : '+'}</span>
              </button>
              <div className="faq-answer" style={{ maxHeight: open === i ? '300px' : '0' }}>
                <p>{t(answerKey)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQ
