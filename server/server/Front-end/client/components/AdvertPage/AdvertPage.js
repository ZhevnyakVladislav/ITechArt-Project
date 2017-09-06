import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import './advertPage.scss';

import MessageBox from '../MessageBox/MessageBox';
import Map from '../Map/Map';

export default class AdvertPape extends React.Component {
    
    componentDidMount() {
        this.props.getAdvert(this.props.match.params.id);
        this.props.getMessagesById(this.props.match.params.id);
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
                <Row className="advert-comments">
                    <Col xs={12} sm={10} smOffset={1}>
                        <h3>Comments</h3>
                        <MessageBox
                            getMessagesById={this.props.getMessagesById}
                            createMessage={this.props.createMessage} 
                            advertId={this.props.match.params.id}
                            messages={this.props.messages}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
};