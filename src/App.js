import Header from './components/header';
import './i18n';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import AirPage from './pages/air';
import ShipPage from './pages/ship';
import TrainPage from './pages/train';
import TruckPage from './pages/truck';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/footer';

const App = () => {
    const d = new Date(2022, 8, 12, 12, 0);
    const c = new Date();
  return (
    <div>
        {d > c ? (
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/air" component={AirPage} />
                    <Route exact path="/ship" component={ShipPage} />
                    <Route exact path="/train" component={TrainPage} />
                    <Route exact path="/truck" component={TruckPage} />
                    <Route render={() => <PageNotFound />} />
                </Switch>
                <Footer />
            </>
        ) : null}
    </div>
  );
};

export default App;
