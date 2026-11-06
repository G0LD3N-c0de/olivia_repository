import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">liv ramirez</h1>
      <nav className="header__nav-bar">
        <p>Contact</p>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/portfolio"}>portfolio</Link>
      </nav>
    </div>
  )
}

export default Header