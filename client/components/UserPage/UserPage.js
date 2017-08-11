import React from 'react';
import { Grid, Row, Col, Image, ListGroupItem, Label, Button, Glyphicon, ListGroup, Collapse,Well } from 'react-bootstrap';
import './userPage.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import MessageBox from '../MessageBox/MessageBox';

export default  class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            secondName: '',
            email: '',
            pseudonym: '',
            country: '',
            city: '',
            languages: ['russian','english','russian','russian','russian'],
            userAdverts: [],
        };
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleShowMessageBox = this.handleShowMessageBox.bind(this);
        this.removeAdvert = this.removeAdvert.bind(this);
    }

    componentDidMount() {
        this.props.getUserAdverts(1);
    }
    
    componentWillReceiveProps(props) {
        this.setState({ 
            userAdverts: props.userAdverts
        });
    }

    handleChangePhoto() {
        console.log('changed');
    }

    handleShowMessageBox(e) {
        const advert = this.state.userAdverts.find(advert => advert.id == e.target.id);
        const index = this.state.userAdverts.indexOf(advert);
        this.state.userAdverts[index].isMessageBoxOpen = !this.state.userAdverts[index].isMessageBoxOpen;
        this.setState({ userAdverts: this.state.userAdverts });
    }
    
    removeAdvert(e) {
        this.props.removeAdvert(e.target.id);
    }

    render() {
        const renderLanguages = (
            <ListGroupItem header="Languages">
                {this.state.languages.map((language, i) => <Label key={i}>{language}</Label>)}       
            </ListGroupItem>
        );
        const renderAdverts = (
            this.state.userAdverts.map((advert, i) => 
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
                            <Image src="http://bm.img.com.ua/nxs/img/prikol/images/large/3/9/315193.jpg" />
                            <h3>Vladislav Zhevnyak</h3>
                            <Button className="load-img" bsSize="large" onClick={this.handleChangePhoto}>
                                <Glyphicon glyph="camera"/>
                            </Button>
                        </Row>
                        <Row className="edit">
                            <Button onClick={this.handleChangePhoto}>Change photo</Button>
                        </Row>
                    </Col>  
                    <Col xs={12} sm={7} className="user-info">
                        <ListGroupItem header="Pseudnym">Pseudnym</ListGroupItem>
                        <ListGroupItem header="Email">dfawdawd@gmail.com</ListGroupItem>
                        <ListGroupItem header="Country">Belarus</ListGroupItem> 
                        <ListGroupItem header="City">Minsk</ListGroupItem> 
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
