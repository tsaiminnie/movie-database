import { Link } from 'react-router-dom';
import FavBtn from './FavBtn';

function MovieCard({movie, isFav, trimOverview}) {

    function overview(){
       let str = movie.overview;
       if (str.length > 50){
       str = str.substring(0, 50)+ "...";
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
        <div className="movie">
            <div className="poster">
            

                <div className="hover-info singlePageInfo">

                <div className='heartandrating'>
                    {isFav ? 
                        <FavBtn movie={movie} remove={true} /> : 
                        <FavBtn movie={movie}  />}

                    <p>{rating()}</p>
                </div>

                <p className="user-rating info">{rating()}</p>
          
                <h3 className="info">{title()}</h3>
                <p className="date info">{movie.release_date}</p>
                <p className="overview info">{trimOverview ? overview() : movie.overview}</p>
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