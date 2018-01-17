import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import homeImage from '../images/home.png';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <StartMenu>
          <img src={homeImage} alt=""/>
          <Links>
            <Link to="/people?page=1">People</Link> |
            <Link to="/planets?page=1"> Planets</Link>
          </Links>
        </StartMenu>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10em;
`;

const StartMenu = styled.div`
  padding: 1em;
`;

const Links = styled.div`
  margin-top: 1em;
  text-align: center;
  color: #FFBF00;
  & > a {
    color: #FFBF00;
  }
`;