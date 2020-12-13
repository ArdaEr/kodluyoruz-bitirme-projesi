import React from 'react';
import Movies from './components/screens/Movies';

import Games from './components/screens/Games';
import Series from './components/screens/Series';


export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Movies />,
    title: 'Movies',
    isLink: true,
  },

  {
    path: '/series',
    exact: true,
    component: () => <Series />,
    title: 'Series',
    isLink: true,
  },
  {
    path: '/games',
    exact: true,
    component: () => <Games />,
    title: 'Games',
    isLink: true,
  },
];
