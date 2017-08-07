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
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
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
                    <Button className="close-button" onClick={this.props.closeRespondDialog}>Close</Button>
                    <Button onClick={this.props.sendResponse} value={this.state.messageText}>Send</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
