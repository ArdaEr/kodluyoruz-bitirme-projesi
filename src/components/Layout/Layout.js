import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { Wrapper } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Router>{children}</Router>
    </Wrapper>
  );
};

export default Layout;