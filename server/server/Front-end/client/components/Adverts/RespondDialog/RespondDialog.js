import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './respondDialog.scss';

export default class RespondDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit(e) {
        this.props.sendResponse({
            advertId: this.props.advertId,
            description: this.state.messageText
        });
        this.props.closeRespondDialog(e);
    }

    render() {
        return (
            <Modal 
                show={this.props.isRespondDialogOpen}>
                <Modal.Body>
                    <FormGroup controlId="messageText" >
                        <ControlLabel>Input message</ControlLabel>
                        <FormControl onChange={this.handleChange} componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeRespondDialog}>Close</Button>
                    <Button onClick={this.handleSubmit}>Send</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
