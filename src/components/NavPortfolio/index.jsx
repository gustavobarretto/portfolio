import Navbar from 'react-bootstrap/Navbar';
import '../NavPortfolio/style.scss';

export const NavPortfolio = () => {
    return (
        <Navbar>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="#about">about</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">tools</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">contact</a>
                    </li>  
                  </ul>
                </div>
              </div>
            </nav>
        </Navbar>
    )
}

