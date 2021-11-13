import Navbar from 'react-bootstrap/Navbar';
import '../NavPortfolio/style.scss';


export const NavPortfolio = () => {
    return (
        <Navbar>
          <div className="container nav-component">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-list-grid navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="#about">about</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#tools">tools</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#projects">projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#contact">contact</a>
                    </li>  
                  </ul>
                </div>
            </nav>
          </div>
        </Navbar>
    )
}

