import Header from '../components/Header';
import Nav from '../components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import PageHome from '../pages/PageHome';

function AppRouter() {
    return (
    <Router>
        <div className="wrapper">
          <Header />
          <PageHome />
          
      </div>
    </Router>
   
    )}

export default AppRouter;