import { useEffect, useState } from 'react';
import { pageTitle } from '../globals/globals';
import { API_TOKEN } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Movies from '../components/Movies';
import SortBar from '../components/SortBar';

const PageHome = ({sort}) => {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
           
        const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
              }
        });
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0,12);
        setMoviesData(first12Movies);
      }
  
      fetchMovies();

        document.title = `Home - ${pageTitle}`;

    }, [sort]);

    return (
        <section className="home-section">
            <ResponsiveBg />
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
            <section className='slogan'>
                <h2>Discover</h2>
                <h2>Dream</h2>
                <h2>Imagine</h2>
            </section>
    
            <SortBar/>

            {moviesData !== null && <Movies moviesData={moviesData} />}
        </section>
    );
};

export default PageHome;