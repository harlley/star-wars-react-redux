import axios from 'axios';

export function fetchPlanets(page) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_PLANETS',
      payload: axios.get(`https://swapi.co/api/planets/?format=json&page=${page}`)
    });
  }
}

export function selectPlanet(planet) {
  return function(dispatch) {
    dispatch({
      type: 'SELECT_PLANET',
      payload: planet
    });
  }
}

export function getPlanet(id) {
  return function(dispatch) {
    dispatch({
      type: 'GET_PLANET',
      payload: axios.get(`https://swapi.co/api/planets/${id}/?format=json`)
    });
  }
}