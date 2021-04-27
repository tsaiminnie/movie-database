import Header from '../components/Header';
import Nav from '../components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';

function AppRouter() {
    return (
    <Router>
        <div className="wrapper">
          <Header />
          
      </div>
    </Router>
   
}

export default AppRouter;