import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()
  const links = [
    t('footer.audioDesc'), t('footer.help'), t('footer.gift'),
    t('footer.media'), t('footer.investor'), t('footer.jobs'),
    t('footer.terms'), t('footer.privacy'), t('footer.legal'),
    t('footer.cookies'), t('footer.corporate'), t('footer.contact'),
  ]

  return (
    <div className="footer">
      <div className="footer-icons">
        <img src="/facebook_icon.svg" alt="facebook" />
        <img src="/instagram_icon.svg" alt="instagram" />
        <img src="/twitter_icon.svg" alt="twitter" />
        <img src="/youtube_icon.svg" alt="youtube" />
      </div>
      <ul>
        {links.map((link, i) => <li key={i}>{link}</li>)}
      </ul>
      <p className="copyright-text">{t('footer.copyright')}</p>
    </div>
  )
}

export default Footer
