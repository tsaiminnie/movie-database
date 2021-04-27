import Header from '../components/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import PageHome from '../pages/PageHome';

function AppRouter() {
    return (
    <Router>
        <div className="wrapper">
      <PageHome>  
      <Header> 
      </Header> 
      </PageHome>
      </div>
    </Router>
    )  
}

export default AppRouter;