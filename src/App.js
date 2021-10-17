import video from './video1.mp4';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import { About, Services, Video, Bookmark, Wrapper } from './style';
import { useEffect } from 'react';

import From from './components/Form/';

const App = () => {
  // const data = {
  //   name: 'max',
  // };

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
      <Switch>
        <Route exact path="/" component={Header} />
      </Switch>

      <Video
        width="100%"
        height="100%"
        muted={true}
        autoPlay={true}
        loop={true}
      >
        <source src={video} type="video/mp4" />
      </Video>

      <About>
        <Bookmark>About</Bookmark>
        <Wrapper>
          <h1>ZAMMLER GROUP</h1>
          <From />
        </Wrapper>
      </About>
      <Services>Services</Services>
    </div>
  );
};

export default App;
