import Header from '../components/Header';
import Nav from '../components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import PageHome from '../pages/PageHome';

function AppRouter() {
    return (
    <Router>
        <div className="wrapper">
          <PageHome />
          
      </div>
    </Router>
   
    )}

export default AppRouter;