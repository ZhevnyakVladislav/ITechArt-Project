import React from 'react';
import { Grid, Row, Col, Image, ListGroupItem, Label, Button, Glyphicon, ListGroup, Collapse,Well } from 'react-bootstrap';
import './userPage.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';

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
        for (var i = 0; i < 3; i++) {
            this.state.userAdverts.push({
                id: i,
                title: 'Czym jest Lorem Ipsum?',
                discription: 'W przeciwieństwie do  opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli ',
                isMessageOpen: false,
            });
        }
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleShowMessage = this.handleShowMessage.bind(this);
        this.renderLanguages = this.renderLanguages.bind(this);
    }

    handleChangePhoto() {
        console.log('changed');
    }

    handleShowMessage(e) {
        this.state.userAdverts[e.target.id].isMessageOpen = !this.state.userAdverts[e.target.id].isMessageOpen;
        this.setState({ userAdverts: this.state.userAdverts });
    }

    
    renderLanguages() {
        return(
            <ListGroupItem header="Languages">
                {this.state.languages.map((language,i) => <Label key={i}>{language}</Label>)}       
            </ListGroupItem> 
        );
    }

    render() {
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
                        {this.renderLanguages()}
                    </Col>        
                </Row>
                <Row>
                    <Col className="adverts" xs={12} smOffset={1} sm={10}>
                        <h1>My adverts</h1>
                        <ListGroup>
                            {this.state.userAdverts.map((advert, key) => 
                                <div  key={advert.id} className="advert">
                                    <AdvertPanel 
                                        advert={{
                                            title: advert.title,
                                            discription: advert.discription
                                        }}/>
                                    <Button className="load-img" onClick={this.handleShowMessage}>
                                        <Glyphicon id={advert.id} glyph="envelope"/>
                                    </Button>
                                    <Collapse in={advert.isMessageOpen} className='message'>
                                        <Col>
                                            <Well>
                                                Hello, Vladislav, I'd like to rent you flat. Please, call me +375-29-542-23-23
                                            </Well>
                                        </Col>
                                    </Collapse>
                                </div>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        ); 
    }
}
