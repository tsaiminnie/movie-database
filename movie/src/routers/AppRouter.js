import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';

function AppRouter() {
    return (
        <div className="wrapper">
            <Header></Header>
            <PageHome></PageHome>
            <Footer></Footer>
        </div>
    );
}

export default AppRouter;