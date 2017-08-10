import React from 'react';
import ChatBubble from 'react-chat-bubble';
import { Col, Panel, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';
import './messageBox.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getMessagesById(this.props.advertId);
    }
    
    handleChange(e) {
        this.setState({ 
            newMessage: e.target.value
        });
    }
    
    handleSubmit() {
        this.props.addMessage({
            id: this.props.messages.length + 1,
            text: this.state.newMessage,
            author: 2,
            advertId: 2,
        });
    }
    
    render() {
        let messages = this.props.messages.filter(message => message.advertId == this.props.advertId); 
        messages = messages.map(message => {
            return { 
                type: 0,
                image: 'http://bm.img.com.ua/nxs/img/prikol/images/large/3/9/315193.jpg',
                text: message.text
            };
        }); 
        
        return (
            <Col xs={12} sm={5} className="message-box">
                <Panel header="Dialogue">
                    <ChatBubble 
                        messages={messages}/>
                    <FormGroup controlId="message" onChange={this.handleChange}> 
                        <FormControl componentClass="textarea" placeholder="textarea" />
                        <Button bsSize="large" onClick={this.handleSubmit} >
                            <Glyphicon glyph="share-alt"/>
                        </Button>
                    </FormGroup>
                </Panel>
                
            </Col>
        );
    }
};
