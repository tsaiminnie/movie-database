import { useEffect, useState } from 'react';
import { pageTitle } from '../globals/globals';
import { API_TOKEN } from '../globals/globals';
import ResponsiveBg from '../components/ResponsiveBg';
import Header from '../components/Header';
import Movies from '../components/Movies';
import SortBar from '../components/SortBar';
import LoginBtn from '../components/LoginBtn';
import BgArrow from '../components/BgArrow';

const PageHome = ({sort}) => {

    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            //Can add sort feature in the url below :)
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + API_TOKEN
              }
        });
        const moviesData = await res.json();
        const first12Movies = moviesData.results.splice(0,12);
        //console.log(moviesData);
        console.log(first12Movies);
        setMoviesData(first12Movies);
      }
  
      fetchMovies();

        document.title = `Home - ${pageTitle}`;

    }, [sort]);

    return (
        <main>
            <Header/>
            <ResponsiveBg />
            <LoginBtn />
            <section className='title'>
                <h1>DiscoveryFlix</h1>
            </section>
            <section className='slogan'>
                <h2>Discover</h2>
                <h2>Dream</h2>
                <h2>Imagine</h2>
            </section>
            <BgArrow />
            <SortBar/>
            {moviesData != null && <Movies moviesData={moviesData} />}
        </main>
    );
};

export default PageHome;