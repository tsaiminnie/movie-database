import MovieCard from './MovieCard';
import useGlobal from '../globals/globalState';
import { Link } from 'react-router-dom';
import FavBtn from './FavBtn';

function Movies({ movie, moviesData, link, isFav,  }) {

    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleFavClick(addToFav, object){
        if(addToFav === true){
            globalActions.addFav(object);
        }else{
            globalActions.removeFav(object.id);
        }
        console.log('HEllo');
    }
 
    return (
        <section className='movies'>
            {moviesData.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
            {isFav && <div className="heart">Heart</div> }
            <div>
                {isFav ? 
                    <FavBtn movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                    <FavBtn movie={movie} handleFavClick={handleFavClick} />}
            </div>
        </section>
    );
}

export default Movies;

// import tenet from '../images/tenet.jpg';

// function Movies() {

//     return (
//         <section className='movies'>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
//             <div className='movie'>
//                 <img src={tenet}></img>
//                     <div className='bar'></div>
//             </div>
                
                
//         </section>
//     );
// }

// export default Movies;


///////This code below is starting to figure outhow to do the movies as obkects for when we have the dynamic data coming in....

// // Update all info with the right stuff... this code was taken from Michales kitten app 

// import { Link } from 'react-router-dom';

// // import FavButton from '../components/FavButton';
// // const imageFolderPath = process.env.PUBLIC_URL + '/assets/images/';

// function Movie({movieObj /*, profileLink, isFav */}) {

//     // const globalStateAndglobalActions = useGlobal();
//     // const globalActions = globalStateAndglobalActions[1];

//     // function handleFavClick(addToFav, obj){
//     //     if(addToFav === true){
//     //         globalActions.addFav(obj);
//     //     } else {
//     //         globalActions.removeFav(obj.id);
//     //     }   
//     // }

//     return (
//         <div className="movies">
//             {/* {isFav && 
//                 <div className="heart">
//                     Insert our heart stuff here
//                 </div>} */}

//             {/* <div className="poster">
//                 Insert poster photo data here
//             </div> */}

//             {/* <div className="title">
//                 Insert Title data here
//             </div> */}

//             {/* {profileLink && <div className="link-profile">
//                 <Link to={{pathname: `/kitten-profile/${kittenObj.id}`,
//                            state: { kittenObj }}}>
//                     More Info
//                 </Link>
//             </div>} */}

//             {/* <div className="btn-favourite">
//                 {isFav ? 
//                     <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> : 
//                     <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
//                 }
//             </div> */}
//         </div>
//     );
    
// }

// // Movie.defaultProps = {
// //     profileLink: true
// // }

// export default Movie;