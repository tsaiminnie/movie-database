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