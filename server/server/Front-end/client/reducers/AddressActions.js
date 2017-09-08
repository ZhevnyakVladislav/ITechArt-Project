import actionType from '../constants/AddressActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    countries: [],
    regions: [],
    cities: [], 
};

function getCountries(state, action) {
    return {
        ...state,
        countries: action.payload.data
    };
}

function getCities(state, action) {
    return {
        ...state,
        cities: action.payload.data
    };
}

export default createReducer(initialState, {
    [actionType.GET_COUNTRIES_SUCCESSFULL]: getCountries,
    [actionType.GET_CITIES_SUCCESSFULL]: getCities,
});