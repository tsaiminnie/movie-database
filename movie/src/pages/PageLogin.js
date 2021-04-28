import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';

const PageLogin = () => {

    useEffect(() => {
        document.title = `Login - ${pageTitle}`;
    }, []);

    return (
        <main>
            <Header/>
            <ResponsiveBg />   
        </main>
    );
};

export default PageLogin;