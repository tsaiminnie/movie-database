import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';

const PageSingle = () => {

    useEffect(() => {
        document.title = `Dynamic title here for Single Movies - ${pageTitle}`;
    }, []);

    return (
        <main>
            <Header/>
            <ResponsiveBg />   
        </main>
    );
};

export default PageSingle;