import "/./src/components/styles/navbar.css"

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
        color: 'white',
    },
};

export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
    
          <button className="navbar-toggler ms-auto"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span style={styles.nav} className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
          </button>
    
          <div style={styles.navbar} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link, index) => (
                    <li key={index} style={styles.navbar}>
                    {link}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }