import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import Login from '../components/Login';
//import ResponsiveBg from '../components/ResponsiveBg';
//import Header from '../components/Header';

const PageLogin = () => {

    useEffect(() => {
        document.title = `Login - ${pageTitle}`;
    }, []);

    return (
        <section>
            <Login />
        </section>
    );
};

export default PageLogin;