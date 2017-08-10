import { combineReducers } from 'redux';
import userState from './UserAuth';
import AdvertActions from './AdvertActions';
import MessageAction from './MessageAction';

export default combineReducers({
    userState,
    AdvertActions,
    MessageAction
});