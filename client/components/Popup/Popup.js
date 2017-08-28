import React from 'react';
import AlertContainer from 'react-alert';

const alertOptions ={
    ffset: 14,
    position: 'top left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
};

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }
    shouldComponentUpdate(props) {
        if(props.errors !== this.props.errors) {
            this.showAlert(props.errors);
            return true;
        }
        return false;
    }

    showAlert(errors) {
        this.msg.error(errors.message, {
            time: 5000,
            type: 'info',
            icon: <img src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-20.png" />
        });
    }

    render() {
        return(
            <div>
                <AlertContainer ref={a => this.msg = a}  {...alertOptions}/>
            </div>
        );
    };
};
