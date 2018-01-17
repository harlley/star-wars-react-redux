import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import { getPerson } from '../actions/peopleActions';
import { getPlanet } from '../actions/planetsActions';
import { resourceEndpoint } from '../utils';

import Header from '../components/Header';
import Item from '../components/Item';
import Films from '../containers/FilmsContainer';

class PersonDetailsContainer extends React.Component {
  
  componentWillMount() {
    if (this.props.person.name === undefined) {
      const id = this.props.match.params.id;
      // Request person data on API if there is state
      this.props.dispatch(getPerson(id)).then( () => {
        this.props.dispatch(getPlanet(this.getIdHomeworld()));
      });
    }
    else {
      // Request online planet data on API
      this.props.dispatch(getPlanet(this.getIdHomeworld()));
    }
  }

  getIdHomeworld() {
    return parseInt(this.props.person.homeworld.split('/')[5], 10);
  }

  handleClickDetails(event) {
    event.preventDefault();
    const planetEndpoint = resourceEndpoint(this.props.person.homeworld);
    this.props.dispatch( push(planetEndpoint) );
  }
    
  render() {
    const { name, height, gender, birth_year, 
            hair_color, skin_color, films } = this.props.person;
    return(
      <div>
        <Header title={name} />
        <Item topText="Height" bottomText={`${height} cm`} />
        <Item topText="Gender" bottomText={gender} />
        <Item topText="Birth Year" bottomText={birth_year} />
        <Item topText="Hair Color" bottomText={hair_color} />
        <Item topText="Skin Color" bottomText={skin_color} />
        <Item topText="Homeworld" 
              bottomText={this.props.personHomeworld}
              onClickDetails={this.handleClickDetails.bind(this)}
        />
        {films && <Films endpoints={films} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    person: state.global.person,
    personHomeworld: state.global.planet.name
  }
}

export default connect(mapStateToProps)(PersonDetailsContainer);