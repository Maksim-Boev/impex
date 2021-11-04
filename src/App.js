import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './pages/main';
import AirPage from './pages/air';
import ShipPage from './pages/ship';
import TrainPage from './pages/train';
import TruckPage from './pages/truck';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  useEffect(() => {
    // axios.post(`http://localhost:3001/post`, { name: 'max' }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
    // fetch('http://localhost/post', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ data }),
    // }).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/air" component={AirPage} />
        <Route exact path="/ship" component={ShipPage} />
        <Route exact path="/train" component={TrainPage} />
        <Route exact path="/truck" component={TruckPage} />
        <Route render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
};

export default App;
