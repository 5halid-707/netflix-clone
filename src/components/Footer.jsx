import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t, toggleLang, lang } = useLanguage()
  const col1 = [t('footer.faq'), t('footer.help'), t('footer.account'), t('footer.media')]
  const col2 = [t('footer.investor'), t('footer.jobs'), t('footer.watch'), t('footer.terms')]
  const col3 = [t('footer.privacy'), t('footer.cookies'), t('footer.corporate'), t('footer.contact')]
  const col4 = [t('footer.speed'), t('footer.legal'), t('footer.exclusive')]

  return (
    <div className="footer">
      <p className="footer-contact">{t('footer.contactQuestion')}</p>
      <div className="footer-links">
        <div className="footer-col">
          {col1.map((link, i) => <a key={i} href="#">{link}</a>)}
        </div>
        <div className="footer-col">
          {col2.map((link, i) => <a key={i} href="#">{link}</a>)}
        </div>
        <div className="footer-col">
          {col3.map((link, i) => <a key={i} href="#">{link}</a>)}
        </div>
        <div className="footer-col">
          {col4.map((link, i) => <a key={i} href="#">{link}</a>)}
        </div>
      </div>
      <div className="footer-lang">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.42 4.8h-2.22c-.22-1.04-.58-2.01-1.06-2.86 1.44.3 2.7 1.18 3.28 2.86zM8 1.64c.64.82 1.16 1.78 1.5 2.86H6.5c.34-1.08.86-2.04 1.5-2.86zM3.42 6.4H1.16c.22-1.62 1.02-3.02 2.2-4.02-.54.94-.9 2.04-1.14 3.3zm-.28 1.2h2.42c.1 1.4.42 2.82 1.02 4.2H4.4c-.82-1.24-1.34-2.7-1.4-4.2zm2.42-1.2H4.7c.06-1.5.58-2.96 1.4-4.2h2.36c.82 1.24 1.34 2.7 1.4 4.2H8.86c-.1-1.4-.42-2.82-1.02-4.2H7.7c-.6 1.38-.92 2.8-1.02 4.2zm1.02 6.56c-.6-1.38-.92-2.8-1.02-4.2h2.04c-.1 1.4-.42 2.82-1.02 4.2zm-1.5-.8c-.48-.85-.84-1.82-1.06-2.86H4.7c.58 1.68 1.84 2.56 3.28 2.86zm4.28-4.56c-.06 1.5-.58 2.96-1.4 4.2h-2.36c-.82-1.24-1.34-2.7-1.4-4.2h5.16zm.28-1.2h2.42c-.06 1.5-.58 2.96-1.4 4.2h-2.36c.6-1.38 1.06-2.8 1.16-4.2zm-2.76-7c.48.85.84 1.82 1.06 2.86h2.22c-.58 1.68-1.84 2.56-3.28 2.86.48-.85.84-1.82 1.06-2.86z" fill="#999"/>
        </svg>
        <select
          value={lang}
          onChange={(e) => { if (e.target.value !== lang) toggleLang() }}
          className="footer-lang-select"
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </div>
      <p className="footer-bottom">{t('footer.bottom')}</p>
    </div>
  )
}

export default Footer
