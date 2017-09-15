import languageApi from './api/languageApi';
import actionType from '../constants/LanguageActions';

export function getLanguages() {
    return dispatch => languageApi.getLanguages()
        .then(data => dispatch({
            type: actionType.GET_LANGUAGES_SUCCESSFULL,
            payload: data
        }));
}