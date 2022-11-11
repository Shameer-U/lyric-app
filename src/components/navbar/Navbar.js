import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <nav className='nav-container'>
        <span onClick={handleClick} >LyricFinder</span>
    </nav>
  );
}

export default Navbar