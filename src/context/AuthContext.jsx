import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext()

function loadList() {
  return JSON.parse(localStorage.getItem('kmhflix_mylist') || '[]')
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [myList, setMyList] = useState(loadList)

  useEffect(() => {
    const saved = localStorage.getItem('kmhflix_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('kmhflix_users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) return false
    const data = { name: found.name, email: found.email, isAdmin: found.isAdmin || false }
    setUser(data)
    localStorage.setItem('kmhflix_user', JSON.stringify(data))
    return true
  }

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('kmhflix_users') || '[]')
    if (users.find(u => u.email === email)) return false
    const isAdmin = users.length === 0
    users.push({ name, email, password, isAdmin })
    localStorage.setItem('kmhflix_users', JSON.stringify(users))
    const data = { name, email, isAdmin }
    setUser(data)
    localStorage.setItem('kmhflix_user', JSON.stringify(data))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('kmhflix_user')
  }

  const addToList = (item) => {
    setMyList(prev => {
      if (prev.find(i => i.id === item.id)) return prev
      const next = [...prev, item]
      localStorage.setItem('kmhflix_mylist', JSON.stringify(next))
      return next
    })
  }

  const removeFromList = (id) => {
    setMyList(prev => {
      const next = prev.filter(i => i.id !== id)
      localStorage.setItem('kmhflix_mylist', JSON.stringify(next))
      return next
    })
  }

  const isInList = useCallback((id) => myList.some(i => i.id === id), [myList])

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, addToList, removeFromList, myList, isInList }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
