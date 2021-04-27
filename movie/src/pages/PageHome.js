import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';

const PageHome = () => {

    useEffect(() => {
        document.title = `Home - ${pageTitle}`;
    }, []);

    return (
        <main>
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
        </main>
    );
};

export default PageHome;