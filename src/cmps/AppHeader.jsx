import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

export function AppHeader(props) {
  const { loggedInUser } = useSelector((state) => state.userModule)
  // const history = useHistory()
  const navigate = useNavigate()

  return (
    <header className="app-header">
      <h1>Bitcoin</h1>

      <section className="user">
        <p>Name: {loggedInUser.name}</p>
        <p>Balance: {loggedInUser.balance}</p>
      </section>

      <button onClick={() => navigate(-1)}>Back</button>

      <nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/statistics">דtatistics</NavLink>
      </nav>
    </header>
  )
}
