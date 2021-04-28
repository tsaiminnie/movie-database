import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';
import Movies from '../components/Movies';
import SortBar from '../components/SortBar';
import PageAbout from '../pages/PageAbout';

const PageHome = () => {

    useEffect(() => {
        document.title = `Home - ${pageTitle}`;
    }, []);

    return (
        <main>
            <Header/>
            <ResponsiveBg />
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
            <SortBar/>
            <Movies/>
            <PageAbout/>
        </main>
    );
};

export default PageHome;