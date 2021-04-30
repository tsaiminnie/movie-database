import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFav from '../pages/PageFav';
import PageAccount from '../pages/PageAccount';
import PageLogin from '../pages/PageLogin';
import PageSingle from '../pages/PageSingle';
import MovieCard from '../components/MovieCard';

function AppRouter() {
    return (
    <Router>
      <Header/>
      <main>
        <div className="wrapper"> 
          <Switch>
            <Route path ="/" exact><PageHome/></Route>
            <Route path="/about"><PageAbout/></Route>
            <Route path="/favourites"><PageFav/></Route>
            <Route path="/my-account"><PageAccount/></Route>
            <Route path="/sign-in"><PageLogin/></Route> 
            <Route path="/single-page/:id"><PageSingle/></Route>         
          </Switch>
        </div>
      </main>
    </Router>
   
    )}

export default AppRouter;