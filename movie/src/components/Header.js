import logo from '../images/logo.png';
import {useState, useEffect} from 'react';
import Nav from './Nav';


const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    function isDesktop(e){
        if(e.matches){
            setNavOpen(false);
        }
    }

    useEffect(() => {
        let mq= window.matchMedia('(min-width: 600px)');
        mq.addListener(isDesktop)
        return()=> mq.removeListener(isDesktop);
    }, [])
    function showHideNav(){
        setNavOpen(!navOpen);
    }
    return (

    <header className={navOpen ? 'show': 'closed'}>
                    <img className="logo" alt='logo' src={logo}></img>
    
        <div className="menu-wrapper"
           onMouseDown={(e) => { e.preventDefault(); }}
            onClick={showHideNav}>
           
            <div className={ navOpen ? "hamburger-menu animate" : "hamburger-menu"}></div>	  
        </div>
    
        

        <Nav handleShowHideNav={showHideNav} navOpen={navOpen} />
    </header>

    
            
  );

};


export default Header;
