import { createContext, useContext, useState } from 'react'
import ar from '../i18n/ar.json'
import en from '../i18n/en.json'

const translations = { ar, en }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')

  const t = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    return val || key
  }

  const toggleLang = () => setLang(l => l === 'ar' ? 'en' : 'ar')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
