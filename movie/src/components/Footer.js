import { NavLink } from 'react-router-dom';
import logoBlack from '../images/logo-black.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
            <NavLink to="/" exact><img className="logo" alt='logo' src={logoBlack}/></NavLink>

                <h3>
                    About
                </h3>

                <h3>
                    Account
                </h3>
  
                <h3>
                    Contact
                </h3>
  
 
            </div>
        </footer>
    )
}

export default Footer;
