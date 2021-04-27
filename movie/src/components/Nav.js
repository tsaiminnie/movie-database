import { NavLink } from 'react-router-dom';

const Nav = ({handleShowHideNav}) => {

    function closeNav(e){

        handleShowHideNav();
        e.target.blur();
        
    }
   
    return (
        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
    
};

export default Nav;