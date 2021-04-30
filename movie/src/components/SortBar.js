import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SortBar() {

    const [redirect, setRedirect] = useState(false);

    function handleChange(e){
        setRedirect(e.target.value);
    }

    // useEffect(() => {
    //     let mq= window.matchMedia('(min-width: 770px)');
    //     mq.addListener(isDesktop)
    //     return()=> mq.removeListener(isDesktop);
    // }, []);


    return (
        <section className='sort'>
            {redirect && <Redirect to={redirect}/> }
                <form>
                    <select onChange={handleChange}>
                        <option value='/sort/popular'>
                            Popular
                        </option>
                        <option value='/sort/now-playing'>
                            Now Playing
                        </option>
                        <option value='/sort/top-rated'>
                            Top Rated
                        </option>
                        <option value='/sort/upcoming'>
                            Upcoming
                        </option>
                    </select>
                </form>
        </section>
    );
}

export default SortBar;
