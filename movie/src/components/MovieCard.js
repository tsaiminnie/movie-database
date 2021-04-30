import { Link } from 'react-router-dom';
import emptyHeart from '../images/emptyheart48.png';
import filledHeart from '../images/filledheart48.png';
import { useState } from 'react';

function MovieCard({movie}) {

    function overview(){
       let str = movie.overview;
       if (movie.overview.length > 50){
       str = str.substring(0, 50)+ "...";
       return str;
        }   
    }

    const {heart, setHeart} = useState(null);

    return (
        <div className="movie">
            <div className="poster">

                <div className="hover-info">
                <img className='heart' src = { setHeart === null ? emptyHeart : filledHeart } alt = 'Heart'/>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{overview()}</p>
                <Link to='/'>More Info</Link>
                </div>

                {/* Add a check here to see if there is no poster*/}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Godzilla vs Kong"></img>
            </div>
            {/* <div className="info">
                <h3>{movie.title}</h3> */}
                {/* Not the correct location... for demo only */}
                {/* <Link to='/'>More Info</Link>
            </div> */}
            <div className='bar'></div>
        </div>
    )
}

export default MovieCard;