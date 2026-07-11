import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { getImage } from '../data/movies'
import { useNavigate } from 'react-router-dom'

function MyList() {
  const { myList, removeFromList } = useAuth()
  const { t } = useLanguage()
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="more-cards">
        <div className="title-cards">
          <h2>{t('myList.title')}</h2>
          {myList.length === 0 ? (
            <p style={{ color: '#999', padding: '40px 0', textAlign: 'center' }}>
              {t('myList.empty')}
            </p>
          ) : (
            <div className="card-list">
              {myList.map((item) => (
                <div key={item.id} className="card" style={{ position: 'relative' }}>
                  <Link to={`/player/${item.id}`}>
                    <img src={getImage(item.path)} alt={item.name} />
                  </Link>
                  <p>{item.name}</p>
                  <button
                    onClick={() => removeFromList(item.id)}
                    style={{
                      position: 'absolute', top: 8, left: 8,
                      background: 'rgba(0,0,0,0.7)', color: '#fff',
                      border: '1px solid #fff', borderRadius: 4,
                      padding: '4px 10px', cursor: 'pointer', fontSize: 12
                    }}
                  >
                    {t('myList.remove')}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyList
