
import logo from '../../images/Logo-g.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="n-left">
                <img className='n-logo' src={logo} alt="Medico" />
            </div>
            <div className="n-right">
                <ul className="n-list">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Features</li>
                </ul>
                <button className="btn n-btn">
                    Contact
                </button>
            </div>
        </div>
    );
}

export default Navbar;