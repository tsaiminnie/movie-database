import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/Header';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFav from '../pages/PageFav';
import PageSingle from '../pages/PageSingle';
import Footer from '../components/Footer';
import {APP_FOLDER_NAME} from '../globals/globals';

function AppRouter() {
    return (
    <Router basename={APP_FOLDER_NAME}>
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
            <Route path="/single-page/:id"><PageSingle/></Route>         
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
   
    )}

export default AppRouter;