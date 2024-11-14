import React from 'react';
import logo from '../assets/logo-white.png';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} /> 
          <h1 style={styles.logoText}>Koushik Mote</h1> 
        </div>
        <ul style={styles.navList}>
          <li><a href="#about" style={styles.navLink}>About</a></li>
          <li><a href="#projects" style={styles.navLink}>Projects</a></li>
          <li><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#fefae0',
    padding: '10px 0',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between', // Space between name and nav links
    alignItems: 'center',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '0 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },
  logo: {
    width: '50px', 
    marginRight: '10px', 
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight:'10px'
  },
  logoText: {
    color: 'black',
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  navList: {
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'black',
    margin: '0 15px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Navbar;
