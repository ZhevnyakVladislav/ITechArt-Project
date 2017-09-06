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
        countries: action.payload
    };
}

function getRegions(state, action) {
    return {
        ...state,
        regions: action.payload,
        cities: []
    };
}

function getCities(state, action) {
    return {
        ...state,
        cities: action.payload
    };
}

export default createReducer(initialState, {
    [actionType.GET_COUNTRIES_SUCCESSFULL]: getCountries,
    [actionType.GET_REGIONS_SUCCESSFULL]: getRegions,
    [actionType.GET_CITIES_SUCCESSFULL]: getCities,
});