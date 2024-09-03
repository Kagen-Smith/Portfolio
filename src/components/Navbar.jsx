import "/./src/components/styles/navbar.css"

export default function Navbar({ links }) {
    return (
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
    
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {links.map((link, index) => (
                    <li key={index} className="nav-item">
                    {link}
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }