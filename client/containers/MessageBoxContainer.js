import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageBox from '../components/MessageBox/MessageBox';
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        
    }, dispatch);
}

export default connect(mapDispatchToProps)(MessageBox);