import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';
import logo from '../images/logo.png';

const PageAbout = () => {

    useEffect(() => {
        document.title = `About - ${pageTitle}`;
    }, []);

    return (
        <main>
            <img className="logo" src={logo}></img>
            <Header/>
            <ResponsiveBg />   
        </main>
    );
};

export default PageAbout;