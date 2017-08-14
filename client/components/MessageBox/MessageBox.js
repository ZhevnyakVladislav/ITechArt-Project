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
            text: this.state.newMessage,
            author: this.props.currentUserId,
            advertId: this.props.advertId,
        });
        this.setState({ newMessage: ''});
    }
    
    render() {
        let messages = this.props.messages.filter(message => message.advertId == this.props.advertId); 
        messages = messages.map(message => {
            const type = message.author == this.props.currentUserId ? 0 : 1;
            return { 
                type: type,
                image: 'http://bm.img.com.ua/nxs/img/prikol/images/large/3/9/315193.jpg',
                text: message.text
            };
        }); 

        const messageBoxHeader = (
            <h1>
                title
                <Button bsSize="large" onClick={this.props.handleCloseMessageBox}>
                    <Glyphicon id={this.props.advertId} glyph="remove"/>
                </Button>
            </h1>
        );

        return (
            <Col xs={12} sm={5} className="message-box">
                <Panel header={messageBoxHeader}>
                    <ChatBubble 
                        messages={messages}/>
                    <FormGroup controlId="message" onChange={this.handleChange}> 
                        <FormControl componentClass="textarea" value={this.state.newMessage} placeholder="Enter message" />
                        <Button bsSize="large" onClick={this.handleSubmit} >
                            <Glyphicon glyph="share-alt"/>
                        </Button>
                    </FormGroup>
                </Panel>
                
            </Col>
        );
    }
};
