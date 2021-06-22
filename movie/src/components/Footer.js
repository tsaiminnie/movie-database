import { NavLink } from 'react-router-dom';
import logoBlack from '../images/logo-black.png';

function Footer() {
    return (
        <footer>
            <div className="footer">
            <NavLink to="/" exact><img className="logo" alt='DiscoveryFlix logo' src={logoBlack}/></NavLink>

                <nav className="footerLinks">
                    <ul>
                        <li><a><NavLink to="/" exact>Home</NavLink></a></li>
                        <li><a><NavLink to="/about" exact>About</NavLink></a></li>
                        <li><a><NavLink to="/favourites" exact>Favourites</NavLink></a></li>
                    </ul> 
                </nav>
                
            </div>
        </footer>
    )
}

export default Footer;
