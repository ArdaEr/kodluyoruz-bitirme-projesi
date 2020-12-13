import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title, Menu, InlineContainer } from './Header.style';
import {routes} from '../../Router';

const Header = (props) => {
  return (
    <Wrapper>
      <Title>Mydb</Title>
      <InlineContainer>
      <Menu>
      {routes
          .filter((route) => !!route.isLink)
          .map((route) => (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </Menu>
   
      </InlineContainer>
    </Wrapper>
  );
};

export default Header;