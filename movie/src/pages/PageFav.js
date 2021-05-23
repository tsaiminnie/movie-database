import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import { Link } from 'react-router-dom';
import useGlobal from '../globals/globalState';
import Movies from '../components/Movies';
import MovieCard from '../components/MovieCard';
import tv from '../images/tv.png';

const PageFav = () => {

    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    useEffect(() => {
        document.title = `Favourites - ${pageTitle}`;
    }, []);

    return (
        <section className="favourites-page">

            {globalState.favs.length < 1 ? <section className="noFavourites">
                    
                                              <h2>Favourites</h2>
            
                                              <div className="flex-image">
                                                <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some!</p> 
                                                <img className="tv" alt='tv' src={tv}/>
                                              </div>

            </section>:
                <div className="ourFavourites"> 
                    <h2>Favourites</h2>

                    <div className="favourites-info">

                        {globalState.favs.map((singleMovie, i) => {
                            return <MovieCard   key={i} 
                                                movie={singleMovie}
                                                isFav={true} 
                                                trimOverview={false}/>
                    })}
                    </div>
				    </div>}
            
        </section>
    );
};

export default PageFav;