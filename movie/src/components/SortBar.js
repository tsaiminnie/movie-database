import { NavLink } from 'react-router-dom';

function SortBar() {
    return (
        <section className='sort'>
                <form>
                    <select>
                        <option>
                            <NavLink to='sort/popular'>Popular</NavLink>
                        </option>
                        <option>
                            <NavLink to='sort/now-playing'>Now Playing</NavLink>
                        </option>
                        <option>
                            <NavLink to='sort/top-rated'>Top Rated</NavLink>
                        </option>
                        <option>
                            <NavLink to='sort/upcoming'>Upcoming</NavLink>
                        </option>
                    </select>
                </form>
        </section>
    );
}

export default SortBar;
