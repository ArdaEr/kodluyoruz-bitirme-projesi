import React from 'react';
import ForGames from './Game';
import Home from './Home';
import Serie from './Serie';
import SingleSerie from './components/screens/Singlescreen/SingleSerie';
import SingleMovie from './components/screens/Singlescreen/SingleMovie';
import SingleGame from './components/screens/Singlescreen/SingleGame';

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Home />,
    title: 'Movies',
    isLink: true,
  },

  {
    path: '/series',
    exact: true,
    component: () => <Serie />,
    title: 'Series',
    isLink: true,
  },
  {
    path: '/games',
    exact: true,
    component: () => <ForGames />,
    title: 'Games',
    isLink: true,
  },
  {
    path: '/movies/:key',
    exact: true,
    component: () => <SingleMovie />,
  },
  {
    path: '/games/:key',
    exact: true,
    component: () => <SingleGame />,
  },
  {
    path: '/series/:key',
    exact: true,
    component: () => <SingleSerie />,
  },
];
