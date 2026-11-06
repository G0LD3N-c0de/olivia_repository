import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <nav className="footer__nav-bar">
                <Link to={"/about"}>About</Link>
                <p>Contact</p>
                <Link to={"/portfolio"}>Portfolio</Link>
            </nav>
            <nav className="footer__socials">
                <a>Instagram</a>
                <a>Twitter</a>
                <a>LinkedIn</a>
            </nav>
        </div>
    )
}

export default Footer