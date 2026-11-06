import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="home">
            <div className="home__info">
                <h2>Liv Ramirez</h2>
                <p>Game Writer, Narrative Designer,<br></br> Screenwriter, Author, Nerd.</p>
                <Link to={"/portfolio"}>View Portfolio and Resume</Link>
            </div>
            <div className="home__picture">Picture of Liv goes here</div>
        </div>
    )
}

export default Home