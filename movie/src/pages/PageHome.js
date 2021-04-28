import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';
import Movies from '../components/Movies';
import SortBar from '../components/SortBar';
import LoginBtn from '../components/LoginBtn';

const PageHome = () => {

    useEffect(() => {
        document.title = `Home - ${pageTitle}`;
    }, []);

    return (
        <main>
            <Header/>
            <ResponsiveBg />
            <LoginBtn />
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
            <section className='slogan'>
                <h2>Discover</h2>
                <h2>Dream</h2>
                <h2>Imagine</h2>
            </section>
            <SortBar/>
            <Movies/>
        </main>
    );
};

export default PageHome;