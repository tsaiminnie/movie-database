import { NavLink } from 'react-router-dom';

const Nav = ({handleShowHideNav, navOpen}) => {

    function closeNav(e){

        handleShowHideNav();
        e.target.blur();
        
    }
   
    return (
        <nav className="main-nav" onClick={closeNav}>
            <div className={navOpen ? "menu-bar is-active" : "menu-bar right"}>
                <div className="menu-heading"></div>

                <nav className="menu-body">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/favourites">Favourites</NavLink></li>
                    </ul>
                </nav>
                
                </div>

                <div className="overlay"></div>
        </nav>
    );
    
};

export default Nav;