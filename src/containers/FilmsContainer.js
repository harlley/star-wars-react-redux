import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchFilms } from '../actions/filmsActions';

class FilmsContainer extends React.Component {
  
  componentWillMount() {
    this.props.dispatch( fetchFilms(this.props.endpoints) );
  }

  render() {
    return (
      <Films>
        <label>Films</label>
        <ul>
          {this.props.films.map((film, index) => (
            <li key={index}>
              - {film}
            </li>
          ))}
        </ul>
    </Films>
    )
  }
}

function mapStateToProps(state) {
  return {
    films: state.global.personFilms
  }
}

export default connect(mapStateToProps)(FilmsContainer);

const Films = styled.ul`
  background-color: #FFF;
  padding: 1em;
  ul {
    margin-top: 0.5em;
  }
`