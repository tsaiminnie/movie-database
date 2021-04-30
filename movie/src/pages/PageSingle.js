import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from '../components/Movies';
import isFav from '../utilities/isFav';

const PageSingle = () => {

    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];
    let movieObj;

    useEffect(() => {

        if (!movieObj) {
            document.title = `Single Page - ${pageTitle}`;
        } else {
            document.title = `${movie.title} - ${pageTitle}`;
        }
        
    }, [movieObj]);

    return (
        <section className="single-page">
            <h2>Single Page: {movie.title}</h2>
                {!movieObj ? 
                    <p>Movie not found. <Link to="/">Return to home page</Link>.</p> :
                    <div className="kitten-single">
                        <Movies movieObj={movieObj} 
                                isFav={isFav(globalState.favs, null, movieObj.id)} />
                    </div>
                }
        </section>
    );
};

export default PageSingle;