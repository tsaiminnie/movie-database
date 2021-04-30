import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import { Link } from 'react-router-dom';
import useGlobal from '../globals/globalState';
import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';

const PageFav = () => {

    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    useEffect(() => {
        document.title = `Favourites - ${pageTitle}`;
    }, []);

    return (
        <section>
            <h2>Favourite Movies</h2>
            {globalState.favs.length < 1 ? <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some!</p> : 
                    <div> 
                        {globalState.favs.map((singleMovie, i) => {
                            return <MovieCard   key={i} 
                                                movie={singleMovie}
                                                isFav={true} />
                    })}
				    </div>}
        </section>
    );
};

export default PageFav;