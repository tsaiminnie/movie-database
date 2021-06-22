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

    return (
        
        <>
            {remove === false ? 
            <img className="heart" src={emptyHeart} onClick={addFav} alt="Movie favourited"/> :
            <img className="heart" src={filledHeart} onClick={removeFav} alt="Movie not favourited"/>}
        </>
    );
}

FavBtn.defaultProps = {
    remove: false
}

export default FavBtn;