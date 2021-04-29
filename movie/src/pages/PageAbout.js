import { useEffect } from 'react';
import { pageTitle } from '../globals/globals';
import Header from '../components/Header';
import logo from '../images/logo.png';

const PageAbout = () => {

    useEffect(() => {
        document.title = `About - ${pageTitle}`;
    }, []);

    return (
        <section className="about-page">
            <img className="logo" alt='logo' src={logo}></img>
            <Header/>

            <h1>About</h1> 
            <h2>Hello!</h2>
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
        </section>
    );
};

export default PageAbout;