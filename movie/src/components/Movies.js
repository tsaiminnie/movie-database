import MovieCard from './MovieCard';
import useGlobal from '../globals/globalState';
import isFav from '../utilities/isFav';

function Movies({moviesData}) {

    const [globalState] = useGlobal();
 
    return (
        <section className='movies'>
            {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} isFav={isFav(globalState.favs, null, movie.id)} />)}
            
        </section>
    );
}

export default Movies;