import { Link } from 'react-router-dom';
import FavBtn from './FavBtn';
import tv from '../images/tv.png';

function MovieCard({className, movie, isFav, trimOverview, cast}) {

    function overview(){
       let str = movie.overview;
       if (str.length > 30){
       str = str.substring(0, 30)+ "...";
       return str;
        }   
    }

    function rating(){
        let rating = movie.vote_average;
        if (rating !== null){
            rating = (rating * 10)+ "%";
        }
        return rating;
    }

    function title(){
        let str = movie.title;
        if (str.includes("-")){
        str = str.substring(0, str.indexOf("-"));
         }else{
             str = movie.title;
         }  
         return str;  
    }

    return (
        <div className={className}>
            <div className="poster">
            
                <div className="page-home">
                    <div className="hover-info singlePageInfo">

                        <div className='heartandrating'>
                            {isFav ? 
                                <FavBtn movie={movie} remove={true} /> : 
                                <FavBtn movie={movie}  />}

                            <p className="user-rating">{rating()}</p>
                        </div>
                
                        <h3 className="info">{title()}</h3>
                        <p className="date info">{movie.release_date}</p>
                        <p className="overview info">{trimOverview ? overview() : movie.overview}</p>
                        <Link className="link" to={`/single-page/${movie.id}`}>More Info</Link>
                    </div>

                    {movie.poster_path === null ? 
                    
                        <div className="no-image">
                            <img className="poster-img" src={tv} alt="No movie poster image available..."/>
                            <p>No image available...</p>
                        </div> :

                        <img className ="poster-img" src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`}/>
                    }
                
                </div>
            </div>
        </div>
    )
}

MovieCard.defaultProps = {
    trimOverview : true,
    className : "movie"
}
export default MovieCard;