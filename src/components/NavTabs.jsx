import { NavLink } from 'react-router-dom';
import Navbar from '/./src/components/Navbar.jsx';

export default function Nav() {
  
  return (
    <Navbar
      links={[
        <NavLink 
        key={1} 
        className="nav-link" 
        to="/" 
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--background-color)', 
        })}
        >
          About Me
        </NavLink>,
        <NavLink 
        key={2} 
        className="nav-link" 
        to="/Portfolio"
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--background-color)', 
        })}
        >
          Portfolio
        </NavLink>,
        <NavLink 
        key={3} 
        className="nav-link" 
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--background-color)', 
        })}
        >
        Contact
      </NavLink>,
      <NavLink 
        key={4} 
        className="nav-link" 
        to="/Resume"
        style={({ isActive }) => ({
          color: isActive ? 'var(--accent-color)' : 'var(--background-color)', 
        })}
        >
        Resume
      </NavLink>,
      ]}
    />
  );
}