import { NavLink } from 'react-router-dom';
import Navbar from '/./src/components/Navbar.jsx';
import './styles/navbar.css';
const styles = {
  navbar: {
   
    color: 'white',
    top: 0,
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
  },
  nav: {
    color: 'var(--accent-color)',
  },
};

export default function Nav() {
  
  return (
    <Navbar
      links={[
        <NavLink 
        key={1} 
        className="nav-link" 
        to="/" 
        style={styles.navbar}
        >
          About Me
        </NavLink>,
        <NavLink 
        key={2} 
        className="nav-link" 
        to="/Portfolio"
        style={styles.navbar}
        >
          Portfolio
        </NavLink>,
        <NavLink 
        key={3} 
        className="nav-link" 
        to="/contact"
        style={styles.navbar}
        
        >
        Contact
      </NavLink>,
      <NavLink 
        key={4} 
        className="nav-link" 
        to="/Resume"
        style={styles.navbar}
        >
        Resume
      </NavLink>,
      ]}
    />
  );
}