import { Link } from 'react-router-dom';
import FavBtn from './FavBtn';

function MovieCard({movie, isFav, trimOverview}) {

    function overview(){
       let str = movie.overview;
       if (movie.overview.length > 50){
       str = str.substring(0, 50)+ "...";
       return str;
        }   
    }

    return (
        <div className="movie">
            <div className="poster">

                <div className="hover-info">

                <div>
                    {isFav ? 
                        <FavBtn movie={movie} remove={true} /> : 
                        <FavBtn movie={movie}  />}
                </div>
          
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{trimOverview ? overview() : movie.overview}</p>
                <Link className="link" to={`/single-page/${movie.id}`}>More Info</Link>
                </div>

                {/* Add a check here to see if there is no poster*/}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`}></img>
            </div>

            <div className='bar'></div>
        </div>
    )
}

MovieCard.defaultProps = {
    trimOverview : true
}
export default MovieCard;