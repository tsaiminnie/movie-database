import useGlobal from '../globals/globalState';
import emptyHeart from '../images/emptyheart48.png';
import filledHeart from '../images/filledheart48.png';

function FavBtn({ movie, remove, handleFavClick }) {

    const [globalState, globalActions] = useGlobal();

    function addFav(){
        globalActions.addFav(movie);
    }

    function removeFav(){
        globalActions.removeFav(movie.id);
    }

    //const {heart, setHeart} = useState(null);
    //<img className='heart' src = { setHeart === null ? emptyHeart : filledHeart } alt = 'Heart'/>

    return (
        //We will add the heart onclick stuff, instead of these buttons. When Its not in favs its a heart outline, when it is then the heart is filled :)
        <>
            {/* {remove === false ? 
            <button onClick={addFav}>Add To Favs</button> : 
            <button onClick={removeFav}>Remove From Favs</button>} */}

            {remove === false ? 
            <img className="heart" src={emptyHeart} onClick={addFav} /> :
            <img className="heart" src={filledHeart} onClick={removeFav} />}
        </>
    );
}

FavBtn.defaultProps = {
    remove: false
}

export default FavBtn;