import React from 'react';
import ChatBubble from 'react-chat-bubble';
import { Media, Image, FormGroup, FormControl, Button } from 'react-bootstrap';
import './messageBox.scss';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            message: e.target.value
        });

    }
    
    async handleSendMessage() {
        this.setState({
            message: ''
        });
        await this.props.createMessage({
            advertId: this.props.advertId,
            description: this.state.message
        });
    }

    render() {
        console.log(this.props.messages);
        return(
            <div className="message-box">
                {this.props.messages.map(message => 
                    <Media key={message.id}>
                        <Media.Left>
                            <Image width={64} height={64} src={message.author.avatar} alt="Image" circle />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{`${message.author.firstName} ${message.author.lastName}`}</Media.Heading>
                            <p>{message.description}</p>
                        </Media.Body>
                        <hr/>
                    </Media>
                )}
                <FormGroup controlId="formControlsTextarea" onChange={this.handleChange}>
                    <FormControl componentClass="textarea" placeholder="Send comment..."/>
                    <Button onClick={this.handleSendMessage}>Send</Button>
                </FormGroup>
            </div>
        );
    }
};
