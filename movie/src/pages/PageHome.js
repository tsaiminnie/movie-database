import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';

const PageHome = () => {

    useEffect(() => {
        document.title = `Home - ${pageTitle}`;
    }, []);

    return (
        <main>
            <ResponsiveBg />
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
        </main>
    );
};

export default PageHome;