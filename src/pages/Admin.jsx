import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { categories } from '../data/movies'

function Admin() {
  const { t } = useLanguage()
  const { user } = useAuth()
  const navigate = useNavigate()
  const allUsers = JSON.parse(localStorage.getItem('kmhflix_users') || '[]')
  const totalItems = Object.values(categories).flat().length

  useEffect(() => {
    if (!user || !user.isAdmin) navigate('/')
  }, [user])

  if (!user || !user.isAdmin) return null

  return (
    <div>
      <Navbar />
      <div style={{ height: '100px' }} />
      <div className="admin-panel">
        <h1>{t('admin.title')}</h1>
        <div className="admin-stats">
          <div className="stat-card"><h3>{allUsers.length}</h3><p>{t('admin.totalUsers')}</p></div>
          <div className="stat-card"><h3>{totalItems}</h3><p>{t('admin.totalMovies')}</p></div>
          <div className="stat-card"><h3>{allUsers.filter(u => u.isAdmin).length}</h3><p>{t('admin.activeUsers')}</p></div>
          <div className="stat-card"><h3>$0</h3><p>{t('admin.revenue')}</p></div>
        </div>
        <h2>{t('admin.users')}</h2>
        <table className="admin-table">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>{t('admin.manage')}</th></tr></thead>
          <tbody>
            {allUsers.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.isAdmin ? 'Admin' : 'User'}</td>
                <td>
                  <button className="admin-btn">{t('admin.edit')}</button>
                  <button className="admin-btn del">{t('admin.delete')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
