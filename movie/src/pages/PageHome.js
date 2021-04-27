import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';

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
        </main>
    );
};

export default PageHome;