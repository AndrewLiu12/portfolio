import './App.css';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import BookReviews from './BookReviews/BookReviews';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Socials from './Socials/Socials';

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Experiences />
      <Projects />
      <BookReviews />
      <Skills />
      <Education />
      <Socials />
    </div>
  );
}

export default App;
