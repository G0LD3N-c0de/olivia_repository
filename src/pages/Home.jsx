import "./Home.css"
import { Link } from "react-router-dom"
import olivia from "../assets/olivia_37.jpg"

function Home() {
    return (
        <div className="home">
            <div className="home__section-1">
                <div className="home__info">
                    <h2>Liv Ramirez</h2>
                    <p>Game Writer, Narrative Designer,<br></br> Screenwriter, Author, Nerd.</p>
                    <Link to={"/portfolio"}>View Portfolio and Resume</Link>
                </div>
                <img className="home__picture" src={olivia}></img>
            </div>
            <div className="home__section-2">
                <h3>More about Liv's skillset</h3>
                <h4>What is your formal training?</h4>
                <p>I graduated summa cum laude from the University of New Mexico 
                    with a Bachelor’s in English Studies with minors in 
                    History and Studio Arts. I also graduated with honors from 
                    Vancouver Film School’s Writing for Television, Film, and 
                    Video Games diploma course, where I won the D&D Module 
                    of the Year Award. </p>
                    <h4>What is your work experience?</h4>
                    <p>In May 2024, I completed a reader’s report internship through Enlighten Entertainment, 
                        writing thorough and persuasive coverage on feature scripts. <br></br>
                        I also was a part of the narrative team on Flaming Walrus Studio’s Gadot Wild Jam 69 for the 
                        sci-fi puzzle game, AVOID. <br></br>
                        I have also assisted productions as a 1st AD and PA, written a short film, Memory Puzzle (2024), 
                        and directed a motion capture shoot through Beyond Capture Studios and VFS.<br></br>
                        Finally, I worked at an outdoor recreation company for five years, specializing in quotation, 
                        project management, and copywriting. </p>
                    <h4>What do you offer?</h4>
                    <p>I am trained in Final Draft 12, Unreal Engine, Twine, Microsoft Office, Canva, and Procreate. 
                        I have experience writing game design docs, game scripts, comic scripts, features, TV pilots, 
                        and TTRPG modules. I am a cooperative writer with experience in a Writer’s Room, able to work 
                        quickly on edits, and precise in my work.</p>
                    <Link to={"/about"}>Learn More</Link>
            </div>
        </div>
    )
}

export default Home