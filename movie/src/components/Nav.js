import { NavLink } from 'react-router-dom';

const Nav = ({handleShowHideNav, navOpen}) => {

    function closeNav(e){

        handleShowHideNav();
        e.target.blur();
        
    }
   
    return (
        <nav className="main-nav" onClick={closeNav}>
            <div className={navOpen ? "menu-bar is-active" : "menu-bar right"}>
                <div className="menu-heading" >
                    Jane Doe
                </div>
                <div className="menu-body">
                    <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/favourites">Favourites</NavLink></li>
                    <li><NavLink to="/my-account">My Account</NavLink></li>
                    <li><NavLink to="/sign-in">Sign In</NavLink></li>
                
                    </ul>
                </div>
                </div>

                <div class="overlay"></div>
        </nav>
    );
    
};

export default Nav;