import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import Header from '../components/Header';
import Item from '../components/Item';

import { fetchPlanets, selectPlanet } from '../actions/planetsActions';
import { resourceEndpoint, format } from '../utils';

class PlanetsListContainer extends React.Component {
  componentWillMount() {
    const page = this.props.location.search.replace('?page=', '');
    this.props.dispatch(fetchPlanets(page));
  }

  handleClickDetails(planet, event) {
    event.preventDefault();
    this.props.dispatch( selectPlanet(planet) );
    this.props.dispatch( push(resourceEndpoint(planet.url)) );
  }
  
  render() {
    return(
      <div>
        <Header title='Planets'/>
        <ul>
          {this.props.planets.map(p => (
            <li key={p.name}>
              <Item topText={p.name} 
                    bottomText={`${format(p.population)} people`} 
                    onClickDetails={this.handleClickDetails.bind(this, p)}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    planets: state.global.planets,
    nextPage: state.global.nextPage,
    previousPage: state.global.previousPage,
  }
}

export default connect(mapStateToProps)(PlanetsListContainer);