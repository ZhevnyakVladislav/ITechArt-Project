import React from 'react';
import { Grid, Row, Col, Image, ListGroupItem, Label, Button, Glyphicon, ListGroup, Collapse,Well } from 'react-bootstrap';
import './userPage.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import MessageBox from '../MessageBox/MessageBox';

export default  class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adverts: [],
            input: null
        };
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleShowMessageBox = this.handleShowMessageBox.bind(this);
        this.removeAdvert = this.removeAdvert.bind(this);
        this.handleClickInput = this.handleClickInput.bind(this);
        this.renderAdverts = this.renderAdverts.bind(this);
        this.loadAdverts = this.loadAdverts.bind(this);
    }

    componentDidMount() {
        this.loadAdverts();
    }
    
    loadAdverts() {
        this.props.getAuthorsAdverts();
        this.props.getInterestedAdverts();
    }
    
    handleClickInput() {
        this.state.input.click();
    }

    handleChangePhoto(e) {
        const image = e.target.files[0];
        this.props.updateUser(this.props.user.id, image);
    }

    handleShowMessageBox(e) {
        this.state.adverts = [...this.props.authorsAdverts, ...this.props.interestedAdverts];
        const advert = this.state.adverts.find(advert => advert.id == e.target.id);
        const index = this.state.adverts.indexOf(advert);
        this.state.adverts[index].isMessageBoxOpen = !this.state.adverts[index].isMessageBoxOpen;
        this.setState({ adverts: this.state.adverts });
    }
    
    async removeAdvert(e) {
        await this.props.removeAdvert(e.target.id);
        await this.loadAdverts();
    }

    renderAdverts(adverts, isAuthors) {
        return adverts.map((advert) => 
            <div  key={advert.id} className="advert">
                <AdvertPanel advert={advert}/>
                <Button className="load-image-icon" onClick={this.handleShowMessageBox}>
                    <Glyphicon id={advert.id} glyph="envelope"/>
                </Button>
                {isAuthors ? 
                    <Button className="remove-advert-icon" onClick={this.removeAdvert}>
                        <Glyphicon id={advert.id} glyph="remove"/>
                    </Button> 
                    : null}
                {advert.isMessageBoxOpen ? (
                    <MessageBox
                        currentUserId={this.props.user.id} 
                        handleCloseMessageBox={this.handleShowMessageBox}
                        messages={this.props.messages}
                        getMessagesById={this.props.getMessagesById}
                        createMessage={this.props.createMessage}
                        advertId={advert.id} />
                ) : null}
            </div>
        );
    }

    render() {
        const renderLanguages = (
            <ListGroupItem header="Languages">
                {this.props.user.languages.map((language, i) => <Label key={i}>{language}</Label>)}       
            </ListGroupItem>
        );
        return(
            <Grid className="user-page">
                <Row>
                    <Col xs={12} smOffset={1} sm={3}>
                        <Row className="avatar">
                            <Image src={this.props.user.avatar} />
                            <h3>{`${this.props.user.firstName} ${this.props.user.lastName}`}</h3>
                            <Button className="load-img" bsSize="large" onClick={this.handleClickInput}>
                                <Glyphicon glyph="camera"/>
                            </Button>
                        </Row>
                        <Row className="edit">
                            <Button onClick={this.handleClickInput}>Change photo</Button>
                            <input type="file" ref={input => this.state.input = input} onChange={this.handleChangePhoto} accept="image/*"/>
                        </Row>
                    </Col>  
                    <Col xs={12} sm={7} className="user-info">
                        <ListGroupItem header="Pseudnym">{this.props.user.pseudonym}</ListGroupItem>
                        <ListGroupItem header="Email">{this.props.user.email}</ListGroupItem>
                        <ListGroupItem header="Country">{this.props.user.country}</ListGroupItem> 
                        <ListGroupItem header="City">{this.props.user.city}</ListGroupItem> 
                        {renderLanguages}
                    </Col>        
                </Row>
                <Row>
                    <Col className="adverts" xs={12} smOffset={1} sm={10}>
                        <h1>Submitted adverts</h1>
                        <ListGroup>
                            {this.renderAdverts(this.props.authorsAdverts, true)}
                        </ListGroup>

                        <h1>Interested adverts</h1>
                        <ListGroup>
                            {this.renderAdverts(this.props.interestedAdverts, false)}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
}
