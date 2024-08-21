import './App.css';
import NavBar from './NavBar/NavBar';
import Intro from './Intro/Intro';
import Experiences from './Experiences/Experiences';
import Projects from './Projects/Projects';
import BookReviews from './BookReviews/BookReviews';

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Experiences />
      <Projects />
      <BookReviews />
    </div>
  );
}

export default App;
