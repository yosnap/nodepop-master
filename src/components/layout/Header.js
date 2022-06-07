import { NavLink } from 'react-router-dom';
import { AuthButton } from '../auth';

import './Header.css';

const isSelected = ({ isActive }) => (isActive ? 'selected' : '');

const Header = () => {
  return (
    <header className="grid">
      <nav className="nav-container">
        <ul>
        <li><strong>Nodepop React</strong></li>
        </ul>
        <ul>
          <li>
            <NavLink to="/adverts" className={isSelected} end>
              Nodepop
            </NavLink>
          </li>
          <li>
            <NavLink to="/adverts/new" className={isSelected}>
              Nuevo anuncio
            </NavLink>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
