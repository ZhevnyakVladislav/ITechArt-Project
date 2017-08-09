import React from 'react';
import { Grid, Row, Col, ListGroup, Tab, Nav, NavItem, Button, Panel, Pagination, Modal } from 'react-bootstrap';
import './adverts.scss';

import AdvertPanel from '../AdvertPanel/AdvertPanel';
import RespondDialog from './RespondDialog/RespondDialog';

export default class Adverts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adverts: [],
            isRespondDialogOpen: false,
            activePage: 1,
            activeTab: 'rentOf'
        };
        this.renderAdvertsList = this.renderAdvertsList.bind(this);
        this.changeStateDialog = this.changeStateDialog.bind(this);
        this.handleSendResponse = this.handleSendResponse.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }
    
    componentDidMount() {
        this.props.getFewAdverts(this.state.activePage, this.state.activeTab);
    }

    componentWillReceiveProps(props) {
        this.setState({ 
            adverts: props.adverts
        });
    }
    
    handleSelect(eventKey) {
        this.props.getFewAdverts(eventKey, this.state.activeTab);
        this.setState({
            activePage: eventKey
        });
    }

    changeTab(e) {
        const type = e.target.id.split('-')[3];
        this.props.getFewAdverts(this.state.activePage, type);
        this.setState({
            activeTab: type
        });
          
    }

    changeStateDialog(e) {
        this.setState({ isRespondDialogOpen: !this.state.isRespondDialogOpen});
    }

    handleSendResponse(e) {
        this.changeStateDialog();
    }

    renderAdvertsList() {
        return (
            <ListGroup>
                {this.state.adverts.map((advert, key) => 
                    <div  key={key} className="advert">
                        <AdvertPanel advert={advert} />
                        <Button onClick={this.changeStateDialog} value={advert.title}>respond</Button>
                    </div>
                )}
            </ListGroup>
        );
    }

    render() {
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
                                    {this.renderAdvertsList()}
                                </Tab.Pane>
                                <Row>
                                    <Pagination
                                        prev
                                        next
                                        first
                                        last
                                        ellipsis
                                        boundaryLinks
                                        items={Math.ceil(this.props.count / 3)}
                                        maxButtons={3}
                                        activePage={this.state.activePage}
                                        onSelect={this.handleSelect} />
                                </Row>
                            </Tab.Content>
                        </Col>
                    </Row> 
                </Tab.Container>
                <RespondDialog
                    sendResponse={this.handleSendResponse} 
                    closeRespondDialog={this.changeStateDialog}
                    isRespondDialogOpen={this.state.isRespondDialogOpen} 
                />
            </Grid>
        );    
    }
}
