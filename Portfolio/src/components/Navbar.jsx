export default function Navbar() {
    return (
       <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
            <button className_name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {links.map((link) => link)}
                </ul>
            </div>
        </div>
       </nav> 
    );
}