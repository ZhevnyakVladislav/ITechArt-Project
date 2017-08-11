import { combineReducers } from 'redux';
import userState from './AuthActions';
import AdvertActions from './AdvertActions';
import MessageAction from './MessageAction';

export default combineReducers({
    userState,
    AdvertActions,
    MessageAction
});