import React from 'react';
import { Grid, Row, Col, ListGroup, Tab, Nav, NavItem, Button, Panel, Pagination } from 'react-bootstrap';
import './adverts.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';

export default class Adverts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adverts: [],
        };
        for (var i = 0; i < 3; i++) {
            this.state.adverts.push({
                title: 'Czym jest Lorem Ipsum?',
                discription: 'W przeciwieństwie do  opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli '
            });
        }
        this.renderAdvertsList = this.renderAdvertsList.bind(this);
    }

    renderAdvertsList() {
        return (
            <ListGroup>
                {this.state.adverts.map((advert,key) => 
                    <AdvertPanel key={key} advert={{
                        title: advert.title,
                        discription: advert.discription
                    }}/>
                )}
            </ListGroup>
        );
    }

    render() {
        return(
            <Grid className="adverts" >
                <Tab.Container id="left-tabs" defaultActiveKey="reception">
                    <Row>
                        <Col xs={12} sm={3} className="tabs">
                            <Nav bsStyle="pills"  stacked>
                                <NavItem eventKey="reception">
                                    Reception
                                </NavItem>
                                <NavItem eventKey="search">
                                    Search
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={12} sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey="reception">
                                    {this.renderAdvertsList()}
                                    <Row>
                                        <Pagination
                                            prev
                                            next
                                            first
                                            last
                                            ellipsis
                                            boundaryLinks
                                            items={5}
                                            maxButtons={3}
                                            activePage={this.state.activePage}
                                            onSelect={this.handleSelect} />
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row> 
                </Tab.Container>
            </Grid>
        );    
    }
}
