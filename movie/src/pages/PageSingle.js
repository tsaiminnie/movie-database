import { useEffect, useState } from 'react';
import {  useParams, Link } from 'react-router-dom';
import useGlobal from '../globals/globalState';
import MovieCard from '../components/MovieCard';
import isFav from '../utilities/isFav';
import tv from '../images/tv.png';

const PageSingle = () => {

    const [globalState] = useGlobal();

    const { id } = useParams();

    const [singleMovie, setSingleMovie] = useState(null);

    useEffect(() => {

        const fetchMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8001a7eab9a9a130964dd2225dcb1159&language=en-US&append_to_response=credits`);
        const movieData = await res.json();
        if(movieData.hasOwnProperty("success")){
            setSingleMovie(false);
        } else {
            setSingleMovie(movieData);
        }
      }
  
      fetchMovie();
        
    }, [id]);

    function makeCast(arr) {
        arr = arr.slice(0, 4)
        return arr.map(member => { 
            return (
                <div className="actorCard">
                    {member.profile_path === null ? 
                        <div className="no-image">
                            <img className="actor-img" src={tv} alt="No actor profile image available..."/>
                            <p>No image available...</p>
                        </div> :
                        <img className="actor-img" src={`https://image.tmdb.org/t/p/w185/${member.profile_path}`} alt={`${member.name}`}/>
                    }
                    
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
        
        {singleMovie && <div className="main-cast">
                            {makeCast(singleMovie.credits.cast)}
                        </div>
        }   
        </section>
    );
};

export default PageSingle;