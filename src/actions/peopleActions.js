import axios from 'axios';

export function fetchPeople(page) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PEOPLE',
      payload: axios.get(`https://swapi.co/api/people/?format=json&page=${page}`)
    });
  }
}

export function selectPerson(person) {
  return function(dispatch) {
    dispatch({
      type: 'SELECT_PERSON',
      payload: person
    });
  }
}

export function getPerson(id) {
  return function(dispatch) {
    return dispatch({
      type: 'GET_PERSON',
      payload: axios.get(`https://swapi.co/api/people/${id}/?format=json`)
    });
  }
}
