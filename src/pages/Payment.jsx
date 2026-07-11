import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const plans = [
  { key: 'basic', priceKey: 'payment.basicPrice', qualityKey: 'payment.basicQuality', devicesKey: 'payment.basicDevices' },
  { key: 'standard', priceKey: 'payment.standardPrice', qualityKey: 'payment.standardQuality', devicesKey: 'payment.standardDevices' },
  { key: 'premium', priceKey: 'payment.premiumPrice', qualityKey: 'payment.premiumQuality', devicesKey: 'payment.premiumDevices' },
]

function Payment() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState('standard')
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' })
  const [paid, setPaid] = useState(false)

  const handlePay = (e) => {
    e.preventDefault()
    setPaid(true)
  }

  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="payment-page">
        <h1>{t('payment.title')}</h1>
        <p className="payment-subtitle">{t('payment.plan')}</p>
        {paid ? (
          <div className="payment-success">
            <h2>✓ {t('payment.subscribe')}</h2>
            <p>Welcome to KmhFlix {selected} plan!</p>
          </div>
        ) : (
          <>
            <div className="plans">
              {plans.map((p) => (
                <div
                  key={p.key}
                  className={`plan-card ${selected === p.key ? 'active' : ''}`}
                  onClick={() => setSelected(p.key)}
                >
                  <h3>{t(p.key === 'basic' ? 'payment.basic' : p.key === 'standard' ? 'payment.standard' : 'payment.premium')}</h3>
                  <p className="price">{t(p.priceKey)}<span>{t('payment.month')}</span></p>
                  <p>{t(p.qualityKey)}</p>
                  <p>{t(p.devicesKey)}</p>
                </div>
              ))}
            </div>
            <form className="payment-form" onSubmit={handlePay}>
              <input placeholder={t('payment.cardNumber')} value={card.number} onChange={e => setCard({...card, number: e.target.value})} required />
              <div style={{display:'flex', gap:15}}>
                <input placeholder={t('payment.expiry')} value={card.expiry} onChange={e => setCard({...card, expiry: e.target.value})} required />
                <input placeholder={t('payment.cvv')} value={card.cvv} onChange={e => setCard({...card, cvv: e.target.value})} required />
              </div>
              <button type="submit">{t('payment.pay')}</button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Payment
