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

    // const [singleCredit, setSingleCredit] = useState(null);

    useEffect(() => {

        const fetchMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8001a7eab9a9a130964dd2225dcb1159&language=en-US&append_to_response=credits`);
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

    function makeCast(arr) {
        arr = arr.splice(0, 4)
        return arr.map(member => { 
            return (
                <div className="actorCard">
                    <img className="actor-img" src={`https://image.tmdb.org/t/p/w185/${member.profile_path}`} alt={`${member.name}`}/>
                    <h2>{member.character}</h2>
                    <p>{member.name}</p>
                </div>
            )
         })
    }

    return (
        <section className="single-page">

            {singleMovie === false && <p>Movie not found. <Link to="/">Return to home page</Link>.</p>}

            {singleMovie && <div className="singleMovie">
            <img className ="backdrop" src={`https://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path}`} alt={`A poster for the movie ${singleMovie.title}`}/>
     
                    <MovieCard  movie={singleMovie} 
                                className="singleMovie"
                                isFav={isFav(globalState.favs, null, singleMovie.id)}
                                trimOverview={false}/>
                            </div> }
        <p className="release-date singlePageInfo">Release Date:</p> 
        <p className="overview-title singlePageInfo">Overview:</p>   
        
        {singleMovie && <div className="main-cast">
                            {makeCast(singleMovie.credits.cast)}
                        </div>
        }   
        </section>
    );
};

export default PageSingle;