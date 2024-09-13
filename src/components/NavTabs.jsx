import { NavLink } from 'react-router-dom';
import Navbar from '/./src/components/Navbar.jsx';
import './styles/navbar.css';


export default function Nav() {
  
  return (
    <Navbar
      links={[
        <NavLink 
        key={1} 
        className="nav-link" 
        to="/" 
        
        >
          About Me
        </NavLink>,
        <NavLink 
        key={2} 
        className="nav-link" 
        to="/Portfolio"
        
        >
          Portfolio
        </NavLink>,
        <NavLink 
        key={3} 
        className="nav-link" 
        to="/contact"
        
        
        >
        Contact
      </NavLink>,
      <NavLink 
        key={4} 
        className="nav-link" 
        to="/Resume"
      
        >
        Resume
      </NavLink>,
      ]}
    />
  );
}