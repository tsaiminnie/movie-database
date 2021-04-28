

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFav from '../pages/PageFav';
import PageAccount from '../pages/PageAccount';
import PageLogin from '../pages/PageLogin';

function AppRouter() {
    return (
    <Router>
        <div className="wrapper"> 
      <Switch>
      <Route path ="/" exact><PageHome/></Route>
      <Route path="/about"><PageAbout/></Route>
      <Route path="/favourites"><PageFav/></Route>
      <Route path="/my-account"><PageAccount/></Route>
      <Route path="/sign-in"><PageLogin/></Route>
                  
      </Switch>
        </div>
    </Router>
   
    )}

export default AppRouter;