import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../assets/images/logopaul.png'

function Navbar() {


  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/projecten' className="nav-link">Projecten</Link>
              </li>
              <li className="nav-item">
                <Link to='/over-ons' className="nav-link">Over ons</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
