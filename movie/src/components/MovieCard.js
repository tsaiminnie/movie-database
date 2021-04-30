import { Link } from 'react-router-dom';
// import emptyHeart from '../images/emptyheart48.png';
import filledHeart from '../images/filledheart48.png';
import { useState } from 'react';
import FavBtn from './FavBtn';

function MovieCard({movie, isFav}) {

    function overview(){
       let str = movie.overview;
       if (movie.overview.length > 50){
       str = str.substring(0, 50)+ "...";
       return str;
        }   
    }

    // const {heart, setHeart} = useState(null);

    return (
        <div className="movie">
            <div className="poster">

            {/* {isFav &&   <div className="heart">
                            <img src={filledHeart}/>
                        </div> } */}
            
                <div className="hover-info">

                <div>
                    {isFav ? 
                        <FavBtn movie={movie} remove={true} /> : 
                        <FavBtn movie={movie}  />}
                </div>
          
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{overview()}</p>
                <Link to='/'>More Info</Link>
                </div>

                {/* Add a check here to see if there is no poster*/}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`}></img>
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