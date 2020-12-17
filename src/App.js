import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
import Home from './Home';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

import SingleSerie from './components/screens/Singlescreen/SingleSerie';
import SingleMovie from './components/screens/Singlescreen/SingleMovie';
import SingleGame from './components/screens/Singlescreen/SingleGame';
import ForGames from './Game';
import Serie from './Serie';


function App() {
  return (
  <Layout>
    <Header />
  <Switch>
  <Route path="/" exact>
    <Home />
  </Route>
  <Route path="/series" exact>
    <Serie />
  </Route>
  <Route path="/games" exact>
    <ForGames />
  </Route>
  <Route path="/movies/:key" children={<SingleMovie/>} />
  <Route path="/games/:key" children={<SingleGame/>} />
  <Route path="/series/:key" children={<SingleSerie/>} />
  </Switch>
  <Footer/>

  </Layout> 
 
  )
}


export default App
