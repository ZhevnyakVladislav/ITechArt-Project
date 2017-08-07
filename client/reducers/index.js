import { combineReducers } from 'redux';
import { userState } from './UserAuth';
import { pageState } from './PageActions';

export default combineReducers({
    userState,
    pageState
});