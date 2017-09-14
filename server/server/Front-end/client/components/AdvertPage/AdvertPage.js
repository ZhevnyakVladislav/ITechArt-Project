import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import './advertPage.scss';

import MessageBox from '../MessageBox/MessageBox';
import Map from '../Map/Map';

export default class AdvertPage extends React.Component {
    constructor(props) { 
        super(props);
        this.messagesHub = window.$.connection.MessageChat;
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.props.getAdvert(this.props.match.params.id);
        this.props.getMessagesById(this.props.match.params.id);
        this.messagesHub.client.Send = this.sendMessage;
        let connection = window.$.connection.hub.start().done(() => {
            console.log('SignalR Hub Started!');
            this.messagesHub.server.joinGroup(this.props.match.params.id);
        });
       
        
    }

    sendMessage(messages) {
        this.props.updateMessages(messages);
    }

    render() {
        return (
            <Grid>
                <Row className="advert-info"> 
                    <Col xs={12} sm={10} smOffset={1}>
                        <PageHeader>
                            {this.props.advert.title}
                        </PageHeader>
                        <p>{this.props.advert.description}</p>
                    </Col>
                </Row>
                {!this.props.advert.address.coordinate ? null : (
                    <Row className="map">
                        <Col xs={12} sm={10}>
                            <Map coordinate={this.props.advert.address.coordinate} />
                        </Col>
                    </Row>)}
                {(this.props.user.id == this.props.advert.authorId && this.props.messages.length < 1) ? null : (
                    <Row className="advert-comments">
                        <Col xs={12} sm={10} smOffset={1}>
                            <h3>Comments</h3>
                            <MessageBox
                                advertId={this.props.match.params.id}
                                createMessage={this.props.createMessage} 
                                messages={this.props.messages}/>
                        </Col>
                    </Row>
                )}
            </Grid>
        );
    }
};