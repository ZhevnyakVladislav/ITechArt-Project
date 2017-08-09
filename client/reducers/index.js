import { combineReducers } from 'redux';
import userState from './UserAuth';
import AdvertActions from './AdvertActions';

export default combineReducers({
    userState,
    AdvertActions
});