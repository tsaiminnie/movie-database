import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import Header from '../components/Header';

const PageFav = () => {

    useEffect(() => {
        document.title = `Favourites - ${pageTitle}`;
    }, []);

    return (
        <main>
            <Header/> 
        </main>
    );
};

export default PageFav;