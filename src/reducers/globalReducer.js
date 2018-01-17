export default function reducer(state = {
  people: [],
  planets: [],
  person: {},
  planet: {},
  personFilms: [],
  nextPage: null,
  previousPage: null,
  fetched: false
}, action) {
  switch(action.type) {
    
    case 'FETCH_PEOPLE_FULFILLED': {
      return {
        ...state, 
        fetched: true, 
        people: action.payload.data.results,
        nextPage: (action.payload.data.next !== null) ? action.payload.data.next.split('=')[2] : null,
        previousPage: (action.payload.data.previous !== null) ? action.payload.data.previous.split('=')[2] : null
      };
    }

    case 'FETCH_PLANETS_FULFILLED': {
      return {
        ...state, 
        fetched: true, 
        planets: action.payload.data.results,
        nextPage: (action.payload.data.next !== null) ? action.payload.data.next.split('=')[2] : null,
        previousPage: (action.payload.data.previous !== null) ? action.payload.data.previous.split('=')[2] : null
      };
    }

    case 'GET_PERSON_FULFILLED': {
      return {...state, fetched: true, person: action.payload.data};
    }

    case 'GET_PLANET_FULFILLED': {
      return {...state, fetched: true, planet: action.payload.data};
    }

    case 'FETCH_FILMS': {
      return {
        ...state, 
        films: action.payload.data.results,
        personFilms: action.selectedFilms
      };
    }

    case 'SELECT_PERSON': {
      return {
        ...state, 
        person: action.payload,
        nextPage: null,
        previousPage: null
      };
    }

    case 'SELECT_PLANET': {
      return {
        ...state, 
        planet: action.payload, 
        nextPage: null,
        previousPage: null
      };
    }    
    
    default: {
      return state;
    }
  }
}