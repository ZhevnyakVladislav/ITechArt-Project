import React from 'react';
import { advertTypeInInt, advertTypeInString } from '../../constants/AdvertType';
import { Grid, Row, Col, ListGroup, Tab, Nav, NavItem, Button, Panel, Pagination, Modal } from 'react-bootstrap';
import './adverts.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';

export default class Adverts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            activeTab: advertTypeInInt[advertTypeInString[1]],
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }
    
    componentDidMount() {
        this.props.getFewAdverts(this.state.activeTab, this.state.activePage);
        
    }

    handleSelect(eventKey) {
        this.props.getFewAdverts(this.state.activeTab, eventKey);
        this.setState({
            activePage: eventKey
        });
    }

    changeTab(e) {
        const type = e.target.id.split('-')[3];
        this.props.getFewAdverts(type, 1);  
        this.setState({
            activeTab: advertTypeInInt[advertTypeInString[1]],
            activePage: 1
        });
          
    }
    
    render() {
        const renderAdverts = (
            <ListGroup>
                {this.props.adverts.map((advert, key) => 
                    <div  key={key} className="advert">
                        <AdvertPanel 
                            history={this.props.history}
                            advert={advert} />
                    </div>
                )}
            </ListGroup>
        );
        return(
            <Grid className="adverts" >
                <Tab.Container id="left-tabs" defaultActiveKey={advertTypeInInt[advertTypeInString[1]]}>
                    <Row>
                        <Col xs={12} sm={3} className="tabs">
                            <Nav bsStyle="pills" stacked onClick={this.changeTab}>
                                <NavItem eventKey={advertTypeInInt[advertTypeInString[1]]}>
                                    {advertTypeInString[1]}
                                </NavItem >
                                <NavItem eventKey={advertTypeInInt[advertTypeInString[2]]}>
                                    {advertTypeInString[2]}
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs={12} sm={8}>
                            <Tab.Content animation>
                                <Tab.Pane eventKey={this.state.activeTab}>
                                    {renderAdverts}
                                </Tab.Pane>
                                <Row>
                                    <Pagination
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                        items={Math.ceil(this.props.advertsCount / 3)}
                                        maxButtons={3}
                                        activePage={this.state.activePage}
                                        onSelect={this.handleSelect} />
                                </Row>
                            </Tab.Content>
                        </Col>
                    </Row> 
                </Tab.Container>
            </Grid>
        );    
    }
}
