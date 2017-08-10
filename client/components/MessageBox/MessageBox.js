import React from 'react';
import ChatBubble from 'react-chat-bubble';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import './messageBox.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.messages,
            newMessage:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            newMessage: e.target.value
        });
    }
    
    handleSubmit() {
        
    }
    
    render() {
        return (
            <Col xs={12} sm={5} className={this.props.isMessageBoxOpen ? 'opened message-box' : 'closed message-box'}>
                <Panel header="Dialogue">
                    <ChatBubble 
                        messages={this.state.messages}/>
                    <FormGroup controlId="message" onChange={this.handleChange}> 
                        <FormControl componentClass="textarea" placeholder="textarea" />
                        <Button bsSize="large" onClick={this.removeAdvert} >
                            <Glyphicon glyph="share-alt"/>
                        </Button>
                    </FormGroup>
                </Panel>
                
            </Col>
        );
    }
};
