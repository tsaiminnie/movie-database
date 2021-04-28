function FavBtn({ movieObj, remove, isFavClicked }) {

    function addFav(){
        isFavClicked(true, movieObj);
    }

    function removeFav(){
        isFavClicked(false, movieObj);
    }

    return (
        //We will add the heart onclick stuff, instead of these buttons. When Its not in favs its a heart outline, when it is then the heart is filled :)
        <>
            {remove === false ? 
            <button onClick={addFav}>Add To Favs</button> : 
            <button onClick={removeFav}>Remove From Favs</button>}
        </>
    );
    
}

FavBtn.defaultProps = {
    remove: false
}

export default FavBtn;