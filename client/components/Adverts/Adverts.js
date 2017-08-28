import React from 'react';
import { Grid, Row, Col, ListGroup, Tab, Nav, NavItem, Button, Panel, Pagination, Modal } from 'react-bootstrap';
import './adverts.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import RespondDialog from './RespondDialog/RespondDialog';

export default class Adverts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRespondDialogOpen: false,
            activePage: 1,
            activeTab: 'rentOf',
            openResondId: null,
        };
        this.changeStateDialog = this.changeStateDialog.bind(this);
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
            activeTab: type,
            activePage: 1
        });
          
    }

    changeStateDialog(e) {
        this.setState({ 
            openResondId: e.target.id,
            isRespondDialogOpen: !this.state.isRespondDialogOpen
        });
    }

    render() {
        const renderAdverts = (
            <ListGroup>
                {this.props.adverts.map((advert, key) => 
                    <div  key={key} className="advert">
                        <AdvertPanel advert={advert} />
                        <Button onClick={this.changeStateDialog} id={advert.id}>respond</Button>
                    </div>
                )}
            </ListGroup>
        );
        return(
            <Grid className="adverts" >
                <Tab.Container id="left-tabs" defaultActiveKey="rentOf">
                    <Row>
                        <Col xs={12} sm={3} className="tabs">
                            <Nav bsStyle="pills"  stacked onClick={this.changeTab}>
                                <NavItem eventKey="rentOf">
                                    Rent of
                                </NavItem >
                                <NavItem eventKey="rentOut">
                                    Rent out
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
                <RespondDialog
                    activePage={this.state.activePage}
                    activeTab={this.state.activeTab}
                    userId={this.props.userId}
                    changeAdvertActivity={this.props.changeAdvertActivity}
                    advertId={this.state.openResondId}
                    sendResponse={this.props.addMessage} 
                    closeRespondDialog={this.changeStateDialog}
                    isRespondDialogOpen={this.state.isRespondDialogOpen} 
                />
            </Grid>
        );    
    }
}
