import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './respondDialog.scss';

export default class RespondDialog extends React.Component {
    render() {
        return (
            <Modal show={this.props.isRespondDialogOpen} >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    <h4>Popover in a modal</h4>
                    <h4>Tooltips in a modal</h4>
                    <hr />
                    <h4>Overflowing text to show scroll behavior</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeRespondDialog}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
