import { useEffect, useState } from 'react';
import { pageTitle } from '../globals/globals';
import { useLocation, useParams, Link } from 'react-router-dom';
import useGlobal from '../globals/globalState';
import MovieCard from '../components/MovieCard';
import isFav from '../utilities/isFav';
import { API_TOKEN } from '../globals/globals';

const PageSingle = () => {

    const [globalState] = useGlobal();

    const { id } = useParams();

    const [singleMovie, setSingleMovie] = useState(null);

    useEffect(() => {

        const fetchMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
              }
        });
        const movieData = await res.json();
        if(movieData.hasOwnProperty("success")){
            setSingleMovie(false);
        } else {
            setSingleMovie(movieData);
        }
        console.log(movieData);
      }
  
      fetchMovie();
        
    }, [id]);

    return (
        <section className="single-page">

            {singleMovie === false && <p>Movie not found. <Link to="/">Return to home page</Link>.</p>}

            {singleMovie && <div className="singleMovie">
            <img className ="backdrop" src={`https://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path}`} alt={`A poster for the movie ${singleMovie.title}`}></img>
     
                    <MovieCard  movie={singleMovie} 
                                isFav={isFav(globalState.favs, null, singleMovie.id)}
                                trimOverview={false}/>
                            </div> }
        <p className="release-date singlePageInfo">Release Date:</p> 
        <p className="overview-title singlePageInfo">Overview:</p>    
                
        </section>
    );
};

export default PageSingle;