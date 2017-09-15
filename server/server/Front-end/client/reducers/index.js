import { combineReducers } from 'redux';
import AdvertActions from './AdvertActions';
import MessageAction from './MessageAction';
import UserActions from './UserActions';
import AddressActions from './AddressActions';
import LanguageActions from './LanguageActions';

export default combineReducers({
    AdvertActions,
    MessageAction,
    UserActions,
    AddressActions,
    LanguageActions
});