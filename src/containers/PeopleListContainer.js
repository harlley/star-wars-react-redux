import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

import Header from '../components/Header';
import Item from '../components/Item';
import { fetchPeople, selectPerson } from '../actions/peopleActions';
import { resourceEndpoint } from '../utils';

class PeopleListContainer extends React.Component {

  componentWillMount() {
    const page = this.props.location.search.replace('?page=', '');
    this.props.dispatch(fetchPeople(page));
  }

  handleClickDetails(person, event) {
    event.preventDefault();
    this.props.dispatch( selectPerson(person) );
    this.props.dispatch( push(resourceEndpoint(person.url)) );
  }

  render() {
    return(
      <div>
        <Header title='People' />
        <ul>
          {this.props.people.map(p => (
            <li key={p.name}>
              <Item topText={p.name} 
                    bottomText={`${p.height} cm height`} 
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
    people: state.global.people,
    nextPage: state.global.nextPage,
    previousPage: state.global.previousPage,
  }
}

export default connect(mapStateToProps)(PeopleListContainer);