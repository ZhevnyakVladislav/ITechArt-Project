import React from 'react';
import { Grid, Row, Col, Image, ListGroupItem, Label, Button, Glyphicon, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './userPage.scss';

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
            languages: '',
        };
        this.changePhoto = this.changePhoto.bind(this);
    }

    changePhoto() {
        console.log('changed');
    }

    render() {
        return(
            <Grid className="user-page">
                <Row>
                    <Col xs={12} smOffset={1} sm={3}>
                        <Row className="avatar">
                            <Image src="https://pp.userapi.com/c841431/v841431451/3143/3DQxHFaDsCw.jpg" />
                            <h3>Vladislav Zhevnyak</h3>
                            <Button className="load-img" bsSize="large" onClick={this.changePhoto}>
                                <Glyphicon glyph="camera"/>
                            </Button>
                        </Row>
                        <Row className="edit">
                            <Button onClick={this.changePhoto}>Change photo</Button>
                        </Row>
                    </Col>  
                    <Col xs={12} sm={7} className="user-info">
                        <ListGroupItem header="Pseudnym">Pseudnym</ListGroupItem>
                        <ListGroupItem header="Email">dfawdawd@gmail.com</ListGroupItem>
                        <ListGroupItem header="Country">Belarus</ListGroupItem> 
                        <ListGroupItem header="City">Minsk</ListGroupItem> 
                        <ListGroupItem header="Languages">
                            <Label>Russian</Label>
                            <Label>English</Label>
                            <Label>Belarusian</Label>
                            <Label>Belarusian</Label>
                            <Label>Belarusian</Label>
                            <Label>Belarusian</Label>
                        </ListGroupItem> 
                    </Col>        
                </Row>
            </Grid>
        ); 
    }
}
