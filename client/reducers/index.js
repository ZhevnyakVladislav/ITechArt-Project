import { combineReducers } from 'redux';
import { userState } from './UserAuth';
import { drawerState } from './PageActions';

export default combineReducers({
    userState,
    drawerState
});