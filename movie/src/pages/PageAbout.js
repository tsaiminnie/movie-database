import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import aboutImage from '../images/about-image.png';
import tmdbLogo from '../images/tmdb-logo-small.svg';

const PageAbout = () => {

    useEffect(() => {
        document.title = `About - ${pageTitle}`;
    }, []);

    return (
        <section className="about-page">
            <div className="background">
            <img className="about-img" src={aboutImage} />
            </div>

            <section className="about-info">
            <h2>Welcome!</h2>
            <p className="welcome"> Welcome to the DiscoveryFlix movie database. We are a group of movie enthusiasts from beautiful Vancouver, BC, Canada who have created this database for people of all ages to share their love for movies.</p> 
            <h2>Start Discovering</h2>
            <section>
                <div className="discover">
                    <p className="number">1</p>
                    <p className="text">On the ‘Home’ page, hover over the movie to see details of the movie.</p>
                </div>
                <div className="discover">
                    <p className="number">2</p>
                    <p className="text">Click on the heart icon to add a movie to your Favourites page.</p>
                </div>
                <div className="discover">
                    <p className="number">3</p>
                    <p className="text">Write a review of the movie and share it with others!</p>
                </div>
            </section>

            <div className="tmdb-info">
            <p>DiscoveryFlix uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img className="tmdb-logo" src={tmdbLogo} alt="TMDB logo" />
            </div>
            </section>
        </section>
    );
};

export default PageAbout;