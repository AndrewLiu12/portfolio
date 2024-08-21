import './NavBar.css'

export default function NavBar() {
    return (
        <div className="topnav">
            <nav id="header">
                <a className="nav active" href="#about">About</a>
                <a className="nav" href="#experiences">Experiences</a>
                <a className="nav" href="#projects">Projects</a>
                <a className="nav" href="#bookReviews">Book Reviews</a>
                <a className="nav" href="#skills">Skills</a>
                <a className="nav" href="#education">Education</a>
            </nav>
        </div>
    )
}