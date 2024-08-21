import { Link } from 'react-scroll';
import './NavBar.css';

export default function NavBar() {
    return (
        <header className="topnav">
            <nav id="header" className='nav__container__actions'>
                <ul className='mySections'>
                    <li className='mySection'><Link activeClass="active" spy to="intro">About</Link></li>
                    <li className='mySection'><Link activeClass="active" spy to="experiences">Experiences</Link></li>
                    <li className='mySection'><Link activeClass="active" spy to="projects">Projects</Link></li>
                    <li className='mySection'><Link activeClass="active" spy to="bookReviews">Book Reviews</Link></li>
                    <li className='mySection'><Link activeClass="active" spy to="skills">Skills</Link></li>
                    <li className='mySection'><Link activeClass="active" spy to="education">Education</Link></li>
                </ul>
            </nav>
        </header>
    )
}