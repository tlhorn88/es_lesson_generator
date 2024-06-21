import './Home.css'
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <h1>Welcome to the Lesson Plan Generator!</h1>
      <div className='nav-buttons-container'>

      <NavLink to="/favorites" className="nav-button">
          Favorites
        </NavLink>
        <NavLink to="/browse" className="nav-button">
          Browse Collection
        </NavLink>
        <NavLink to="/yearly-lessons" className="nav-button">
          My Yearly Lessons
        </NavLink>
        <NavLink to="/yearly-songs" className="nav-button">
          My Song List
        </NavLink>
      </div>
    </div>
  )
}

export default Home;