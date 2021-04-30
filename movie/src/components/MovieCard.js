import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie">
            <div className="poster">

                <div className="hover-info">
                    <p>Hello World</p>
                </div>

                {/* Add a check here to see if there is no poster*/}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`A poster for the movie ${movie.title}`}></img>
            </div>
            <div className="info">
                <h3>{movie.title}</h3>
                {/* Not the correct location... for demo only */}
                <Link to='/'>More Info</Link>
            </div>
            <div className='bar'></div>
        </div>
    )
}

export default MovieCard;