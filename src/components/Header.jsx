import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">liv ramirez</h1>
      <nav className="header__nav-bar">
        <a>Contact</a>
        <a>Home</a>
        <a>About</a>
        <a>Portfolio</a>
      </nav>
    </div>
  )
}

export default Header