function SortBar() {
    return (
        <section className='sort'>
                <form>
                    <select>
                        <option>Popular</option>
                        <option>Now Playing</option>
                        <option>Top-Rated</option>
                        <option>Coming Soon</option>
                    </select>
                </form>
        </section>
    );
}

export default SortBar;
