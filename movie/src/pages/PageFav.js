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
        <section className="favourites-page">
            <h2>Favourites</h2>
            {globalState.favs.length < 1 ? <div>
                                                <h1></h1>
                                                <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some!</p> 
                                            </div> : 
                    <div> 
                        {globalState.favs.map((singleMovie, i) => {
                            return <MovieCard   key={i} 
                                                movie={singleMovie}
                                                isFav={true} 
                                                trimOverview={false}/>
                    })}
				    </div>}
            <p className="release-date singlePageInfo">Release Date:</p> 
            <p className="overview-title singlePageInfo">Overview:</p> 
        </section>
    );
};

export default PageFav;