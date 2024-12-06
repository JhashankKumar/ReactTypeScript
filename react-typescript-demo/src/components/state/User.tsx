import { useState } from 'react'
import { AuthUser } from '../componenttypes/ComponentType.types'

// type AuthUser = {
//   name: string
//   email: string
// }

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User Email is {user?.email}</div>
    </div>
  )
}
