import { combineReducers } from 'redux';
import AdvertActions from './AdvertActions';
import MessageAction from './MessageAction';
import UserActions from './UserActions';
import AddressActions from './AddressActions';

export default combineReducers({
    AdvertActions,
    MessageAction,
    UserActions,
    AddressActions
});