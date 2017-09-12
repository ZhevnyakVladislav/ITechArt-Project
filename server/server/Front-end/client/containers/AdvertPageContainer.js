import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAdvert } from '../actions/AdvertActions';
import { getMessagesById, createMessage, updateMessages } from '../actions/MessageAction';

import AdvertPage from '../components/AdvertPage/AdvertPage';

function mapStateToProps(state) {
    return {
        isUserAuth: state.UserActions.isUserAuth,
        user: state.UserActions.user,
        advert: state.AdvertActions.advert,
        messages: state.MessageAction.messages,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAdvert,
        getMessagesById,
        createMessage,
        updateMessages
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(AdvertPage);