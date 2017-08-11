import React from 'react';
import { Grid, Row, Col, Image, ListGroupItem, Label, Button, Glyphicon, ListGroup, Collapse,Well } from 'react-bootstrap';
import './userPage.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import MessageBox from '../MessageBox/MessageBox';

export default  class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: null
        };
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleShowMessageBox = this.handleShowMessageBox.bind(this);
        this.removeAdvert = this.removeAdvert.bind(this);
        this.handleClickInput = this.handleClickInput.bind(this);
    }

    componentDidMount() {
        this.props.getUserAdverts(1);
        this.state.input.addEventListener('change', this.handleChangePhoto);
    }
    
    handleClickInput() {
        this.state.input.click();
    }

    handleChangePhoto(e) {
        const image = e.target.files;
        this.props.changeAvatar(this.props.user.id, image);
    }

    handleShowMessageBox(e) {
        const advert = this.props.userAdverts.find(advert => advert.id == e.target.id);
        const index = this.props.userAdverts.indexOf(advert);
        this.props.userAdverts[index].isMessageBoxOpen = !this.props.userAdverts[index].isMessageBoxOpen;
        this.setState({ userAdverts: this.props.userAdverts });
    }
    
    removeAdvert(e) {
        this.props.removeAdvert(e.target.id);
    }

    render() {
        const renderLanguages = (
            <ListGroupItem header="Languages">
                {this.props.user.languages.map((language, i) => <Label key={i}>{language}</Label>)}       
            </ListGroupItem>
        );
        const renderAdverts = (
            this.props.userAdverts.map((advert, i) => 
                <div  key={advert.id} className="advert">
                    <AdvertPanel advert={advert}/>
                    <Button className="load-image-icon" onClick={this.handleShowMessageBox}>
                        <Glyphicon id={advert.id} glyph="envelope"/>
                    </Button>
                    <Button className="remove-advert-icon" onClick={this.removeAdvert}>
                        <Glyphicon id={advert.id} glyph="remove"/>
                    </Button>
                    {advert.isMessageBoxOpen ? (
                        <MessageBox 
                            handleCloseMessageBox={this.handleShowMessageBox}
                            messages={this.props.messages}
                            getMessagesById={this.props.getMessagesById}
                            addMessage={this.props.addMessage}
                            advertId={advert.id} />
                    ) : null}
                </div>
            )
        );
        return(
            <Grid className="user-page">
                <Row>
                    <Col xs={12} smOffset={1} sm={3}>
                        <Row className="avatar">
                            <Image src={this.props.user.photp} />
                            <h3>{`${this.props.user.firstName} ${this.props.user.secondName}`}</h3>
                            <Button className="load-img" bsSize="large" onClick={this.handleClickInput}>
                                <Glyphicon glyph="camera"/>
                            </Button>
                        </Row>
                        <Row className="edit">
                            <Button onClick={this.handleClickInput}>Change photo</Button>
                            <input type="file" ref={input => this.state.input = input} accept="image/*"/>
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
                        <h1>My adverts</h1>
                        <ListGroup>
                            {renderAdverts}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
}
