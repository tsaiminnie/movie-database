import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFav from '../pages/PageFav';
// import PageAccount from '../pages/PageAccount';
import PageLogin from '../pages/PageLogin';
import PageSignUp from '../pages/PageSignUp';
import PageSingle from '../pages/PageSingle';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

function AppRouter() {
    return (
    <Router>
      <Header/>
      <main>
        <div className="wrapper"> 
          <Switch>
            <Route path ="/" exact><PageHome sort='popular'/></Route>
            <Route path ="/sort/popular" exact><PageHome sort='popular'/></Route>
            <Route path ="/sort/top-rated" exact><PageHome sort='top_rated'/></Route>
            <Route path ="/sort/now-playing" exact><PageHome sort='now_playing'/></Route>
            <Route path ="/sort/upcoming" exact><PageHome sort='upcoming'/></Route>
            <Route path="/about"><PageAbout/></Route>
            <Route path="/favourites"><PageFav/></Route>
            {/* <Route path="/my-account"><PageAccount/></Route> */}
            <Route path="/sign-up"><PageSignUp/></Route>            
            <Route path="/sign-in"><PageLogin/></Route> 
            <Route path="/single-page/:id"><PageSingle/></Route>         

          </Switch>
        </div>
      </main>
      <Footer></Footer>
    </Router>
   
    )}

export default AppRouter;