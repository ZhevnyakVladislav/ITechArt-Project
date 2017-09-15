import actionType from '../constants/LanguageActions';
import createReducer from '../helpers/reducerHelper'; 

const initialState = {
    languages: []
};

function getLanguages(state, action) {
    return {
        ...state,
        languages: action.payload.data
    };
} 

export default createReducer(initialState, {
    [actionType.GET_LANGUAGES_SUCCESSFULL]: getLanguages,
});
